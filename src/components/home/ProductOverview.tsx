import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProductCard } from "@/components/ProductCard";

const featuredProducts = [
  {
    product: ".40 S&W 200 gr. Subsonic FSJ",
    type: "Competition Grade",
    description: "High-performance competition ammunition with gentle recoil",
    image: "/lovable-uploads/4825ed20-3bf3-4bb8-9cd8-082d9101526f.png"
  },
  {
    product: "9mm Luger 135 gr. Subsonic FSJ",
    type: "Competition/Training",
    description: "Breakthrough in ammunition design for tactical shooting",
    image: "/lovable-uploads/7b986667-e02d-47a4-9b9f-ec35959b335c.png"
  },
  {
    product: "9mm Luger 150 gr. Subsonic FSJ",
    type: "Competition/Training",
    description: "Unparalleled precision with synthetic jacket technology",
    image: "/lovable-uploads/1b5c4653-5ec9-4e7b-8fc6-46a9333e0e09.png"
  }
];

const ProductOverview = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-secondary">Product Overview</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          Discover our premium range of sports ammunition, engineered for competitive shooting and professional applications.
        </p>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {featuredProducts.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductOverview;