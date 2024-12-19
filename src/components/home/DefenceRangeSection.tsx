import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const defenceProducts = [
  {
    id: "01",
    title: "Small Arms",
    image: "/lovable-uploads/cf29c540-fce4-4192-82ca-d7dfbdc58d69.png",
    description: "Experience precision and reliability with Torus ammunition, engineered in Germany to deliver unmatched performance for all your shooting needs.",
    link: "/defence-products/small-caliber"
  },
  {
    id: "02",
    title: "Medium Caliber",
    image: "/lovable-uploads/cf29c540-fce4-4192-82ca-d7dfbdc58d69.png",
    description: "Experience precision and reliability with Torus ammunition, engineered in Germany to deliver unmatched performance for all your shooting needs.",
    link: "/defence-products/medium-caliber"
  },
  {
    id: "03",
    title: "Large Caliber",
    image: "/lovable-uploads/cf29c540-fce4-4192-82ca-d7dfbdc58d69.png",
    description: "Experience precision and reliability with Torus ammunition, engineered in Germany to deliver unmatched performance for all your shooting needs.",
    link: "/defence-products/large-caliber"
  },
  {
    id: "04",
    title: "Tank Ammo",
    image: "/lovable-uploads/cf29c540-fce4-4192-82ca-d7dfbdc58d69.png",
    description: "Experience precision and reliability with Torus ammunition, engineered in Germany to deliver unmatched performance for all your shooting needs.",
    link: "/defence-products/large-caliber"
  },
  {
    id: "05",
    title: "Mortar Bomb",
    image: "/lovable-uploads/cf29c540-fce4-4192-82ca-d7dfbdc58d69.png",
    description: "Experience precision and reliability with Torus ammunition, engineered in Germany to deliver unmatched performance for all your shooting needs.",
    link: "/defence-products/mortar-bombs"
  }
];

const DefenceRangeSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#8B4513] mb-4">DEFENCE RANGE</h2>
          <p className="text-xl text-gray-700">
            Unleash your full potential with superior ammunition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {defenceProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="flex flex-col hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-4 group">
                <span className="absolute top-4 left-4 text-red-600 font-bold">
                  {product.id}
                </span>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{product.title}</h3>
              <p className="text-gray-600 text-sm flex-grow mb-4">
                {product.description}
              </p>
              <Link
                to={product.link}
                className="inline-flex items-center text-gray-800 hover:text-gray-600 transition-colors group"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DefenceRangeSection;