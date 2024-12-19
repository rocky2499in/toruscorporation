import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Menu, 
  X, 
  Home,
  Info,
  Shield,
  Target,
  Rocket,
  Briefcase,
  Calendar,
  Phone,
  LogIn,
  LayoutDashboard
} from "lucide-react";
import LoginDialog from "./auth/LoginDialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const isAdmin = localStorage.getItem("isAdmin");

  const menuItems = [
    { title: "Home", path: "/", icon: <Home size={18} /> },
    { title: "About Us", path: "/about", icon: <Info size={18} /> },
    { title: "Defence Products", path: "/defence-products", icon: <Shield size={18} /> },
    { title: "Sports Ammunition", path: "/sports-ammunition", icon: <Target size={18} /> },
    { title: "Technologies", path: "/technologies", icon: <Rocket size={18} /> },
    { title: "Work With Us", path: "/work-with-us", icon: <Briefcase size={18} /> },
    { title: "Schedule a Call", path: "/schedule", icon: <Calendar size={18} /> },
    { title: "Contact", path: "/contact", icon: <Phone size={18} /> },
  ];

  return (
    <nav className="bg-secondary py-4 fixed w-full top-0 z-50 shadow-lg">
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
                className="text-white hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </span>
                <span>{item.title}</span>
              </Link>
            ))}
            {isAdmin ? (
              <Link
                to="/admin/dashboard"
                className="text-white hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">
                  <LayoutDashboard size={18} />
                </span>
                <span>Dashboard</span>
              </Link>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="text-white hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">
                  <LogIn size={18} />
                </span>
                <span>Login</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-secondary/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10">
            <div className="flex flex-col space-y-2 py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-white hover:text-primary hover:bg-white/5 transition-colors px-4 py-2 flex items-center gap-3"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.title}
                </Link>
              ))}
              {isAdmin ? (
                <Link
                  to="/admin/dashboard"
                  className="text-white hover:text-primary hover:bg-white/5 transition-colors px-4 py-2 flex items-center gap-3"
                  onClick={() => setIsOpen(false)}
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>
              ) : (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsLoginOpen(true);
                  }}
                  className="text-white hover:text-primary hover:bg-white/5 transition-colors px-4 py-2 flex items-center gap-3 w-full text-left"
                >
                  <LogIn size={18} />
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