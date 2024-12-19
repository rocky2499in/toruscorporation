import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Recycle } from "lucide-react";

const TNTManufacturing = () => {
  const processes = [
    {
      title: "Continuous TNT Plant",
      description: "State-of-the-art facility for uninterrupted TNT production, ensuring consistent quality and output.",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    },
    {
      title: "De-Nitration Process",
      description: "Advanced de-nitration techniques to enhance safety and environmental compliance in TNT manufacturing.",
      icon: Recycle,
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
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
            <Card key={process.title} className="overflow-hidden">
              <div className="h-64 relative">
                <img
                  src={process.image}
                  alt={process.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <process.icon className="w-16 h-16 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl mb-4">{process.title}</CardTitle>
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