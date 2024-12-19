import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LoginDialog from "./auth/LoginDialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const isAdmin = localStorage.getItem("isAdmin");

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Defence Products", path: "/defence-products" },
    { title: "Sports Ammunition", path: "/sports-ammunition" },
    { title: "Technologies", path: "/technologies" },
    { title: "Work With Us", path: "/work-with-us" },
    { title: "Schedule a Call", path: "/schedule" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-secondary py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/7cd4246f-abf2-4cf2-b8e7-7aeceaa5e617.png" 
              alt="Torus Defence & Strategies" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white hover:text-primary transition-colors"
              >
                {item.title}
              </Link>
            ))}
            {isAdmin ? (
              <Link
                to="/admin/dashboard"
                className="text-white hover:text-primary transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="text-white hover:text-primary transition-colors"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-secondary">
            <div className="flex flex-col space-y-4 py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-white hover:text-primary transition-colors px-4"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              {isAdmin ? (
                <Link
                  to="/admin/dashboard"
                  className="text-white hover:text-primary transition-colors px-4"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsLoginOpen(true);
                  }}
                  className="text-white hover:text-primary transition-colors px-4 text-left"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <LoginDialog isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </nav>
  );
};

export default Navbar;