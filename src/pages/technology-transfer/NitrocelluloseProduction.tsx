import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Beaker, Atom } from "lucide-react";

const NitrocelluloseProduction = () => {
  const processes = [
    {
      title: "Nitrocellulose",
      description: "Advanced facilities for producing high-quality nitrocellulose, a key component in various explosive formulations. Our process ensures precise control over nitrogen content and viscosity.",
      icon: Beaker,
    },
    {
      title: "Nitroglycerine",
      description: "State-of-the-art nitroglycerine production plant with enhanced safety features. Our technology allows for efficient production while maintaining strict safety standards and environmental considerations.",
      icon: Atom,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-secondary mb-8">Nitrocellulose and Nitroglycerine Production</h1>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-600">
          Our advanced production facilities maintain the highest standards in
          nitrocellulose and nitroglycerine manufacturing, ensuring quality and safety
          in every batch.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {processes.map((process) => (
          <Card key={process.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <process.icon className="w-8 h-8 text-primary" />
                <CardTitle className="text-xl">{process.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{process.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NitrocelluloseProduction;