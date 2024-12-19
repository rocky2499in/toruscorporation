import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Zap, Atom } from "lucide-react";

const PropellantPortfolio = () => {
  const propellants = [
    {
      title: "Single Base Propellant (SBP)",
      description: "Advanced production of nitrocellulose-based propellants, offering excellent performance for various applications.",
      icon: Rocket,
    },
    {
      title: "Double Base Propellant (DBP)",
      description: "Specialized manufacturing of propellants combining nitrocellulose and nitroglycerine for enhanced energy output.",
      icon: Zap,
    },
    {
      title: "Triple Base Propellant (TBP)",
      description: "Cutting-edge production of advanced propellants incorporating nitroguanidine for reduced flash and barrel erosion.",
      icon: Atom,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Diverse Propellant Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propellants.map((propellant) => (
            <Card key={propellant.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <propellant.icon className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">{propellant.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{propellant.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropellantPortfolio;