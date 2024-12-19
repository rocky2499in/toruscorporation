import { InlineWidget } from "react-calendly";
import { Building2, Users, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
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
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      
      {/* Work With Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

      {/* Schedule a Call Section */}
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
              url="https://calendly.com/kinematic-digital/technology-consulting-introduction"
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

export default Contact;