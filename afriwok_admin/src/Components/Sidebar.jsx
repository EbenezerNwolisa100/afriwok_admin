// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Logo from "../assets/Images/Logo.svg";
// import {
//   LayoutDashboard,
//   FileText,
//   FileEdit,
//   FileCodeIcon,
//   Receipt,
//   Ticket,
//   Users,
//   Bell,
//   HelpCircle,
//   Settings,
//   Menu,
//   X,
//   PersonStanding,
// } from "lucide-react";

// const mainNavItems = [
//   {
//     title: "Dashboard",
//     to: "/",
//     icon: <LayoutDashboard className="h-5 w-5" />,
//   },
//   {
//     title: "Reports",
//     to: "/reports",
//     icon: <FileText className="h-5 w-5" />,
//   },
//   {
//     title: "Customers",
//     to: "/customers",
//     icon: <PersonStanding className="h-5 w-5" />,
//   },
//   {
//     title: "Templates",
//     to: "/templates",
//     icon: <FileEdit className="h-5 w-5" />,
//   },
//   {
//     title: "Contracts",
//     to: "/contracts",
//     icon: <FileCodeIcon className="h-5 w-5" />,
//   },
//   {
//     title: "Transactions",
//     to: "/transactions",
//     icon: <Receipt className="h-5 w-5" />,
//   },
//   {
//     title: "Tickets",
//     to: "/tickets",
//     icon: <Ticket className="h-5 w-5" />,
//   },
//   {
//     title: "Manage Users",
//     to: "/manage_users",
//     icon: <Users className="h-5 w-5" />,
//   },
//   {
//     title: "Notification",
//     to: "/notifications",
//     icon: <Bell className="h-5 w-5" />,
//   },
// ];

// const bottomNavItems = [
//   {
//     title: "Support",
//     to: "/support",
//     icon: <HelpCircle className="h-5 w-5" />,
//   },
//   {
//     title: "Settings",
//     to: "/settings",
//     icon: <Settings className="h-5 w-5" />,
//   },
// ];

// export default function Sidebar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <>
//       {/* Mobile menu button */}
//       <button
//         type="button"
//         className={`
//     lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none
//   `}
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//       >
//         {isMobileMenuOpen ? (
//           <X className="h-6 w-6" />
//         ) : (
//           <Menu className="h-6 w-6" />
//         )}
//       </button>

//       {/* Overlay */}
//       {isMobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={closeMobileMenu}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed top-0 left-0 z-40 h-full w-60 bg-[#F9F9F9] font-sans
//           transform transition-transform duration-200 ease-in-out
//           ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
//           lg:translate-x-0 lg:static lg:h-screen
//         `}
//       >
//         <div className="flex flex-col h-full">
//           {/* Logo section */}
//           <div className="p-4 border-b flex items-center m-4  bg-white justify-center rounded">
//             <div className="flex items-center justify-center">
//               <img
//                 src={Logo}
//                 alt="Afriwok Logo"
//                 className="h-10 w-auto bg-white"
//               />
//             </div>
//             <p className="text-sm text-gray-500 font-sans bg-[#F9F9F9] rounded ml-2 p-1">
//               Super Admin
//             </p>
//           </div>

//           <nav className="flex-1 overflow-y-auto py-2 px-4">
//             <ul className="space-y-1">
//               {mainNavItems.map((item) => (
//                 <li key={item.title}>
//                   <Link
//                     to={item.to}
//                     onClick={closeMobileMenu}
//                     className={`flex items-center font-sans gap-2 px-3 py-2 rounded-lg transition-colors duration-150 group ${
//                       location.pathname === item.to
//                         ? "bg-gray-200 text-gray-900"
//                         : "text-gray-500 hover:bg-gray-100"
//                     }`}
//                   >
//                     <span
//                       className={`text-gray-400 group-hover:text-gray-600 ${
//                         location.pathname === item.to ? "text-gray-900" : ""
//                       }`}
//                     >
//                       {item.icon}
//                     </span>
//                     <span className="font-sans font-medium">{item.title}</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Bottom Navigation */}
//           <div className="p-3 border-t border-gray-200">
//             <ul className="space-y-1">
//               {bottomNavItems.map((item) => (
//                 <li key={item.title}>
//                   <Link
//                     to={item.to}
//                     onClick={closeMobileMenu}
//                     className={`flex font-sans items-center gap-3 px-3 py-1 rounded-lg transition-colors duration-150 group ${
//                       location.pathname === item.to
//                         ? "bg-gray-200 text-gray-900"
//                         : "text-gray-500 hover:bg-gray-100"
//                     }`}
//                   >
//                     <span
//                       className={`text-gray-400 group-hover:text-gray-600 ${
//                         location.pathname === item.to ? "text-gray-900" : ""
//                       }`}
//                     >
//                       {item.icon}
//                     </span>
//                     <span className="font-sans font-semibold">
//                       {item.title}
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }





