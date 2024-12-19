import { Shield, Flag, Cpu, Target } from "lucide-react";

const commitments = [
  {
    icon: Shield,
    title: "NATO Standard & German CIP Compliant",
    description: "Ensuring safety, reliability, and performance."
  },
  {
    icon: Flag,
    title: "Made in Germany",
    description: "Leveraging German engineering excellence."
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    description: "Continuously advancing our ammunition with the latest technology."
  },
  {
    icon: Target,
    title: "Softest Ammunition",
    description: "Designed for smooth performance and maximum control."
  }
];

const CommitmentSection = () => {
  return (
    <div className="py-16 relative">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/9546de80-6067-4f12-bd9c-2683312f8d98.png"
          alt="Commitment to Excellence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold text-white mb-4">
              OUR COMMITMENT TO EXCELLENCE
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 group animate-fade-up hover:-translate-y-1 transition-transform duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm shadow-md group-hover:bg-primary transition-all duration-300">
                  <commitment.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {commitment.title}
                  </h3>
                  <p className="text-gray-200">
                    {commitment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;