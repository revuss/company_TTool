import * as Icons from "lucide-react";
import { useNavContext } from "../context/NavContext";
import navData from "../data/navItems.json";
import { LucideProps } from "lucide-react";
import { NavLink } from "react-router-dom";

interface NavItem {
  name: string;
  icon: keyof typeof Icons;
  route: string;
}

interface RoleNavData {
  role: string;
  items: NavItem[];
}

interface NavData {
  navItems: RoleNavData[];
}

function SideBar() {
  const { navOpen } = useNavContext();
  const role = "EMPLOYEE";
  const currentRoleNavItems =
    (navData as NavData).navItems.find((item) => item.role === role)?.items ||
    [];

  return (
    <aside
      className={`fixed top-[10vh] left-0 bg-gray-800 h-[90vh] z-10 flex flex-col p-4 shadow-lg
      duration-1000 ease-in-out
      ${
        !navOpen
          ? "md:w-[16vw] 2xl:w-[14vw] w-[200px] opacity-100 scale-100 duration-1000"
          : "w-1 opacity-0 scale-95 pointer-events-none -translate-x-[700px]"
      }`}
    >
      <span className="border border-gray-400 border-opacity-25 mb-2"></span>

      <div className={`flex flex-col gap-y-2`}>
        {currentRoleNavItems.map((item, index) => {
          const IconComponent = Icons[
            item.icon
          ] as React.ComponentType<LucideProps>;

          return (
            <NavLink
              to={item.route}
              key={index}
              className={({ isActive }) =>
                `flex text-xs xl:text-md whitespace-nowrap items-center justify-start gap-x-5 text-white cursor-pointer p-2 rounded-md transition-colors duration-300 ease-in-out ${
                  isActive ? "bg-green-600" : "hover:bg-green-700"
                }`
              }
            >
              {IconComponent && (
                <IconComponent size={20} className="text-green-400" />
              )}
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </div>
      <div className="flex-grow" />
      <span className="mb-2  border-t-2 border-gray-500 border-opacity-25"></span>
      <div className="flex items-center gap-3 text-white cursor-pointer p-2 rounded-md bg-green-900 hover:bg-green-600 transition-colors duration-300 ease-in-out">
        <Icons.LogOut size={20} />
        <span>Log Out</span>
      </div>
    </aside>
  );
}

export default SideBar;
