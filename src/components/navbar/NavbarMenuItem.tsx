import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface NavbarMenuItemProps {
  title: string;
  path: string;
  icon: LucideIcon;
  onClick?: () => void;
}

const NavbarMenuItem = ({ title, path, icon: Icon, onClick }: NavbarMenuItemProps) => {
  return (
    <Link
      to={path}
      className="text-white hover:text-primary transition-colors flex items-center gap-2 group"
      onClick={onClick}
    >
      <span className="group-hover:scale-110 transition-transform duration-200">
        <Icon size={18} />
      </span>
      <span>{title}</span>
    </Link>
  );
};

export default NavbarMenuItem;