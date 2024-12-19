import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/8239c17b-df42-4340-a4d6-f4302fb7c132.png" 
        alt="Torus Defence & Strategies" 
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default NavbarLogo;