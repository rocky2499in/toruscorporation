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

const ExplosivesAndPropellants = () => {
  const products = [
    {
      product: "DNT",
      type: "Chemical explosive",
      description: "Dinitrotoluene explosive compound",
    },
    {
      product: "TNT",
      type: "Trinitrotoluene",
      description: "Standard military explosive",
    },
    {
      product: "HNS",
      type: "High-energy explosive",
      description: "Heat resistant explosive",
    },
    {
      product: "RDX-TNT",
      type: "Composite explosive",
      description: "High-performance military explosive",
    },
    {
      product: "RDX-WAX",
      type: "Specialized mixture",
      description: "Stabilized explosive compound",
    },
    {
      product: "TETRYL",
      type: "High explosive",
      description: "Detonator explosive",
    },
    {
      product: "PETN",
      type: "Plastic explosive",
      description: "High-power explosive",
    },
    {
      product: "PICRITE",
      type: "Explosive compound",
      description: "Specialized military explosive",
    },
  ];

  const specifications = [
    {
      type: "TNT",
      specs: {
        density: "1.654 g/cm³",
        detonationVelocity: "6900 m/s",
        meltingPoint: "80.35°C",
        explosiveYield: "4.184 MJ/kg",
        sensitivity: "Impact: 15 J",
      },
      description: "Standard military-grade explosive with excellent stability and handling characteristics. Widely used in military ordnance and demolition applications.",
      shelfLife: "20+ years",
    },
    {
      type: "RDX-TNT",
      specs: {
        density: "1.82 g/cm³",
        detonationVelocity: "8750 m/s",
        composition: "60/40 RDX/TNT",
        explosiveYield: "5.36 MJ/kg",
        sensitivity: "Impact: 7.5 J",
      },
      description: "High-performance composite explosive combining RDX power with TNT stability. Used in high-explosive anti-tank warheads and demolition charges.",
      shelfLife: "15 years",
    },
    {
      type: "PETN",
      specs: {
        density: "1.77 g/cm³",
        detonationVelocity: "8400 m/s",
        meltingPoint: "141.3°C",
        explosiveYield: "5.81 MJ/kg",
        sensitivity: "Impact: 3 J",
      },
      description: "Powerful high explosive used in detonators and specialized applications. Features high detonation velocity and excellent initiating properties.",
      shelfLife: "10 years",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Explosives and Propellants</h1>
        
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
                      <TableHead>Type</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.product}>
                        <TableCell className="font-medium">{product.product}</TableCell>
                        <TableCell>{product.type}</TableCell>
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
                <Card key={spec.type}>
                  <CardHeader>
                    <CardTitle>{spec.type}</CardTitle>
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

export default ExplosivesAndPropellants;