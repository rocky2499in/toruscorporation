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

const MortarBombs = () => {
  const products = [
    {
      product: "51mm HE (High Explosive)",
      caliber: "51mm",
      description: "Light mortar munition",
    },
    {
      product: "51mm Smoke",
      caliber: "51mm",
      description: "Smoke-producing mortar round",
    },
    {
      product: "51mm Illuminating",
      caliber: "51mm",
      description: "Illumination round",
    },
    {
      product: "81mm HE",
      caliber: "81mm",
      description: "Standard mortar munition",
    },
    {
      product: "81mm Smoke",
      caliber: "81mm",
      description: "Smoke-producing round",
    },
    {
      product: "81mm Illuminating",
      caliber: "81mm",
      description: "Illumination round",
    },
    {
      product: "120mm HE",
      caliber: "120mm",
      description: "Heavy mortar round",
    },
    {
      product: "120mm Smoke",
      caliber: "120mm",
      description: "Smoke-producing heavy mortar round",
    },
    {
      product: "120mm Illuminating",
      caliber: "120mm",
      description: "Illumination round",
    },
  ];

  const specifications = [
    {
      caliber: "51mm",
      model: "High Explosive",
      specs: {
        weight: "0.9kg",
        length: "230mm",
        range: "800m",
        explosiveContent: "190g",
        effectiveRadius: "12m",
      },
      description: "Compact light mortar round for close support operations. Features impact fuze and high fragmentation steel body.",
      shelfLife: "10 years",
    },
    {
      caliber: "81mm",
      model: "Standard HE",
      specs: {
        weight: "4.1kg",
        length: "400mm",
        range: "5700m",
        explosiveContent: "950g",
        effectiveRadius: "35m",
      },
      description: "Medium mortar round with excellent fragmentation characteristics. Suitable for both point and area targets.",
      shelfLife: "15 years",
    },
    {
      caliber: "120mm",
      model: "Heavy HE",
      specs: {
        weight: "13kg",
        length: "640mm",
        range: "7200m",
        explosiveContent: "2.5kg",
        effectiveRadius: "70m",
      },
      description: "Heavy mortar round for maximum effect. Features multi-option fuze and enhanced fragmentation pattern.",
      shelfLife: "15 years",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Mortar Bombs</h1>
        
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
                      <TableHead>Caliber</TableHead>
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

export default MortarBombs;