import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Images/Logo.svg";
import { LayoutDashboard, FileText, FileEdit, FileCodeIcon, Receipt, Ticket, Users, Bell, HelpCircle, Settings, Menu, X, PersonStanding } from 'lucide-react';

const mainNavItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Reports",
    to: "/reports",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Customers",
    to: "/customers",
    icon: <PersonStanding className="h-5 w-5" />,
  },
  {
    title: "Templates",
    to: "/templates",
    icon: <FileEdit className="h-5 w-5" />,
  },
  {
    title: "Contracts",
    to: "/contracts",
    icon: <FileCodeIcon className="h-5 w-5" />,
  },
  {
    title: "Transactions",
    to: "/transactions",
    icon: <Receipt className="h-5 w-5" />,
  },
  {
    title: "Tickets",
    to: "/tickets",
    icon: <Ticket className="h-5 w-5" />,
  },
  {
    title: "Manage Users",
    to: "/manage_users",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Notification",
    to: "/notifications",
    icon: <Bell className="h-5 w-5" />,
  },
];

const bottomNavItems = [
  {
    title: "Support",
    to: "/support",
    icon: <HelpCircle className="h-5 w-5" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-5 w-5" />,
  },
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        className={`
          lg:hidden fixed z-50 top-4 p-2 text-gray-600 hover:text-gray-900 focus:outline-none
          ${isMobileMenuOpen ? 'right-4' : 'left-4'}
        `}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 z-40 h-full w-60 bg-[#F9F9F9] font-sans
        transform transition-transform duration-200 ease-in-out
        lg:translate-x-0 lg:static lg:h-screen
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        
        <div className="flex flex-col h-full">
          {/* Logo section */}
          <div className="p-4 border-b flex items-center m-4  bg-white justify-center rounded">
            <div className="flex items-center justify-center">
              <img
                src={Logo}
                alt="Afriwok Logo"
                className="h-10 w-auto bg-white"
              />
            </div>
            <p className="text-sm text-gray-500 font-sans bg-[#F9F9F9] rounded ml-2 p-1">
              Super Admin
            </p>
          </div>

          <nav className="flex-1 overflow-y-auto py-2 px-4">
            <ul className="space-y-1">
              {mainNavItems.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.to}
                    onClick={closeMobileMenu}
                    className={`flex items-center font-sans gap-2 px-3 py-2 rounded-lg transition-colors duration-150 group ${
                      location.pathname === item.to
                        ? "bg-gray-200 text-gray-900"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    <span
                      className={`text-gray-400 group-hover:text-gray-600 ${
                        location.pathname === item.to ? "text-gray-900" : ""
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="font-sans font-medium">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Navigation */}
          <div className="p-3 border-t border-gray-200">
            <ul className="space-y-1">
              {bottomNavItems.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.to}
                    onClick={closeMobileMenu}
                    className={`flex font-sans items-center gap-3 px-3 py-1 rounded-lg transition-colors duration-150 group ${
                      location.pathname === item.to
                        ? "bg-gray-200 text-gray-900"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    <span
                      className={`text-gray-400 group-hover:text-gray-600 ${
                        location.pathname === item.to ? "text-gray-900" : ""
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="font-sans font-semibold">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
