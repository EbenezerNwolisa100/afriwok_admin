import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import { Bell, ChevronDown, Search, LogOut, Settings } from 'lucide-react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfilePicsPlaceholder from "../assets/Icons/ProfilePicsPlaceholder.svg";
import NotificationPopup from "./Dashboard_components/AllNotifications";

function Header({ isMobileMenuOpen }) {
  const [user, setUser] = useState({ first_name: "", last_name: "", email: ""});
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isNotificationOpen, setIsNotificationOpen] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [hasUnread] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false)


  const toggleNotification = () => setIsNotificationOpen(!isNotificationOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      const token = localStorage.getItem("authToken")
      if (!token) throw new Error("No token found!")

      const config = {
        method: "post",
        url: "https://admin.dev.afriwok.ng/api/v1/admin/logout",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }

      const response = await axios(config)
      console.log("Logout successful:", response.data)

      // Clear local storage
      localStorage.removeItem("authToken")
      localStorage.removeItem("userDetails")
      localStorage.removeItem("user")

      // Show success message
      alert("Logout successful")

      // Redirect to login page
      navigate("/login")
    } catch (error) {
      if (error.response) {
        console.error("API Response Error:", error.response)
        alert(`Logout failed: ${error.response.data.message || error.response.statusText}`)
      } else {
        console.error("Error:", error.message)
        alert("An unexpected error occurred. Please try again.")
      }
    } finally {
      setIsLoggingOut(false)
      setIsDropdownOpen(false)
    }
  }
  


  const pageTitles = {
    "/": "Dashboard",
    "/reports": "Reports",
    "/customers": "Customers",
    "/transactions": "Transactions",
    "/tickets": "Tickets",
    "/manage_users": "Manage Users",
    "/templates": "Templates",
    "/contracts": "Contracts",
    "/notifications": "Notifications",
    "/support": "Support",
    "/settings": "Settings",
    "/profilesettings": "Profile Settings",
    "/ticketdetails": "Ticket Details",
    "/customerdetails": "Customer Details",
    "/contractdetails": "Contract Details",
    "/wokpost": "WOK Post",
    "/wokprofile": "WOK Profile",
    "/marketplace": "MarketPlace",
  };

  const pageTitle = pageTitles[location.pathname] || "Page";

  return (
    <header className={`w-full bg-[#F9F9F9] lg:ml-0 ml-4 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-10' : 'opacity-100'}`}>
      <div className="px-4 sm:px-6 py-1 bg-white my-4 rounded lg:mr-4 mr-8">
        <div className="flex h-16 items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold text-gray-900 font-sans">
              {pageTitle}
            </h1>
          </div>  

          <div className="flex-1 max-w-lg">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search docs, tickets and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`w-full py-2 pl-10 pr-4 text-sm text-gray-900 bg-gray-50 rounded-lg border font-sans focus:outline-none focus:ring-2 focus:ring-gray-200 transition-shadow duration-200 ${
                  isSearchFocused ? "border-gray-300" : "border-gray-200"
                }`}
                disabled={isMobileMenuOpen}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={toggleNotification}
              className="relative p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg"
              disabled={isMobileMenuOpen}
            >
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" />
              {hasUnread && (
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500" />
              )}
            </button>

            <button
              onClick={toggleDropdown}
              type="button"
              className="flex items-center gap-2 focus:outline-none"
              disabled={isMobileMenuOpen}
            >
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <img src={ProfilePicsPlaceholder} alt="" />
              </div>
              <div className="hidden sm:block text-right">
                <div className="text-base font-sans font-medium text-gray-900">
                  {user.first_name} {user.last_name}
                </div>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <NotificationPopup
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />

      {isDropdownOpen && !isMobileMenuOpen && (
        <div className="absolute top-28 right-6 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img src={ProfilePicsPlaceholder} alt="" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800 font-sans">
                  {user.first_name} {user.last_name}
                </p>
                <p className="text-xs text-gray-500 font-sans">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          <ul className="py-2">
            <li>
              <Link
                to={`/profilesettings`}
                onClick={() => setIsDropdownOpen(false)}
                className="flex items-center px-4 py-2 text-mormal font-semibold text-gray-700 font-sans hover:bg-gray-100"
              >
                <Settings className="w-5 h-5 mr-2 text-gray-600 " />
                Profile Settings
              </Link>
            </li>
            <li>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex font-sans items-center w-full font-semibold px-4 py-2 text-sm text-red-600 hover:bg-gray-100 disabled:opacity-50"
            >
              <LogOut className="w-5 h-5 mr-2" />
              {isLoggingOut ? "Logging out..." : "Log Out"}
            </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
};

export default Header;

