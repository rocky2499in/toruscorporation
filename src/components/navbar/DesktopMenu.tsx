import { Link } from "react-router-dom";
import { LogIn, LayoutDashboard } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { menuItems } from "./menuConfig";

interface DesktopMenuProps {
  isAdmin: boolean | null;
  onLoginClick: () => void;
}

const DesktopMenu = ({ isAdmin, onLoginClick }: DesktopMenuProps) => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <Accordion type="single" collapsible className="flex items-center space-x-6">
        {menuItems.map((item) => (
          <div key={item.path}>
            {item.submenu ? (
              <AccordionItem value={item.title} className="border-none">
                <AccordionTrigger className="text-white hover:text-primary py-2 hover:no-underline">
                  <div className="flex items-center gap-2">
                    <item.icon size={18} />
                    <span>{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="absolute mt-2 bg-secondary/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10 p-4">
                  <div className="space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="text-white/80 hover:text-primary transition-colors flex items-center gap-2 py-2"
                      >
                        {subItem.icon && <subItem.icon size={16} />}
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <Link
                to={item.path}
                className="text-white hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">
                  <item.icon size={18} />
                </span>
                <span>{item.title}</span>
              </Link>
            )}
          </div>
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
      </Accordion>
    </div>
  );
};

export default DesktopMenu;