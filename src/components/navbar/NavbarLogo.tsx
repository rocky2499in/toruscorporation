import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/7cd4246f-abf2-4cf2-b8e7-7aeceaa5e617.png" 
        alt="Torus Defence & Strategies" 
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default NavbarLogo;