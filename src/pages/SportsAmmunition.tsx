import { ProductCard } from "@/components/ProductCard";

const SportsAmmunition = () => {
  const products = [
    {
      product: "Competition Ammunition",
      type: "Match Grade",
      description: "High-precision ammunition for competitive shooting sports",
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      product: "Training Ammunition",
      type: "Practice",
      description: "Reliable ammunition for training and practice sessions",
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      product: "Hunting Ammunition",
      type: "Sporting",
      description: "Specialized ammunition for hunting and outdoor sports",
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Sports Ammunition</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          Discover our range of high-quality sports ammunition, designed for competitive shooting,
          training, and hunting applications. Each product is manufactured to meet the highest
          standards of precision and reliability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.product} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsAmmunition;