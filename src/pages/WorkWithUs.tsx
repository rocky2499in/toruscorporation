import { Building2, Users, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WorkWithUs = () => {
  const sections = [
    {
      title: "Partnership Opportunities",
      description: "Collaborate with us as manufacturers, distributors, or government entities",
      icon: <Building2 className="w-8 h-8 mb-4 text-primary" />,
      content: "We welcome partnerships with manufacturers, distributors, and government organizations looking to expand their capabilities in defense technology. Our collaborative approach ensures mutual growth and innovation in the defense sector."
    },
    {
      title: "Careers",
      description: "Join our team of experts and innovators",
      icon: <Users className="w-8 h-8 mb-4 text-primary" />,
      content: "Explore exciting career opportunities and internship programs at our organization. We're always looking for talented individuals who are passionate about defense technology and innovation."
    },
    {
      title: "Procurement Assistance",
      description: "Streamlined procurement services for clients",
      icon: <DollarSign className="w-8 h-8 mb-4 text-primary" />,
      content: "We provide comprehensive procurement assistance to both government and private sector clients, ensuring efficient and compliant acquisition processes for defense products and technologies."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Work With Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center">
                {section.icon}
              </div>
              <CardTitle className="text-xl text-center">{section.title}</CardTitle>
              <CardDescription className="text-center">
                {section.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                {section.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkWithUs;