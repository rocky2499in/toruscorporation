import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { BaseProduct } from "@/types/products";

export const ProductCard = ({ product }: { product: BaseProduct }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">{product.product}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <AspectRatio ratio={4/3} className="bg-muted overflow-hidden rounded-lg">
            <img
              src={product.image || "https://images.unsplash.com/photo-1485833077593-4278bba3f11f"}
              alt={product.product}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <div className="space-y-2">
            {product.type && <p><span className="font-medium">Type:</span> {product.type}</p>}
            {product.caliber && <p><span className="font-medium">Caliber:</span> {product.caliber}</p>}
            <p><span className="font-medium">Description:</span> {product.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};