import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Factory, Flask, Atom, Rocket, Beaker } from "lucide-react";

const Technologies = () => {
  const technologies = [
    {
      title: "TNT Manufacturing",
      description: "Continuous innovation in TNT production with state-of-the-art facilities",
      icon: Factory,
      path: "/technologies/tnt",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    },
    {
      title: "Nitrocellulose & Nitroglycerine",
      description: "Advanced facilities for high-quality nitrocellulose and nitroglycerine production",
      icon: Flask,
      path: "/technologies/nitrocellulose",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
    },
    {
      title: "Specialized Explosive Products",
      description: "Cutting-edge manufacturing of specialized explosive materials",
      icon: Atom,
      path: "/technologies/specialized",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    },
    {
      title: "RDX Manufacturing",
      description: "Advanced capabilities in RDX production and compound formulation",
      icon: Beaker,
      path: "/technologies/rdx",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    },
    {
      title: "Propellant Portfolio",
      description: "Comprehensive range of single, double, and triple base propellants",
      icon: Rocket,
      path: "/technologies/propellants",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Technologies</h1>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600">
            Explore our cutting-edge explosive technologies and production facilities.
            Our commitment to innovation drives the development of advanced explosive
            products while maintaining the highest safety and quality standards.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <Link key={tech.title} to={tech.path}>
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 relative">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <tech.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{tech.title}</CardTitle>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;