import { Link } from "react-router-dom";
import { LogIn, LayoutDashboard } from "lucide-react";
import NavbarMenuItem from "./NavbarMenuItem";
import { menuItems } from "./menuConfig";

interface MobileMenuProps {
  isOpen: boolean;
  isAdmin: boolean | null;
  onLoginClick: () => void;
  onItemClick: () => void;
}

const MobileMenu = ({ isOpen, isAdmin, onLoginClick, onItemClick }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden mt-4 bg-secondary/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10">
      <div className="flex flex-col space-y-2 py-4">
        {menuItems.map((item) => (
          <NavbarMenuItem
            key={item.path}
            title={item.title}
            path={item.path}
            icon={item.icon}
            onClick={onItemClick}
          />
        ))}
        {isAdmin ? (
          <Link
            to="/admin/dashboard"
            className="text-white hover:text-primary hover:bg-white/5 transition-colors px-4 py-2 flex items-center gap-3"
            onClick={onItemClick}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
        ) : (
          <button
            onClick={() => {
              onItemClick();
              onLoginClick();
            }}
            className="text-white hover:text-primary hover:bg-white/5 transition-colors px-4 py-2 flex items-center gap-3 w-full text-left"
          >
            <LogIn size={18} />
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;