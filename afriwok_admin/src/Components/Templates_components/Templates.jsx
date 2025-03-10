import { useState } from "react";
import {
  Download,
  MoreHorizontal,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Upload,
} from "lucide-react";
import FilterPanel from "../FilterPanel";

export default function Templates() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRecipient, setSelectedRecipient] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("draft");
  const [isRecipientOpen, setIsRecipientOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const notifications = [
    {
      id: "TEMP123",
      recipient: "Hair Stylist",
      createdBy: "Adedemo",
      lastUpdatedBy: "Isjoke",
      lastUpdatedTime: "2024/04/09 00:12:06",
      status: "Draft",
    },
    {
      id: "TEMP123",
      recipient: "adedemo@example.com",
      createdBy: "Adedemo",
      lastUpdatedBy: "Isjoke",
      lastUpdatedTime: "+234 80 123456789",
      status: "Published",
    },
    {
      id: "TEMP123",
      recipient: "adedemo@example.com",
      createdBy: "Adedemo",
      lastUpdatedBy: "Isjoke",
      lastUpdatedTime: "+234 80 123456789",
      status: "Published",
    },
    {
      id: "TEMP123",
      recipient: "adedemo@example.com",
      createdBy: "Adedemo",
      lastUpdatedBy: "Isjoke",
      lastUpdatedTime: "+234 80 123456789",
      status: "Published",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDrawerOpen(false);
  };

  return (
    <div className="w-full">
      {/* Table */}
      <div className="flex flex-col bg-white border rounded-t border-b-0 sm:flex-row justify-between items-start sm:items-center px-6 py-6 gap-2">
        <button
          className="w-full font-sans font-semibold md:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          onClick={() => setIsFilterOpen(true)}
        >
          <Calendar className="h-4 w-4" />
          Filter by
          <ChevronDown className="h-4 w-4" />
        </button>
        <div className="flex flex-col md:flex-row w-full sm:w-auto gap-2">
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-initial font-semibold font-sans px-4 py-2 border rounded-md flex items-center justify-center gap-2 bg-[#D0D5DD] text-white hover:bg-gray-50 transition-colors">
              <Download className="h-4 w-4" />
              Import
            </button>
            <button className="flex-1 sm:flex-initial font-semibold font-sans px-4 py-2 border rounded-md flex items-center justify-center gap-2 bg-[#D0D5DD] text-white hover:bg-gray-50 transition-colors">
              <Upload className="h-4 w-4" />
              Export
            </button>
          </div>
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex-1 sm:flex-initial font-sans font-semibold px-4 py-2 rounded-md bg-[#798466] text-white hover:bg-[#798466]/90 transition-colors"
          >
            + Add New
          </button>
        </div>
      </div>
      <div className="overflow-x-auto border rounded-b border-t-0">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-12 px-6 py-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium font-sans text-gray-500">
                Template ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium font-sans text-gray-500">
                Service Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium font-sans text-gray-500">
                Created by
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium font-sans text-gray-500">
                Last Updated by
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium font-sans text-gray-500">
                Last Updated time
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium font-sans text-gray-500">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium font-sans text-gray-500">
                Action
              </th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200">
            {notifications.map((notification, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans text-gray-900">
                  {notification.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans text-gray-900">
                  {notification.recipient}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans text-gray-900">
                  {notification.createdBy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans text-gray-900">
                  {notification.lastUpdatedBy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans text-gray-900">
                  {notification.lastUpdatedTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-sm font-sans rounded-full ${
                      notification.status === "Published"
                        ? "bg-green-100 text-green-800 font-sans"
                        : "bg-gray-100 text-gray-800 font-sans"
                    }`}
                  >
                    {notification.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="p-1 hover:bg-gray-100 rounded-full">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className=" bg-white flex flex-col sm:flex-row items-center justify-between rounded-b gap-4 p-6 border border-t-0">
        <span className="text-sm text-gray-500 font-sans order-2 sm:order-1">
          Page {currentPage} of 30
        </span>
        <div className="flex items-center gap-2 order-1 sm:order-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-md text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center gap-1 font-sans">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </div>
          </button>
          <div className="flex gap-1 font-sans">
            {[1, 2, 3, "...", 10, 11, 12].map((number, index) => (
              <button
                key={index}
                onClick={() =>
                  typeof number === "number" && setCurrentPage(number)
                }
                disabled={typeof number !== "number"}
                className={`w-8 h-8 hidden sm:flex items-center font-sans justify-center rounded-md ${
                  currentPage === number
                    ? "bg-[#798466] text-white"
                    : "border hover:bg-gray-50"
                } ${typeof number !== "number" ? "cursor-default" : ""}`}
              >
                {number}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 30))}
            disabled={currentPage === 30}
            className="px-3 py-1 border rounded-md text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center gap-1">
              Next
              <ChevronRight className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>

      {/* Drawer Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* New Notification Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold font-sans">New Template</h2>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[calc(100vh-90px)]">
          {" "}
          {/* Added scrollable content area */}
          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium font-sans">
                WOK Title*
              </label>
              <input
                type="text"
                required
                placeholder="Enter"
                className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-[#798466] focus:border-transparent"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium font-sans">
                WOK Description*
              </label>
              <input
                type="text"
                required
                placeholder="Enter"
                className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-[#798466] focus:border-transparent"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium font-sans">
                Service Category
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsRecipientOpen(!isRecipientOpen)}
                  className="w-full px-3 py-2 font-sans text-left border rounded-md flex items-center justify-between hover:border-gray-400"
                >
                  {selectedRecipient === "all" ? "All/User" : "Specific Users"}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isRecipientOpen && (
                  <div className="absolute top-full font-sans left-0 w-full mt-1 border rounded-md bg-white shadow-lg z-10">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedRecipient("all");
                        setIsRecipientOpen(false);
                      }}
                      className="w-full px-3 font-sans py-2 text-left hover:bg-gray-50"
                    >
                      Hair Stylist
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedRecipient("specific");
                        setIsRecipientOpen(false);
                      }}
                      className="w-full px-3 font-sans py-2 text-left hover:bg-gray-50"
                    >
                      Specific Users
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium font-sans">Skill</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsRecipientOpen(!isRecipientOpen)}
                  className="w-full px-3 py-2 font-sans text-left border rounded-md flex items-center justify-between hover:border-gray-400"
                >
                  {selectedRecipient === "all" ? "All/User" : "Specific Users"}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isRecipientOpen && (
                  <div className="absolute top-full font-sans left-0 w-full mt-1 border rounded-md bg-white shadow-lg z-10">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedRecipient("all");
                        setIsRecipientOpen(false);
                      }}
                      className="w-full px-3 font-sans py-2 text-left hover:bg-gray-50"
                    >
                      Tiling, Interior
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedRecipient("specific");
                        setIsRecipientOpen(false);
                      }}
                      className="w-full px-3 font-sans py-2 text-left hover:bg-gray-50"
                    >
                      Specific Users
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium font-sans">Budget</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsRecipientOpen(!isRecipientOpen)}
                  className="w-full px-3 py-2 font-sans text-left border rounded-md flex items-center justify-between hover:border-gray-400"
                >
                  {selectedRecipient === "all" ? "All/User" : "Specific Users"}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isRecipientOpen && (
                  <div className="absolute top-full font-sans left-0 w-full mt-1 border rounded-md bg-white shadow-lg z-10">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedRecipient("all");
                        setIsRecipientOpen(false);
                      }}
                      className="w-full px-3 font-sans py-2 text-left hover:bg-gray-50"
                    >
                      Open for negoptiation
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedRecipient("specific");
                        setIsRecipientOpen(false);
                      }}
                      className="w-full px-3 font-sans py-2 text-left hover:bg-gray-50"
                    >
                      Specific Users
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium font-sans">Status</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsStatusOpen(!isStatusOpen)}
                  className="w-full px-3 py-2 font-sans text-left border rounded-md flex items-center justify-between hover:border-gray-400"
                >
                  {selectedStatus === "draft" ? "Draft" : "Published"}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isStatusOpen && (
                  <div className="absolute top-full left-0 w-full mt-1 border rounded-md bg-white shadow-lg z-10">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedStatus("draft");
                        setIsStatusOpen(false);
                      }}
                      className="w-full px-3 font-sans py-2 text-left hover:bg-gray-50"
                    >
                      Draft
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedStatus("published");
                        setIsStatusOpen(false);
                      }}
                      className="w-full font-sans px-3 py-2 text-left hover:bg-gray-50"
                    >
                      Published
                    </button>
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="float-right px-4 py-2 font-sans bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Save
            </button>
          </form>
        </div>
      </div>

      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}
