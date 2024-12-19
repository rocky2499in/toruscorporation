import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Beaker, Atom, Rocket, Zap } from "lucide-react";

const TechnologyTransfer = () => {
  const technologies = [
    {
      title: "TNT Manufacturing",
      description: "Advanced TNT production technology with focus on safety and efficiency",
      icon: Beaker,
      path: "/technology-transfer/tnt",
      image: "/lovable-uploads/7cd4246f-abf2-4cf2-b8e7-7aeceaa5e617.png"
    },
    {
      title: "RDX Manufacturing",
      description: "Cutting-edge RDX production capabilities and expertise",
      icon: Atom,
      path: "/technology-transfer/rdx",
      image: "/lovable-uploads/86238e68-c584-4431-a072-a04cc31a173b.png"
    },
    {
      title: "Ammonium Perchlorate",
      description: "State-of-the-art ammonium perchlorate production technology",
      icon: Zap,
      path: "/technology-transfer/ammonium-perchlorate",
      image: "/lovable-uploads/820b9b98-d755-4f2e-b96d-3838171f37c9.png"
    },
    {
      title: "Nitrocellulose",
      description: "Advanced nitrocellulose manufacturing process and know-how",
      icon: Beaker,
      path: "/technology-transfer/nitrocellulose",
      image: "/lovable-uploads/9546de80-6067-4f12-bd9c-2683312f8d98.png"
    },
    {
      title: "Propellants",
      description: "Comprehensive propellant manufacturing technology",
      icon: Rocket,
      path: "/technology-transfer/propellants",
      image: "/lovable-uploads/c83132c0-0994-4dd7-9b0e-bba6bcaf2238.png"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Technology Transfer</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          Explore our range of advanced manufacturing technologies available for transfer
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <Link key={tech.title} to={tech.path}>
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 relative">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <tech.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <tech.icon className="w-8 h-8 text-primary" />
                    <CardTitle className="text-xl">{tech.title}</CardTitle>
                  </div>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyTransfer;