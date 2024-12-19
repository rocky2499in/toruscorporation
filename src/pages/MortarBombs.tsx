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
import { ProductCard } from "@/components/ProductCard";
import { SpecificationCard } from "@/components/SpecificationCard";
import { BaseProduct, Specification } from "@/types/products";

const MortarBombs = () => {
  const products: BaseProduct[] = [
    {
      product: "51mm HE (High Explosive)",
      caliber: "51mm",
      description: "Light mortar munition",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
    },
    {
      product: "51mm Smoke",
      caliber: "51mm",
      description: "Smoke-producing mortar round",
      image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15"
    },
    {
      product: "51mm Illuminating",
      caliber: "51mm",
      description: "Illumination round",
      image: "/placeholder.svg"
    },
    {
      product: "81mm HE",
      caliber: "81mm",
      description: "Standard mortar munition",
      image: "/placeholder.svg"
    },
    {
      product: "81mm Smoke",
      caliber: "81mm",
      description: "Smoke-producing round",
      image: "/placeholder.svg"
    },
    {
      product: "81mm Illuminating",
      caliber: "81mm",
      description: "Illumination round",
      image: "/placeholder.svg"
    },
    {
      product: "120mm HE",
      caliber: "120mm",
      description: "Heavy mortar round",
      image: "/placeholder.svg"
    },
    {
      product: "120mm Smoke",
      caliber: "120mm",
      description: "Smoke-producing heavy mortar round",
      image: "/placeholder.svg"
    },
    {
      product: "120mm Illuminating",
      caliber: "120mm",
      description: "Illumination round",
      image: "/placeholder.svg"
    },
  ];

  const specifications: Specification[] = [
    {
      caliber: "51mm",
      model: "High Explosive",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
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
      image: "/placeholder.svg",
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
      image: "/placeholder.svg",
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.product} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="specifications">
            <div className="grid gap-6">
              {specifications.map((spec) => (
                <SpecificationCard key={spec.model} spec={spec} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MortarBombs;
