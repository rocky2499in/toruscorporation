import { Link } from "react-router-dom";
import { LogIn, LayoutDashboard } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
      <Accordion type="single" collapsible className="space-y-2">
        {menuItems.map((item) => (
          <div key={item.path}>
            {item.submenu ? (
              <AccordionItem value={item.title} className="border-none">
                <AccordionTrigger className="text-white hover:text-primary py-2 hover:no-underline text-sm uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <span>{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-6 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="text-white/80 hover:text-primary transition-colors flex items-center gap-2 py-2 text-sm"
                        onClick={onItemClick}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <Link
                to={item.path}
                className="text-white hover:text-primary transition-colors flex items-center gap-2 py-2 text-sm uppercase tracking-wider"
                onClick={onItemClick}
              >
                <span>{item.title}</span>
              </Link>
            )}
          </div>
        ))}
        {isAdmin ? (
          <Link
            to="/admin/dashboard"
            className="text-white hover:text-primary hover:bg-white/5 transition-colors px-4 py-2 flex items-center gap-3 text-sm uppercase tracking-wider"
            onClick={onItemClick}
          >
            <LayoutDashboard size={16} />
            Dashboard
          </Link>
        ) : (
          <button
            onClick={() => {
              onItemClick();
              onLoginClick();
            }}
            className="text-white hover:text-primary hover:bg-white/5 transition-colors px-4 py-2 flex items-center gap-3 w-full text-left text-sm uppercase tracking-wider"
          >
            <LogIn size={16} />
            Login
          </button>
        )}
      </Accordion>
    </div>
  );
};

export default MobileMenu;