import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Beaker, Atom, Cog } from "lucide-react";

const RDXManufacturing = () => {
  const capabilities = [
    {
      title: "RDX Production Plant",
      description: "Cutting-edge facility for producing high-quality RDX, a powerful military and industrial explosive.",
      icon: Beaker,
    },
    {
      title: "Continuous and Batch Processes",
      description: "Flexible manufacturing capabilities offering both continuous and batch production methods to meet diverse client needs.",
      icon: Cog,
    },
    {
      title: "RDX Compounded Products",
      description: "Specialized plant for creating RDX-based compositions and formulations for various applications.",
      icon: Atom,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-secondary mb-8">RDX: Advanced Manufacturing Capabilities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((capability) => (
          <Card key={capability.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <capability.icon className="w-8 h-8 text-primary" />
                <CardTitle className="text-xl">{capability.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{capability.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RDXManufacturing;