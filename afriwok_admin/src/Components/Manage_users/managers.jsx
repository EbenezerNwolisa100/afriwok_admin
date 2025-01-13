import { useState } from "react";
import FilterPanel from "../FilterPanel";
import {
  MoreHorizontal,
  Download,
  Filter,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
  ChevronDown,
  Eye,
} from "lucide-react";

export default function ManageUsers() {
  const [activeTab, setActiveTab] = useState("Admin Users");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
  const [isRoleDrawerOpen, setIsRoleDrawerOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Form states
  const [selectedRole, setSelectedRole] = useState("Administrator");
  const [selectedPermission, setSelectedPermission] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isPermissionDropdownOpen, setIsPermissionDropdownOpen] =
    useState(false);
  const [phoneCode, setPhoneCode] = useState("+234");

  const tabs = ["Admin Users", "Roles", "Logs"];

  const adminUsers = [
    {
      id: "C123 435",
      firstName: "Adedemo",
      lastName: "Isjokee",
      email: "adedemo@example.com",
      phone: "+234 80 123456789",
      role: "Admin",
      status: "Unverified",
    },
    {
      id: "C123 436",
      firstName: "Adedemo",
      lastName: "Isjoke",
      email: "adedemo@example.com",
      phone: "+234 80 123456789",
      role: "Super Admin",
      status: "Verified",
    },
  ];

  const roles = [
    {
      role: "Super Admin",
      permission: "View Permissions",
      numberofusers: "10",
      lastupdated: "2024/04/09 00:12:06",
      status: "Verified",
    },
    {
      role: "Admin",
      permission: "View Permissions",
      numberofusers: "10",
      lastupdated: "2024/04/09 00:12:06",
      status: "Unverified",
    },
  ];

  const logs = [
    {
      userprofile: "Chinedu Uche",
      cateogry: "Ticket",
      taskactivity: "New Ticket",
      dateTime: "2024/04/09 00:12:06",
    },
    {
      userprofile: "Obiora Uche",
      cateogry: "Template",
      taskactivity: "Edit Template ",
      dateTime: "2024/04/09 00:12:06",
    },
  ];

  const handleAddNew = () => {
    if (activeTab === "Admin Users") {
      setIsUserDrawerOpen(true);
    } else if (activeTab === "Roles") {
      setIsRoleDrawerOpen(true);
    }
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "verified":
      case "completed":
      case "successful":
      case "open":
        return "bg-green-100 text-green-800";
      case "unverified":
      case "pending":
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">
                  Customer ID
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">
                  First Name
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">
                  Last Name
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">
                  Email address
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">
                  Phone Number
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">
                  Admin
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">
                  Status
                </th>
                <th className="px-6 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {adminUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                    {user.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                    {user.firstName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                    {user.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                    {user.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full font-semibold text-xs font-sans ${getStatusClass(
                        user.status
                      )}`}
                    >
                      {user.status}
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
        );
      case "Roles":
        return (
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="w-12 px-6 py-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">
                  Role
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">
                  Permissions
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">
                  Number of Users
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">
                  Last Updated
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">
                  Status
                </th>
                <th className="px-6 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {roles.map((role, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                    {role.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                    {role.permission}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                    {role.numberofusers}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                    {role.lastupdated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-sans ${getStatusClass(
                        role.status
                      )}`}
                    >
                      {role.status}
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
        );
      case "Logs":
        return (
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="w-12 px-6 py-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">
                  User Profile
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">
                  Category
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">
                  Task/Activity
                </th>
                <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans">
                  Date/Time
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {logs.map((log, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                    {log.userprofile}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                    {log.cateogry}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                    {log.taskactivity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                    {log.dateTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto bg-[#F9F9F9]">
      {/* Tabs */}
      <div className="border-b mb-6 -mx-2 md:mx-0">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 md:px-4 py-2 -mb-px font-sans font-semibold whitespace-nowrap ${
                activeTab === tab
                  ? "border-b-2 border-black text-black"
                  : "text-black"
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
              className="md:w-auto w-full font-sans bg-[#8B9467] text-white font-semibold flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              + Add New
              <Filter className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg">{renderTable()}</div>

        {/* Pagination */}
        <div className="flex bg-white flex-col md:flex-row items-center justify-between border-t gap-4 px-6 py-6">
          <span className="text-sm text-gray-500 order-2 font-sans md:order-1">
            Page {currentPage} of 30
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
              {[1, 2, 3, 4, 5].map((number) => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg ${
                    currentPage === number
                      ? "bg-gray-600 text-white"
                      : "border hover:bg-gray-50"
                  }`}
                >
                  {number}
                </button>
              ))}
              <span className="px-2">...</span>
            </div>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 30))}
              disabled={currentPage === 30}
              className="flex items-center font-sans gap-1 px-4 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* User Drawer */}
      {isUserDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsUserDrawerOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isUserDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold font-sans">New Admin User</h2>
          <button
            onClick={() => setIsUserDrawerOpen(false)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <hr />

        <div className="overflow-y-auto max-h-[calc(100vh-90px)]">
          <form onSubmit={(e) => e.preventDefault()} className="p-4 space-y-3">
            <div className="space-y-1">
              <label className="text-sm font-medium flex font-sans justify-between">
                Role
                <button className="text-green-600 font-sans flex items-center gap-1 text-sm">
                  <Eye className="h-4 w-4" />
                  View Roles/Permissions?
                </button>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                  className="w-full px-3 py-2 text-left border rounded-md font-sans flex items-center justify-between hover:border-gray-400"
                >
                  {selectedRole}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isRoleDropdownOpen && (
                  <div className="absolute top-full left-0 w-full font-sans mt-1 border rounded-md bg-white shadow-lg z-10">
                    {["Administrator", "Super Admin", "User"].map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => {
                          setSelectedRole(role);
                          setIsRoleDropdownOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-gray-50"
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium font-sans">
                Email Address*
              </label>
              <input
                type="email"
                required
                placeholder="Enter email here"
                className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium font-sans">
                First Name*
              </label>
              <input
                type="text"
                required
                placeholder="Enter"
                className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium font-sans ">
                Last Name*
              </label>
              <input
                type="text"
                required
                placeholder="Enter"
                className="w-full px-3 py-2 border font-sans  rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium font-sans ">
                Phone Number*
              </label>
              <div className="flex gap-2">
                <select
                  value={phoneCode}
                  onChange={(e) => setPhoneCode(e.target.value)}
                  className="px-3 py-2 border rounded-md font-sans focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                >
                  <option className="font-sans" value="+234">
                    +234
                  </option>
                  <option className="font-sans" value="+1">
                    +1
                  </option>
                  <option className="font-sans" value="+44">
                    +44
                  </option>
                </select>
                <input
                  type="tel"
                  required
                  placeholder="80 0000 0000"
                  className="flex-1 px-3 py-2 font-sans border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium font-sans">Status</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                  className="w-full px-3 py-2 text-left border font-sans rounded-md flex items-center justify-between hover:border-gray-400"
                >
                  {selectedStatus}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isStatusDropdownOpen && (
                  <div className="absolute top-full left-0 font-sans w-full mt-1 border rounded-md bg-white shadow-lg z-10">
                    {["Active", "Inactive"].map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => {
                          setSelectedStatus(status);
                          setIsStatusDropdownOpen(false);
                        }}
                        className="w-full px-3 py-2 font-sans text-left hover:bg-gray-50"
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="float-right px-4 py-2 font-sans bg-[#8B9467] text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Save
            </button>
          </form>
        </div>
      </div>

      {/* Role Drawer */}
      {isRoleDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsRoleDrawerOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isRoleDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold font-sans">New Role</h2>
          <button
            onClick={() => setIsRoleDrawerOpen(false)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="p-4 space-y-3">
          <div className="space-y-2">
            <label className="text-sm font-medium font-sans">Role Name*</label>
            <input
              type="text"
              required
              placeholder="Enter role name"
              className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium font-sans">Permission</label>
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setIsPermissionDropdownOpen(!isPermissionDropdownOpen)
                }
                className="w-full px-3 py-2 text-left font-sans border rounded-md flex items-center justify-between hover:border-gray-400"
              >
                {selectedPermission || "select permissions"}
                <ChevronDown className="h-4 w-4" />
              </button>
              {isPermissionDropdownOpen && (
                <div className="absolute top-full font-sans left-0 w-full mt-1 border rounded-md bg-white shadow-lg z-10">
                  {["View Only", "Edit", "Full Access"].map((permission) => (
                    <button
                      key={permission}
                      type="button"
                      onClick={() => {
                        setSelectedPermission(permission);
                        setIsPermissionDropdownOpen(false);
                      }}
                      className="w-full px-3 font-sans py-2 text-left hover:bg-gray-50"
                    >
                      {permission}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium font-sans">Status</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                className="w-full px-3 py-2 text-left font-sans border rounded-md flex items-center justify-between hover:border-gray-400"
              >
                {selectedStatus}
                <ChevronDown className="h-4 w-4" />
              </button>
              {isStatusDropdownOpen && (
                <div className="absolute top-full left-0 font-sans w-full mt-1 border rounded-md bg-white shadow-lg z-10">
                  {["Active", "Inactive"].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => {
                        setSelectedStatus(status);
                        setIsStatusDropdownOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left font-sans hover:bg-gray-50"
                    >
                      {status}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="float-right px-4 py-2 bg-[#8B9467] font-sans text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Save
          </button>
        </form>
      </div>

      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}
