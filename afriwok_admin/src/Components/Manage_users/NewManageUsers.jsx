import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {
  MoreHorizontal,
  Download,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Search,
  ChevronDown,
} from "lucide-react"
import AddNewAdminUser from "./AddNewAdminUser"
import AddNewRole from "./AddNewRole"
import FilterPanel from "../FilterPanel"

// Set up axios interceptor for adding the token to all requests
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken")
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default function ManageUsers() {
  const [activeTab, setActiveTab] = useState("Admin Users")
  const [currentPage, setCurrentPage] = useState(1)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false)
  const [isRoleDrawerOpen, setIsRoleDrawerOpen] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [adminUsers, setAdminUsers] = useState([])
  const [roles, setRoles] = useState([])
  const [logs, setLogs] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  const navigate = useNavigate()
  const tabs = ["Admin Users", "Roles", "Logs"]

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    } else {
      fetchData();
    }
  }, [navigate]);

  useEffect(() => {
    // Clear data before fetching new data
    setAdminUsers([]);
    setRoles([]);
    setLogs([]);
    setTotalPages(1);
    setCurrentPage(1);
    fetchData();
  }, [activeTab]); 

  const fetchData = async () => {
    try {
      let response;
      const url = `https://admin.dev.afriwok.ng/api/v1/admin/manage-users/${
        activeTab === "Admin Users"
          ? "list-admins"
          : activeTab === "Roles"
          ? "list-roles-details"
          : "list-logs"
      }?page=${currentPage}`;

      response = await axios.get(url);

      switch (activeTab) {
        case "Admin Users":
          setAdminUsers(response.data.data.data);
          break;
        case "Roles":
          setRoles(response.data.data.data);
          break;
        case "Logs":
          setLogs(response.data.data.data);
          break;
      }
      setTotalPages(Math.ceil(response.data.data.total / response.data.data.per_page));
    } catch (error) {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        navigate("/login");
      }
    }
  };

  const handleAddNew = () => {
    if (activeTab === "Admin Users") {
      setIsUserDrawerOpen(true)
    } else if (activeTab === "Roles") {
      setIsRoleDrawerOpen(true)
    }
  }

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "true":
      case "completed":
      case "successful":
      case "open":
        return "bg-green-100 text-green-800"
      case "false":
      case "pending":
      case "closed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const renderTable = () => {
    switch (activeTab) {
      case "Admin Users":
        return (
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="w-12 px-6 py-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">Customer ID</th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">First Name</th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">Last Name</th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">Email address</th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">Phone Number</th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">Role</th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">Status</th>
                <th className="px-6 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {adminUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{user.account_id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{user.first_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{user.last_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{user.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                    {user.role.join(", ")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full font-semibold text-xs font-sans ${getStatusClass(user.active.toString())}`}
                    >
                      {user.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="p-1 hover:bg-gray-100 rounded-full">
                      <MoreHorizontal className="h-4 w-4 text-gray-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      case "Roles":
        return (
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="w-12 px-6 py-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">Role</th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">Permissions</th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">Created At</th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">Status</th>
                <th className="px-6 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {roles.map((role, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{role.label}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{role.permissions}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{role.created_at}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-sans ${getStatusClass(role.active.toString())}`}
                    >
                      {role.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="p-1 hover:bg-gray-100 rounded-full">
                      <MoreHorizontal className="h-4 w-4 text-gray-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      case "Logs":
        return (
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="w-12 px-6 py-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">User Profile</th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">Category</th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">Task/Activity</th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">Date/Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {logs.map((log, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{log.userprofile}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{log.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{log.taskactivity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{log.dateTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      default:
        return null
    }
  }

  return (
    <div className="w-full mx-auto bg-[#F9F9F9]">
      {/* Tabs */}
      <div className="border-b mb-6 -mx-2 md:mx-0">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab)
                setCurrentPage(1)
              }}
              className={`px-3 md:px-4 py-2 -mb-px font-sans font-semibold whitespace-nowrap ${
                activeTab === tab ? "border-b-2 border-black text-black" : "text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="border rounded">
        {/* Table Controls */}
        <div className="flex flex-col md:flex-row bg-white px-4 rounded-t py-4 justify-between items-start md:items-center gap-2">
          <div className="flex-1 w-full sm:max-w-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search docs, tickets and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`
                  w-full py-2 pl-10 pr-4 text-sm text-gray-900
                  bg-gray-50 rounded-lg border font-sans
                  focus:outline-none focus:ring-2 focus:ring-gray-200
                  transition-shadow duration-200
                  ${isSearchFocused ? "border-gray-300" : "border-gray-200"}
                `}
              />
            </div>
          </div>
          <div className="flex w-full md:w-auto flex-col md:flex-row bg-white rounded-t justify-between items-start gap-2">
            <button
              className="w-full font-sans font-semibold md:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              onClick={() => setIsFilterOpen(true)}
            >
              <Calendar className="h-4 w-4" />
              Filter by
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="md:w-auto w-full bg-[#D0D5DD] text-white font-sans font-semibold flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="h-4 w-4" />
              Export
            </button>
            <button
              onClick={handleAddNew}
              className="md:w-auto w-full font-sans bg-[#8B9467] text-white font-semibold flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-[#6f831d]"
            >
              + Add New
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg">{renderTable()}</div>

        {/* Pagination */}
        <div className="flex bg-white flex-col md:flex-row items-center justify-between border-t gap-4 px-6 py-6">
          <span className="text-sm text-gray-500 order-2 font-sans md:order-1">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex items-center gap-2 order-1 md:order-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 font-sans px-4 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
            <div className="hidden md:flex gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
                const pageNumber = Math.max(1, currentPage - 2) + index;
                if (pageNumber <= totalPages) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`w-8 h-8 flex items-center justify-center rounded-lg ${
                        currentPage === pageNumber ? "bg-gray-600 text-white" : "border hover:bg-gray-50"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                }
                return null;
              })}
              {totalPages > 5 && <span className="px-2">...</span>}
            </div>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center font-sans gap-1 px-4 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* User Drawer */}
      <AddNewAdminUser isOpen={isUserDrawerOpen} onClose={() => setIsUserDrawerOpen(false)} />
      {/* Role Drawer */}
      <AddNewRole isOpen={isRoleDrawerOpen} onClose={() => setIsRoleDrawerOpen(false)} />

      <FilterPanel isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </div>
  )
}
