import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Component, Package, Cog } from "lucide-react";

const Components = () => {
  const components = [
    {
      title: "Mechanical Components",
      description: "High-precision mechanical components for various applications",
      icon: Cog,
    },
    {
      title: "Electronic Components",
      description: "Advanced electronic components and systems",
      icon: Component,
    },
    {
      title: "Packaging Solutions",
      description: "Specialized packaging for safe transport and storage",
      icon: Package,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Components</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          Explore our range of high-quality components designed for various applications
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component) => (
            <Card key={component.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <component.icon className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">{component.title}</CardTitle>
                </div>
                <CardDescription>{component.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Components;