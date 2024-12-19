import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RocketsAndBombs = () => {
  const products = [
    {
      category: "Rockets",
      product: "Mine Maindeka",
      size: "Various",
      description: "Ground defense rocket",
    },
    {
      category: "Rockets",
      product: "P.B.G. Mine",
      size: "Various",
      description: "Ground defense system",
    },
    {
      category: "Rockets",
      product: "LRCR",
      size: "Various",
      description: "Long-range combat rocket",
    },
    {
      category: "Rockets",
      product: "RGB 60 Rocket",
      size: "60mm",
      description: "Rocket system",
    },
    {
      category: "Rockets",
      product: "68mm Rocket HE/HC/Practice",
      size: "68mm",
      description: "Multi-purpose rocket",
    },
    {
      category: "Rockets",
      product: "Racket Pinaka",
      size: "Various",
      description: "Multiple rocket launch system",
    },
    {
      category: "Aerial Bombs",
      product: "Aerial Bomb 100-120 Kg",
      size: "100-120 Kg",
      description: "Light aerial munition",
    },
    {
      category: "Aerial Bombs",
      product: "Aerial Bomb 250 Kg",
      size: "250 Kg",
      description: "Medium aerial bomb",
    },
    {
      category: "Aerial Bombs",
      product: "Aerial Bomb 450 Kg",
      size: "450 Kg",
      description: "Heavy aerial bomb",
    },
    {
      category: "Aerial Bombs",
      product: "Aerial Bomb 500 Kg",
      size: "500 Kg",
      description: "Heavy aerial bomb",
    },
    {
      category: "Aerial Bombs",
      product: "Aerial Bomb 1000 Lbs",
      size: "1000 Lbs",
      description: "Large aerial bomb",
    },
  ];

  const specifications = [
    {
      category: "Rockets",
      model: "68mm Multi-Purpose Rocket",
      specs: {
        diameter: "68mm",
        length: "1250mm",
        weight: "4.5kg",
        range: "4000m",
        warheadType: "HE/HC/Practice",
      },
      description: "Versatile rocket system with multiple warhead options. Suitable for various combat scenarios with high accuracy and reliability.",
      shelfLife: "10 years",
    },
    {
      category: "Aerial Bombs",
      model: "500 Kg Aerial Bomb",
      specs: {
        weight: "500 kg",
        length: "2750mm",
        diameter: "400mm",
        explosiveContent: "250kg",
        penetration: "2m reinforced concrete",
      },
      description: "Heavy aerial bomb designed for strategic targets. Features advanced fuzing system and aerodynamic design for precision delivery.",
      shelfLife: "15 years",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Rockets and Aerial Bombs</h1>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specifications">Detailed Specifications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Product Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Category</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.product}>
                        <TableCell className="font-medium">{product.category}</TableCell>
                        <TableCell>{product.product}</TableCell>
                        <TableCell>{product.size}</TableCell>
                        <TableCell>{product.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications">
            <div className="grid gap-6">
              {specifications.map((spec) => (
                <Card key={spec.model}>
                  <CardHeader>
                    <CardTitle>{spec.category} - {spec.model}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Specifications:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {Object.entries(spec.specs).map(([key, value]) => (
                            <li key={key}>
                              {key.replace(/([A-Z])/g, ' $1').trim()}: {value}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Description:</h4>
                        <p className="text-gray-600">{spec.description}</p>
                        <p className="mt-4">
                          <span className="font-semibold">Shelf Life:</span> {spec.shelfLife}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RocketsAndBombs;