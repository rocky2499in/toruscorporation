import { Shield, Rocket, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
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