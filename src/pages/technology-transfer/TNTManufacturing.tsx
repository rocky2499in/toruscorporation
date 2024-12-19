import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Beaker, Atom } from "lucide-react";

const TNTManufacturing = () => {
  const processes = [
    {
      title: "Continuous TNT Plant",
      description: "State-of-the-art facility for uninterrupted TNT production, ensuring consistent quality and output.",
      icon: Beaker,
    },
    {
      title: "De-Nitration Process",
      description: "Advanced de-nitration techniques to enhance safety and environmental compliance in TNT manufacturing.",
      icon: Atom,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">TNT Manufacturing: Continuous Innovation</h1>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600">
            Our TNT manufacturing facilities represent the pinnacle of explosive
            production technology, combining efficiency with stringent safety measures
            and environmental considerations.
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
    </div>
  );
};

export default TNTManufacturing;