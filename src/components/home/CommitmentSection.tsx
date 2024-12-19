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
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg" />
            <img
              src="/lovable-uploads/9546de80-6067-4f12-bd9c-2683312f8d98.png"
              alt="Commitment to Excellence"
              className="w-full h-[600px] object-cover rounded-lg shadow-xl"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-4">
                OUR COMMITMENT TO EXCELLENCE
              </h2>
              <div className="w-20 h-1 bg-primary mb-8" />
            </div>

            <div className="grid gap-8">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-white shadow-md group-hover:bg-primary transition-colors">
                    <commitment.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-secondary">
                      {commitment.title}
                    </h3>
                    <p className="text-gray-600">
                      {commitment.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;