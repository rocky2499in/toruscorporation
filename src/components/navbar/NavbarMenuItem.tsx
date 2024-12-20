import { Link } from "react-router-dom";
import { LucideIcon, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SubMenuItem {
  title: string;
  path: string;
  icon?: LucideIcon;
}

interface NavbarMenuItemProps {
  title: string;
  path: string;
  icon: LucideIcon;
  submenu?: SubMenuItem[];
  onClick?: () => void;
}

const NavbarMenuItem = ({ title, path, icon: Icon, submenu, onClick }: NavbarMenuItemProps) => {
  if (submenu) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button 
            className="text-white hover:text-primary transition-colors flex items-center gap-2 group"
            aria-expanded="false"
          >
            <span className="group-hover:scale-110 transition-transform duration-200">
              <Icon size={18} />
            </span>
            <span>{title}</span>
            <ChevronDown 
              size={16} 
              className="ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" 
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          sideOffset={8}
          className="w-[200px] bg-white/95 backdrop-blur-sm"
        >
          {submenu.map((item) => (
            <DropdownMenuItem key={item.title} asChild>
              <Link
                to={item.path}
                className="flex items-center gap-2 w-full px-2 py-2 hover:bg-accent"
                onClick={onClick}
              >
                {item.icon && <item.icon size={16} />}
                {item.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

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