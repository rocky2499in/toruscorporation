import { InlineWidget } from "react-calendly";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Schedule = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Schedule a Call</CardTitle>
          <CardDescription className="text-lg">
            Book a consultation with our team to discuss your requirements and explore how we can assist you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-[600px]">
            <InlineWidget
              url="https://calendly.com/d/demo"
              styles={{
                height: '100%',
                width: '100%',
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Schedule;