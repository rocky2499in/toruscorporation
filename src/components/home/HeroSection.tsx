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
    link: "/products",
    bgImage: "/lovable-uploads/9546de80-6067-4f12-bd9c-2683312f8d98.png"
  },
  {
    title: "Advanced Components",
    description: "Explore our specialized components designed for maximum performance and safety in explosive applications.",
    link: "/components",
    bgImage: "/lovable-uploads/820b9b98-d755-4f2e-b96d-3838171f37c9.png"
  },
  {
    title: "Technology Transfer",
    description: "Partner with us to access cutting-edge explosive technology and manufacturing expertise.",
    link: "/technology-transfer",
    bgImage: "/lovable-uploads/d392e7cf-bd63-4e75-ac87-617cc79c6189.png"
  }
];

const HeroSection = () => {
  return (
    <div className="pt-24 pb-16 bg-secondary relative overflow-hidden min-h-[80vh]">
      {/* Bullet animation elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bullet-trail absolute h-1 w-8 bg-primary rounded-full animate-bullet-1"></div>
        <div className="bullet-trail absolute h-1 w-8 bg-primary rounded-full animate-bullet-2"></div>
        <div className="bullet-trail absolute h-1 w-8 bg-primary rounded-full animate-bullet-3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 h-full">
        <Carousel className="w-full max-w-5xl mx-auto h-full" opts={{ loop: true }}>
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="h-full">
                <div 
                  className="text-center animate-fade-up p-6 min-h-[60vh] flex flex-col items-center justify-center relative"
                  style={{
                    backgroundImage: `url(${slide.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/60" />
                  
                  <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
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