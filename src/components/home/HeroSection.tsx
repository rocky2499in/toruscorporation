import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pioneering Explosive Technology
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Welcome to Torus Corporation, India's premier manufacturer and service
            provider for commercial and defence explosives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Link to="/defence-products">Explore Products</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent text-white hover:bg-white/10"
            >
              <Link to="/schedule">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;