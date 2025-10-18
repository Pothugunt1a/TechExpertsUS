import { motion } from "framer-motion";

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: "3D Ocean", logo: "/assets/3docean.png" },
  { name: "Active Den", logo: "/assets/activeden.png" },
  { name: "Audio Jungle", logo: "/assets/audiojungle.png" },
  { name: "Code Canyon", logo: "/assets/codecanyon.png" },
  { name: "Graphic River", logo: "/assets/graphicriver.png" },
  { name: "Photo Dune", logo: "/assets/photodune.png" },
  { name: "Theme Forest", logo: "/assets/themeforest.png" },
  { name: "Video Hive", logo: "/assets/videohive.png" },
];

export function ClientsScrollingCarousel() {
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Single unified background for all logos */}
      <div className="relative bg-card/30 backdrop-blur-sm py-8 px-4">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <motion.div
          className="flex gap-6 md:gap-8"
          animate={{
            x: [0, -1 * (clients.length * (170 + 32))],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="relative flex-shrink-0 w-[170px] h-[90px] flex items-center justify-center group"
              data-testid={`client-logo-${client.name.toLowerCase().replace(/\s+/g, "-")}-${index}`}
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
