import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, Target, Rocket, Bomb, Crosshair, Flask } from "lucide-react";

const DefenceProducts = () => {
  const categories = [
    {
      title: "Small Caliber Ammunition",
      description: "Standard small arms ammunition ranging from 0.22\" to 14.5mm",
      icon: Target,
      path: "/defence-products/small-caliber",
    },
    {
      title: "Medium Caliber Ammunition",
      description: "Medium caliber ammunition including 30mm and 76/62mm variants",
      icon: Crosshair,
      path: "/defence-products/medium-caliber",
    },
    {
      title: "Large Caliber Ammunition",
      description: "Heavy-duty ammunition for specialized applications",
      icon: Shield,
      path: "/defence-products/large-caliber",
    },
    {
      title: "Rockets and Aerial Bombs",
      description: "Various rockets and aerial munitions for defense applications",
      icon: Rocket,
      path: "/defence-products/rockets-bombs",
    },
    {
      title: "Mortar Bombs",
      description: "Range of mortar munitions from 51mm to 120mm",
      icon: Bomb,
      path: "/defence-products/mortar-bombs",
    },
    {
      title: "Explosives and Propellants",
      description: "Specialized explosive compounds and propellant materials",
      icon: Flask,
      path: "/defence-products/explosives",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Defence Products</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          Explore our comprehensive range of defense products, from small caliber ammunition
          to advanced explosive systems. Each category represents our commitment to
          excellence in defense technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.title} to={category.path}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 text-primary">
                    <category.icon size={32} />
                  </div>
                  <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DefenceProducts;