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
    <div className="md:hidden mt-4 bg-secondary/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10 p-4">
      <div className="flex flex-col space-y-4">
        {menuItems.map((item) => (
          <div key={item.path} className="space-y-2">
            {item.submenu ? (
              <>
                <div className="text-white flex items-center gap-2">
                  <item.icon size={18} />
                  <span>{item.title}</span>
                </div>
                <div className="pl-6 space-y-2">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.title}
                      to={subItem.path}
                      className="text-white/80 hover:text-primary transition-colors flex items-center gap-2"
                      onClick={onItemClick}
                    >
                      {subItem.icon && <subItem.icon size={16} />}
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <NavbarMenuItem
                title={item.title}
                path={item.path}
                icon={item.icon}
                onClick={onItemClick}
              />
            )}
          </div>
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