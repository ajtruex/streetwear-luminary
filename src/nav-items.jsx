import { HomeIcon, ShirtIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import ReleaseDetails from "./pages/ReleaseDetails.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Release Details",
    to: "/release/:id",
    icon: <ShirtIcon className="h-4 w-4" />,
    page: <ReleaseDetails />,
  },
];
