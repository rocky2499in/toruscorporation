import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "Pioneering Explosive Products",
    description: "Discover our comprehensive range of commercial and defence explosives, engineered for excellence and reliability.",
    link: "/products"
  },
  {
    title: "Advanced Components",
    description: "Explore our specialized components designed for maximum performance and safety in explosive applications.",
    link: "/components"
  },
  {
    title: "Technology Transfer",
    description: "Partner with us to access cutting-edge explosive technology and manufacturing expertise.",
    link: "/technology-transfer"
  }
];

const HeroSection = () => {
  return (
    <div className="pt-24 pb-16 bg-secondary relative overflow-hidden">
      {/* Bullet animation elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bullet-trail absolute h-1 w-8 bg-primary rounded-full animate-bullet-1"></div>
        <div className="bullet-trail absolute h-1 w-8 bg-primary rounded-full animate-bullet-2"></div>
        <div className="bullet-trail absolute h-1 w-8 bg-primary rounded-full animate-bullet-3"></div>
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />
      
      <div className="container mx-auto px-4 relative z-10">
        <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="text-center animate-fade-up p-6">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-gray-300 mb-8">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-white"
                    >
                      <Link to={slide.link}>Explore Products</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-transparent text-white hover:bg-white/10"
                    >
                      <Link to="/contact">Schedule a Call</Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 text-white border-white hover:bg-white/20" />
          <CarouselNext className="hidden md:flex -right-4 text-white border-white hover:bg-white/20" />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;