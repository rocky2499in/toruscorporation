import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Torus Defence & Strategies. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <Link to="/privacy-policy" className="text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/Torus.AAA/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/torus.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;