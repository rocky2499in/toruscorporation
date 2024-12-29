import { useState } from "react";
import { Menu, X } from "lucide-react";
import LoginDialog from "./auth/LoginDialog";
import NavbarLogo from "./navbar/NavbarLogo";
import DesktopMenu from "./navbar/DesktopMenu";
import MobileMenu from "./navbar/MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
    <nav className="bg-secondary py-6 fixed w-full top-0 z-50 shadow-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavbarLogo />

          <DesktopMenu 
            isAdmin={isAdmin} 
            onLoginClick={() => setIsLoginOpen(true)} 
          />

          <button
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <MobileMenu 
          isOpen={isOpen}
          isAdmin={isAdmin}
          onLoginClick={() => setIsLoginOpen(true)}
          onItemClick={() => setIsOpen(false)}
        />
      </div>
      <LoginDialog isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </nav>
  );
};

export default Navbar;