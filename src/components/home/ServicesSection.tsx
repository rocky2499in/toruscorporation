import { Shield, Rocket, Users, Globe } from "lucide-react";

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

const ServicesSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon className="w-12 h-12 text-primary mb-4 transform transition-transform hover:scale-110 duration-300" />
              <h3 className="text-xl font-semibold mb-2 text-secondary">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;