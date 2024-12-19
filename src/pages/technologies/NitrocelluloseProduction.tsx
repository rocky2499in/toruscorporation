import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flask, Droplets } from "lucide-react";

const NitrocelluloseProduction = () => {
  const processes = [
    {
      title: "Nitrocellulose",
      description: "Advanced facilities for producing high-quality nitrocellulose, a key component in various explosive formulations. Our process ensures precise control over nitrogen content and viscosity.",
      icon: Flask,
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    },
    {
      title: "Nitroglycerine",
      description: "State-of-the-art nitroglycerine production plant with enhanced safety features. Our technology allows for efficient production while maintaining strict safety standards and environmental considerations.",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
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

export default NitrocelluloseProduction;