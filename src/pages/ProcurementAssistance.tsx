import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Truck, FileCheck } from "lucide-react";

const ProcurementAssistance = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Procurement Assistance</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          We provide comprehensive procurement assistance to help streamline your purchasing process
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Sourcing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Expert assistance in identifying and selecting the right products and suppliers
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="w-5 h-5" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Complete support with procurement documentation and compliance requirements
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Logistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                End-to-end logistics support for smooth delivery and handling
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProcurementAssistance;