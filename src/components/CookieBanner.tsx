import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    toast({
      title: "Preferences saved",
      description: "Your cookie preferences have been saved.",
    });
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
    toast({
      title: "Preferences saved",
      description: "You have opted out of cookies.",
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondary/95 backdrop-blur-sm text-white p-4 shadow-lg z-50">
      <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <p>
            We use cookies to enhance your browsing experience, serve personalized
            content, and analyze our traffic. By clicking "Accept", you consent to
            our use of cookies.{" "}
            <a href="/privacy-policy" className="underline hover:text-primary">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="bg-transparent text-white hover:bg-white/10"
            onClick={declineCookies}
          >
            Decline
          </Button>
          <Button
            className="bg-primary hover:bg-primary/90"
            onClick={acceptCookies}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;