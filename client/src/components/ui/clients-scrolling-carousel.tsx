import { motion } from "framer-motion";
import { SiDiscord, SiSlack, SiGoogle, SiAmazon, SiOracle, SiCisco, SiNetflix, SiSpotify, SiAdobe, SiSamsung, SiNvidia, SiIntel } from "react-icons/si";

interface Client {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const clients: Client[] = [
  { name: "Discord", icon: SiDiscord },
  { name: "Slack", icon: SiSlack },
  { name: "Google", icon: SiGoogle },
  { name: "Amazon", icon: SiAmazon },
  { name: "Netflix", icon: SiNetflix },
  { name: "Spotify", icon: SiSpotify },
  { name: "Adobe", icon: SiAdobe },
  { name: "Samsung", icon: SiSamsung },
  { name: "Nvidia", icon: SiNvidia },
  { name: "Intel", icon: SiIntel },
  { name: "Oracle", icon: SiOracle },
  { name: "Cisco", icon: SiCisco },
];

export function ClientsScrollingCarousel() {
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling container */}
      <motion.div
        className="flex gap-6 md:gap-8 lg:gap-12"
        animate={{
          x: [0, -1 * (clients.length * (170 + 48))],
        }}
        transition={{
          x: {
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="relative flex-shrink-0 w-[170px] h-[110px] flex items-center justify-center bg-card/40 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            data-testid={`client-logo-${client.name.toLowerCase()}-${index}`}
          >
            <client.icon className="w-16 h-16 md:w-20 md:h-20 text-muted-foreground group-hover:text-primary transition-colors duration-300 opacity-60 group-hover:opacity-100" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
