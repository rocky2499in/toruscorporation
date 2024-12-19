import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flask, Atom, Shield } from "lucide-react";

const AmmoniumPerchlorate = () => {
  const features = [
    {
      title: "Production Technology",
      description: "State-of-the-art manufacturing process for high-purity ammonium perchlorate",
      icon: Flask,
    },
    {
      title: "Quality Control",
      description: "Advanced quality control measures ensuring consistent product specifications",
      icon: Shield,
    },
    {
      title: "Applications",
      description: "Wide range of applications in solid rocket propellants and pyrotechnics",
      icon: Atom,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Ammonium Perchlorate Manufacturing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmmoniumPerchlorate;