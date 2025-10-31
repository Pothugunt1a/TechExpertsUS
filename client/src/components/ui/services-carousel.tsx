import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ServiceCard } from "./service-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  image?: string;
  logo?: string;
}

interface ServicesCarouselProps {
  services: Service[];
}

export function ServicesCarousel({ services }: ServicesCarouselProps) {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-4">
          {services.map((service, index) => (
            <CarouselItem 
              key={service.title} 
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <ServiceCard {...service} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Buttons */}
        <CarouselPrevious 
          className="left-0 -translate-x-1/2 bg-background/80 backdrop-blur-md border-primary/30 hover:bg-primary/20 hover:border-primary/60 transition-all shadow-lg"
          data-testid="button-carousel-prev"
        />
        <CarouselNext 
          className="right-0 translate-x-1/2 bg-background/80 backdrop-blur-md border-primary/30 hover:bg-primary/20 hover:border-primary/60 transition-all shadow-lg"
          data-testid="button-carousel-next"
        />
      </Carousel>
    </div>
  );
}
