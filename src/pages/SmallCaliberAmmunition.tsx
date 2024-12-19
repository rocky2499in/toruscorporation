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

const SmallCaliberAmmunition = () => {
  const products = [
    {
      category: "Small Calibre Ammunition",
      product: "Cartridge 0.22\" Ball",
      caliber: "0.22\"",
      description: "Standard small arms ammunition",
      specifications: {
        length: "25 mm",
        mass: "3.370 gm",
        projectileWeight: "2.6 gm",
        muzzleVelocity: "305 m/s",
        shelfLife: "10 years",
      },
    },
    // ... Add other products here
  ];

  const specifications = [
    {
      caliber: "5.56mm",
      model: "Ball Ammunition",
      specs: {
        length: "57.4 mm",
        mass: "12.8 gm",
        projectileWeight: "4.0 gm",
        muzzleVelocity: "910 m/s",
        penetration: "3.45mm mild steel at 700m",
      },
      description: "High-precision rifle ammunition designed for military and defense applications. Bottle-necked design with brass 70:30 composition and steel insert. Performs effectively across wide temperature ranges from -52°C to 72°C.",
      shelfLife: "15 years",
    },
    // ... Add other specifications
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Small Caliber Ammunition</h1>
        
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
                      <TableHead>Product</TableHead>
                      <TableHead>Caliber/Size</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.product}>
                        <TableCell className="font-medium">{product.product}</TableCell>
                        <TableCell>{product.caliber}</TableCell>
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
                    <CardTitle>{spec.caliber} - {spec.model}</CardTitle>
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

export default SmallCaliberAmmunition;