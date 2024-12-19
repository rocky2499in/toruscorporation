import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, Disc, Square } from "lucide-react";

const SpecializedExplosives = () => {
  const products = [
    {
      title: "Ball Powder",
      description: "Advanced manufacturing process for spherical propellant powder, offering improved ballistic performance and consistency.",
      icon: Disc,
    },
    {
      title: "Nitroguanidine Picrite",
      description: "Specialized production of this high-nitrogen compound, crucial for certain propellant and explosive formulations.",
      icon: Square,
    },
    {
      title: "Plastic Explosives",
      description: "State-of-the-art facilities for producing moldable explosive materials, combining high power with enhanced safety features.",
      icon: Atom,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Specialized Explosive Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <product.icon className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecializedExplosives;