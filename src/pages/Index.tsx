import HeroSection from "@/components/home/HeroSection";
import ProductOverview from "@/components/home/ProductOverview";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ServicesSection from "@/components/home/ServicesSection";
import DefenceRangeSection from "@/components/home/DefenceRangeSection";
import CommitmentSection from "@/components/home/CommitmentSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProductOverview />
      <DefenceRangeSection />
      <CommitmentSection />
      <WhyChooseSection />
      <ServicesSection />
      
      {/* CTA Section */}
      <div className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our explosive technology solutions can meet
            your specific requirements.
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;