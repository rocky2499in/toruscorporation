import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Flask, Atom, Rocket, Beaker, Zap } from "lucide-react";

const TechnologyTransfer = () => {
  const technologies = [
    {
      title: "TNT Manufacturing",
      description: "Advanced TNT production technology with focus on safety and efficiency",
      icon: Flask,
      path: "/technology-transfer/tnt"
    },
    {
      title: "RDX Manufacturing",
      description: "Cutting-edge RDX production capabilities and expertise",
      icon: Atom,
      path: "/technology-transfer/rdx"
    },
    {
      title: "Ammonium Perchlorate",
      description: "State-of-the-art ammonium perchlorate production technology",
      icon: Beaker,
      path: "/technology-transfer/ammonium-perchlorate"
    },
    {
      title: "Nitrocellulose",
      description: "Advanced nitrocellulose manufacturing process and know-how",
      icon: Zap,
      path: "/technology-transfer/nitrocellulose"
    },
    {
      title: "Propellants",
      description: "Comprehensive propellant manufacturing technology",
      icon: Rocket,
      path: "/technology-transfer/propellants"
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
              <Card className="h-full hover:shadow-lg transition-shadow">
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