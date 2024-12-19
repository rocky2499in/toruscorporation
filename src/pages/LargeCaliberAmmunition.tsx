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

const LargeCaliberAmmunition = () => {
  const products = [
    {
      product: "12.7mm Heavy Round",
      caliber: "12.7mm",
      description: "High-powered heavy caliber round",
    },
  ];

  const specifications = [
    {
      caliber: "12.7mm",
      model: "Heavy Round",
      specs: {
        length: "147.50 mm",
        mass: "137 gm",
        projectileWeight: "49 gm",
        muzzleVelocity: "817 m/s",
        penetration: "20mm armor at 100m",
      },
      description: "High-powered heavy caliber round with incendiary composition. Designed for anti-materiel and long-range precision applications.",
      shelfLife: "7 years",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Large Caliber Ammunition</h1>
        
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

export default LargeCaliberAmmunition;