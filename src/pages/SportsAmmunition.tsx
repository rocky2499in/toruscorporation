import { SpecificationCard } from "@/components/SpecificationCard";

const SportsAmmunition = () => {
  const products = [
    {
      model: ".40 S&W 200 gr. Subsonic FSJ",
      type: "Competition Grade",
      caliber: ".40 S&W",
      description: "Introducing the .40 S&W 200 gr. Subsonic FSJ, a soft and reliable ammunition in the global market. With its high projectile mass, this bullet offers a gentle recoil while delivering a major power factor of 170 on 5-inch barrel pistols. The innovative synthetic jacket prevents harsh metal-on-metal contact, minimizing copper and lead fouling.",
      specs: {
        weight: "200 grain",
        powerFactor: "IPSC major power factor (170)",
        jacketType: "Full synthetic jacket",
        packageSize: "50pcs / pkg",
        design: "Breakthrough roundhead design"
      },
      shelfLife: "10+ years under proper storage conditions",
      image: "/lovable-uploads/4825ed20-3bf3-4bb8-9cd8-082d9101526f.png"
    },
    {
      model: "9mm Luger 135 gr. Subsonic FSJ",
      type: "Competition/Training",
      caliber: "9mm Luger",
      description: "A breakthrough in ammunition design, ideal for shooters looking to enhance their tactical game. Formulated by champion IPSC athletes, offering unprecedented accuracy while ensuring barrel longevity.",
      specs: {
        weight: "135 grain",
        powerFactor: "IPSC minor power factor (125)",
        jacketType: "Full synthetic jacket",
        design: "Breakthrough roundhead design",
        standard: "NATO standard"
      },
      shelfLife: "10+ years under proper storage conditions",
      image: "/lovable-uploads/7b986667-e02d-47a4-9b9f-ec35959b335c.png"
    },
    {
      model: "9mm Luger 150 gr. Subsonic FSJ",
      type: "Competition/Training",
      caliber: "9mm Luger",
      description: "Experience unparalleled precision and power with this round featuring a full synthetic jacket and a lead bullet encased in a high-performance polymer. Designed by champion IPSC athletes for dynamic shooting.",
      specs: {
        weight: "150 grain",
        powerFactor: "IPSC minor power factor (125)",
        jacketType: "Full synthetic jacket",
        design: "Breakthrough roundhead design",
        standard: "NATO standard"
      },
      shelfLife: "10+ years under proper storage conditions",
      image: "/lovable-uploads/1b5c4653-5ec9-4e7b-8fc6-46a9333e0e09.png"
    },
    {
      model: "9mm Luger 153 gr. FlatPoint Subsonic",
      type: "Competition/Training",
      caliber: "9mm Luger",
      description: "Revolutionary 'Ocean Blue' ammunition featuring a flat nose design for maximum terminal performance. The full synthetic jacket provides optimal gas pressure tightness and faster reloads.",
      specs: {
        weight: "153 grain",
        powerFactor: "IPSC minor power factor (125)",
        jacketType: "Full synthetic jacket",
        design: "Flat Nose design",
        standard: "NATO standard"
      },
      shelfLife: "10+ years under proper storage conditions",
      image: "/lovable-uploads/17ff3dc9-4228-4381-baeb-0accc2a57a3b.png"
    },
    {
      model: "9mm Luger 124 gr. FMJ",
      type: "Training",
      caliber: "9mm Luger",
      description: "High-quality FMJ ammunition drawn from solid material for reduced barrel wear. Features excellent lead encapsulation and bullet stability through its thick full metal jacket.",
      specs: {
        weight: "124 grain",
        jacketType: "Full Metal Jacket",
        packageSize: "100pcs/box",
        standard: "NATO standard",
        recoil: "Soft and flat"
      },
      shelfLife: "10+ years under proper storage conditions",
      image: "/lovable-uploads/d392e7cf-bd63-4e75-ac87-617cc79c6189.png"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Sports Ammunition</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          Discover our premium range of sports ammunition, engineered for competitive shooting,
          training, and professional applications. Each product is manufactured to meet the highest
          standards of precision and reliability, designed by champion IPSC athletes.
        </p>
        <div className="grid gap-8">
          {products.map((spec) => (
            <SpecificationCard key={spec.model} spec={spec} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsAmmunition;