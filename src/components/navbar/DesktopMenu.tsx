import { Link } from "react-router-dom";
import { LogIn, LayoutDashboard } from "lucide-react";
import NavbarMenuItem from "./NavbarMenuItem";
import { menuItems } from "./menuConfig";

interface DesktopMenuProps {
  isAdmin: boolean | null;
  onLoginClick: () => void;
}

const DesktopMenu = ({ isAdmin, onLoginClick }: DesktopMenuProps) => {
  return (
    <div className="hidden md:flex space-x-6 items-center">
      {menuItems.map((item) => (
        <NavbarMenuItem
          key={item.path}
          title={item.title}
          path={item.path}
          icon={item.icon}
        />
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
          onClick={onLoginClick}
          className="text-white hover:text-primary transition-colors flex items-center gap-2 group"
        >
          <span className="group-hover:scale-110 transition-transform duration-200">
            <LogIn size={18} />
          </span>
          <span>Login</span>
        </button>
      )}
    </div>
  );
};

export default DesktopMenu;