import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/ca6f0747-c712-4d67-b64f-5460e4f48a21.png" 
        alt="Torus Defence & Strategies" 
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default NavbarLogo;