import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/components/ProductCard";
import { SpecificationCard } from "@/components/SpecificationCard";
import { BaseProduct, Specification } from "@/types/products";

const SmallCaliberAmmunition = () => {
  const products: BaseProduct[] = [
    {
      category: "Small Calibre Ammunition",
      product: "Cartridge 0.22\" Ball",
      caliber: "0.22\"",
      description: "Standard small arms ammunition",
      image: "https://images.unsplash.com/photo-1584281722575-f5ab0e873054",
    },
    {
      category: "Small Calibre Ammunition",
      product: "SA 5.56X 45MM M-193",
      caliber: "5.56x45mm",
      description: "Military standard small arms round",
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f",
    },
    {
      category: "Small Calibre Ammunition",
      product: "SA 7.62 X 39MM",
      caliber: "7.62x39mm",
      description: "Assault rifle ammunition",
      image: "https://images.unsplash.com/photo-1595590424424-7ddce9e3def7",
    },
    {
      category: "Small Calibre Ammunition",
      product: "SA 7.62 X 51MM SS109/M855 Ball Tracer",
      caliber: "7.62x51mm",
      description: "NATO standard rifle ammunition",
      image: "https://images.unsplash.com/photo-1595590424264-3661b6c8719e",
    },
    {
      category: "Small Calibre Ammunition",
      product: "SA 9X19MM Ball",
      caliber: "9x19mm",
      description: "Pistol/submachine gun ammunition",
      image: "https://images.unsplash.com/photo-1584281722575-f5ab0e873054",
    },
    {
      category: "Small Calibre Ammunition",
      product: "SA 12 BORE 70MM Plastic Astram",
      caliber: "12 Bore",
      description: "Shotgun ammunition",
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f",
    },
    {
      category: "Small Calibre Ammunition",
      product: "SA 12.7MM API",
      caliber: "12.7mm",
      description: "Armor-piercing ammunition",
      image: "https://images.unsplash.com/photo-1595590424424-7ddce9e3def7",
    },
    {
      category: "Small Calibre Ammunition",
      product: "SA 14.5MM TAPD",
      caliber: "14.5mm",
      description: "Heavy machine gun round",
      image: "https://images.unsplash.com/photo-1595590424264-3661b6c8719e",
    },
  ];

  const specifications: Specification[] = [
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
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f",
    },
    {
      caliber: "5.56mm",
      model: "Alternate Model",
      specs: {
        length: "57.4 mm",
        mass: "12.5 gm",
        projectileWeight: "3.62 gm",
        muzzleVelocity: "964 m/s",
        consistency: "25mm at 100m",
      },
      description: "Precision rifle round with improved velocity characteristics. Guilding metal envelope with lead core, optimized for accuracy and performance.",
      shelfLife: "12 years",
      image: "https://images.unsplash.com/photo-1595590424424-7ddce9e3def7",
    },
    {
      caliber: "7.62mm",
      model: "Standard Ball",
      specs: {
        length: "56.00 mm",
        mass: "18.60 gm",
        projectileWeight: "7.95 gm",
        muzzleVelocity: "700 m/s",
        penetration: "300mm at 300m",
      },
      description: "Robust intermediate power rifle cartridge. Designed for versatile military applications with excellent penetration capabilities.",
      shelfLife: "15 years",
      image: "https://images.unsplash.com/photo-1584281722575-f5ab0e873054",
    },
    {
      caliber: "7.62mm",
      model: "Long Round",
      specs: {
        length: "71.10 mm",
        mass: "25.40 gm",
        projectileWeight: "9.65 gm",
        muzzleVelocity: "817 m/s",
        penetration: "190mm at 550m",
      },
      description: "Extended performance round with enhanced ballistic characteristics. Suitable for long-range engagements and precision shooting.",
      shelfLife: "18 years",
      image: "https://images.unsplash.com/photo-1595590424264-3661b6c8719e",
    },
    {
      caliber: "7.62mm",
      model: "Tracer Round",
      specs: {
        length: "71.10 mm",
        mass: "25.08 gm",
        projectileWeight: "9.0 gm",
        muzzleVelocity: "817 m/s",
        tracer: "Crimson red trace at 777.2m",
      },
      description: "Tactical tracer ammunition for targeting and battlefield communication. Provides visual tracking capabilities.",
      shelfLife: "10 years",
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f",
    },
    {
      caliber: "9mm",
      model: "Pistol Ammunition",
      specs: {
        length: "29.69 mm",
        mass: "11.94 gm",
        projectileWeight: "7.45 gm",
        muzzleVelocity: "397 m/s",
      },
      description: "Compact pistol cartridge with reliable performance. Designed for personal defense and standard sidearm applications.",
      shelfLife: "7 years",
      image: "https://images.unsplash.com/photo-1595590424424-7ddce9e3def7",
    },
    {
      caliber: "0.22\"",
      model: "Small Caliber",
      specs: {
        length: "25 mm",
        mass: "3.370 gm",
        projectileWeight: "2.6 gm",
        muzzleVelocity: "305 m/s",
      },
      description: "Lightweight rimfire ammunition. Ideal for training, small game hunting, and recreational shooting.",
      shelfLife: "10 years",
      image: "https://images.unsplash.com/photo-1584281722575-f5ab0e873054",
    },
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
      image: "https://images.unsplash.com/photo-1595590424264-3661b6c8719e",
    },
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.product} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="specifications">
            <div className="grid gap-6">
              {specifications.map((spec) => (
                <SpecificationCard key={`${spec.caliber}-${spec.model}`} spec={spec} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SmallCaliberAmmunition;