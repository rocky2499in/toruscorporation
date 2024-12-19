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

const MediumCaliberAmmunition = () => {
  const products = [
    {
      product: "Cartg. 30mm",
      caliber: "30mm",
      description: "Medium caliber ammunition",
    },
    {
      product: "Cartg. 76/62 mm SRCR MRCR",
      caliber: "76/62mm",
      description: "Naval/marine ammunition",
    },
    {
      product: "AK 630 SRGM-1 Chaff Rocket HE/I & PRAC",
      caliber: "Various",
      description: "Defense system rocket",
    },
  ];

  const specifications = [
    {
      caliber: "30mm",
      model: "Standard Round",
      specs: {
        length: "290mm",
        mass: "850g",
        muzzleVelocity: "1070 m/s",
        effectiveRange: "3000m",
        penetration: "55mm RHA at 1000m",
      },
      description: "High-performance medium caliber ammunition designed for modern automatic cannons. Features tungsten penetrator and advanced propellant system.",
      shelfLife: "10 years",
    },
    {
      caliber: "76/62mm",
      model: "Naval Round",
      specs: {
        length: "900mm",
        mass: "12.5kg",
        muzzleVelocity: "925 m/s",
        effectiveRange: "16000m",
        fragmentationRadius: "150m",
      },
      description: "Naval gun ammunition optimized for anti-aircraft and surface target engagement. Multi-purpose capability with programmable fuze.",
      shelfLife: "15 years",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Medium Caliber Ammunition</h1>
        
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

export default MediumCaliberAmmunition;