import { Shield, Lightbulb, CheckCircle2, Heart } from "lucide-react";

const whyChooseFeatures = [
  {
    icon: Shield,
    title: "RELIABILITY",
    description: "Trust our ammunition to perform flawlessly, shot after shot."
  },
  {
    icon: Lightbulb,
    title: "INNOVATION",
    description: "Our specialists are dedicated to developing cutting-edge ammunition technology."
  },
  {
    icon: CheckCircle2,
    title: "QUALITY CONTROL",
    description: "Rigorous testing and strict quality standards ensure every round meets our exacting specifications."
  },
  {
    icon: Heart,
    title: "CUSTOMER SATISFACTION",
    description: "We are committed to providing top-tier products and exceptional customer service."
  }
];

const WhyChooseSection = () => {
  return (
    <div className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">WHY CHOOSE</h2>
            <h3 className="text-2xl font-bold text-primary mb-8">TORUS GMBH</h3>
            
            <div className="grid gap-6">
              {whyChooseFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <feature.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/a957c5ad-050e-450c-9ce2-626142113265.png"
              alt="Torus Ammunition"
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;