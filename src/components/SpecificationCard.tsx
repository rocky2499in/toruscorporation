import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Specification } from "@/types/products";

export const SpecificationCard = ({ spec }: { spec: Specification }) => {
  return (
    <Card key={spec.model || spec.type}>
      <CardHeader>
        <CardTitle>
          {spec.caliber ? `${spec.caliber} - ${spec.model}` : spec.type}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <AspectRatio ratio={4/3} className="bg-muted overflow-hidden rounded-lg">
              <img
                src={spec.image || "https://images.unsplash.com/photo-1438565434616-3ef039228b15"}
                alt={spec.model || spec.type || "Specification"}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <div className="md:col-span-2">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Specifications:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {Object.entries(spec.specs).map(([key, value]) => (
                    <li key={key}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}: {value}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Description:</h4>
                <p className="text-gray-600">{spec.description}</p>
                <p className="mt-4">
                  <span className="font-semibold">Shelf Life:</span> {spec.shelfLife}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};