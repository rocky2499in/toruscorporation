import { 
  Home,
  Info,
  Package,
  Rocket,
  Component,
  Phone,
  Calendar,
  Briefcase,
  ShoppingCart
} from "lucide-react";

export const menuItems = [
  { title: "Home", path: "/", icon: Home },
  { title: "About Us", path: "/about", icon: Info },
  { title: "Products", path: "/products", icon: Package },
  { title: "Components", path: "/components", icon: Component },
  { 
    title: "Technology Transfer", 
    path: "/technology-transfer",
    icon: Rocket,
    submenu: [
      { title: "TNT", path: "/technology-transfer/tnt" },
      { title: "RDX", path: "/technology-transfer/rdx" },
      { title: "Ammonium Perchlorate", path: "/technology-transfer/ammonium-perchlorate" },
      { title: "Nitrocellulose", path: "/technology-transfer/nitrocellulose" },
      { title: "Propellants", path: "/technology-transfer/propellants" }
    ]
  },
  { 
    title: "Contact", 
    path: "/contact",
    icon: Phone,
    submenu: [
      { title: "Procurement Assistance", path: "/contact/procurement" },
      { title: "Work With Us", path: "/contact/work-with-us" },
      { title: "Schedule a Call", path: "/contact/schedule" }
    ]
  }
];