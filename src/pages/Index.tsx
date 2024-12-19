import { Shield, Rocket, Users, Globe, Target, Lightbulb, CheckCircle2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProductCard } from "@/components/ProductCard";

const Index = () => {
  const services = [
    {
      icon: Shield,
      title: "Manufacturing Excellence",
      description: "State-of-the-art facilities for producing high-quality explosives",
    },
    {
      icon: Rocket,
      title: "Technical Support",
      description: "Expert assistance in installation and maintenance",
    },
    {
      icon: Users,
      title: "Customized Solutions",
      description: "Tailored explosive products for specific requirements",
    },
    {
      icon: Globe,
      title: "Global Presence",
      description: "Operating in over 30 countries worldwide",
    },
  ];

  const featuredProducts = [
    {
      product: ".40 S&W 200 gr. Subsonic FSJ",
      type: "Competition Grade",
      description: "High-performance competition ammunition with gentle recoil",
      image: "/lovable-uploads/4825ed20-3bf3-4bb8-9cd8-082d9101526f.png"
    },
    {
      product: "9mm Luger 135 gr. Subsonic FSJ",
      type: "Competition/Training",
      description: "Breakthrough in ammunition design for tactical shooting",
      image: "/lovable-uploads/7b986667-e02d-47a4-9b9f-ec35959b335c.png"
    },
    {
      product: "9mm Luger 150 gr. Subsonic FSJ",
      type: "Competition/Training",
      description: "Unparalleled precision with synthetic jacket technology",
      image: "/lovable-uploads/1b5c4653-5ec9-4e7b-8fc6-46a9333e0e09.png"
    }
  ];

  const whyChooseFeatures = [
    {
      icon: Shield,
      title: "RELIABILITY",
      description: "Trust our ammunition to perform flawlessly, shot after shot."
    },
    {
      icon: Lightbulb,
      title: "INNOVATION",
      description: "Our specialists are dedicated to developing cutting-edge ammunition technology."
    },
    {
      icon: CheckCircle2,
      title: "QUALITY CONTROL",
      description: "Rigorous testing and strict quality standards ensure every round meets our exacting specifications."
    },
    {
      icon: Heart,
      title: "CUSTOMER SATISFACTION",
      description: "We are committed to providing top-tier products and exceptional customer service."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="pt-24 pb-16 bg-secondary relative"
        style={{
          backgroundImage: "url('/lovable-uploads/820b9b98-d755-4f2e-b96d-3838171f37c9.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
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

      {/* Product Overview Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-secondary">Product Overview</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
            Discover our premium range of sports ammunition, engineered for competitive shooting and professional applications.
          </p>

          {/* Product Carousel */}
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {featuredProducts.map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">WHY CHOOSE</h2>
          <h3 className="text-2xl font-bold text-primary text-center mb-12">TORUS GMBH</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-secondary">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our explosive technology solutions can meet
            your specific requirements.
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;