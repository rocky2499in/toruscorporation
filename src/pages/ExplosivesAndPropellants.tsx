import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/components/ProductCard";
import { SpecificationCard } from "@/components/SpecificationCard";
import { BaseProduct, Specification } from "@/types/products";

const ExplosivesAndPropellants = () => {
  const products: BaseProduct[] = [
    {
      product: "DNT",
      type: "Chemical explosive",
      description: "Dinitrotoluene explosive compound",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3"
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

  const specifications: Specification[] = [
    {
      type: "TNT",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.product} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="specifications">
            <div className="grid gap-6">
              {specifications.map((spec) => (
                <SpecificationCard key={spec.type} spec={spec} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ExplosivesAndPropellants;
