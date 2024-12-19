import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe2, Shield, Award, Scale } from "lucide-react";
import MapComponent from "@/components/MapComponent";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-secondary animate-fade-up">
        About Torus Corporation
      </h1>

      <div className="grid gap-8 md:grid-cols-2 animate-fade-up">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              At Torus Corporation, our mission is to revolutionize global defense trade through innovation, reliability, and unwavering commitment to excellence. We facilitate seamless international defense partnerships by:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
              <li>Streamlining complex trade processes</li>
              <li>Ensuring regulatory compliance across borders</li>
              <li>Fostering strategic international partnerships</li>
              <li>Delivering cutting-edge defense solutions</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Our Expertise
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              With decades of experience in the defense sector, we bring unparalleled expertise to every partnership:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
              <li>ISO 9001:2015 certified manufacturing facilities</li>
              <li>Strategic partnerships with global defense leaders</li>
              <li>Advanced R&D capabilities</li>
              <li>Comprehensive quality management systems</li>
              <li>Expert compliance and documentation teams</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 animate-fade-up">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe2 className="h-6 w-6 text-primary" />
              Global Presence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              With a robust presence in over 30 countries, Torus Corporation has established itself as a global leader in defense technology and trade:
            </p>
            <div className="h-[400px] rounded-lg overflow-hidden">
              <MapComponent />
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-gray-600">Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 animate-fade-up">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-primary" />
              Compliance & Standards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              We maintain the highest standards of compliance with international trade regulations and protocols:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
              <li>Strict adherence to ITAR and EAR regulations</li>
              <li>Compliance with UN Security Council resolutions</li>
              <li>Regular third-party compliance audits</li>
              <li>Comprehensive documentation and tracking systems</li>
              <li>Trained compliance officers in every region</li>
            </ul>
            <div className="mt-6 p-4 bg-secondary/5 rounded-lg">
              <p className="text-sm text-gray-600">
                "Our commitment to compliance goes beyond meeting requirements - it's about setting new standards in responsible defense trade."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;