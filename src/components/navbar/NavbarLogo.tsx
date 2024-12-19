import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/d369cc67-c6ea-49e9-98d0-4b818c220bb9.png" 
        alt="Torus Defence & Strategies" 
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default NavbarLogo;