import { useState } from "react"
import { Link } from "react-router-dom"
import { MoreHorizontal, Download, Filter, Calendar, ChevronLeft, ChevronRight, Search, X } from 'lucide-react'
import NewTicketForm from '../Tickets_components/AssignedTicketComponent'
import AssignTicketForm from '../Tickets_components/NewTicketComponent'

const tabs = ["All", "Assigned", "Opened", "Closed"]

export default function Tickets() {
  const [activeTab, setActiveTab] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isNewTicketOpen, setIsNewTicketOpen] = useState(false)
  const [isAssignTicketOpen, setIsAssignTicketOpen] = useState(false)
  const [openMenuId, setOpenMenuId] = useState(null)

  const getTableColumns = (tab) => {
    switch (tab) {
      case "All":
      case "Assigned":
      case "Opened":
      case "Closed":
        return [
          "Ticket ID",
          "Ticket Type",
          "Subject",
          "User",
          "Date/Time",
          "Status",
        ]
      default:
        return []
    }
  }

  const getTableData = (tab) => {
    switch (tab) {
      case "All":
        return [
          {
            id: "TX123_098",
            cols: [
              "TX123_098",
              "Report",
              "Inaccessible Account",
              "Uche ThankGod",
              "2024/04/09 12:09",
              "In Active",
            ],
          },
          {
            id: "TX123_099",
            cols: [
              "TX123_099",
              "Report",
              "Inaccessible Account",
              "Uche ThankGod",
              "2024/04/09 12:09",
              "In Active",
            ],
          },
          {
            id: "TX123_100",
            cols: [
              "TX123_100",
              "Issue",
              "Inaccessible Account",
              "Uche ThankGod",
              "2024/04/09 12:09",
              "Active",
            ],
          },
          {
            id: "TX123_101",
            cols: [
              "TX123_101",
              "Issue",
              "Inaccessible Account",
              "Uche ThankGod",
              "2024/04/09 12:09",
              "Active",
            ],
          },
        ]
      default:
        return []
    }
  }

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "active":
      case "completed":
      case "successful":
      case "open":
        return "bg-green-100 text-green-800"
      case "in active":
      case "pending":
      case "closed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleAddNew = () => {
    if (activeTab === "All") {
      setIsNewTicketOpen(true)
    } else if (activeTab === "Assigned") {
      setIsAssignTicketOpen(true)
    }
  }

  return (
    <div className="max-w-[1400px] mx-auto bg-[#F9F9F9]">
      {/* Tabs */}
      <div className="border-b mb-6 -mx-2 md:mx-0">
        <div className="flex scrollbar-hide">
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

      {/* Table Section */}
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
            <button className="md:w-auto w-full font-sans font-semibold flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Calendar className="h-4 w-4" />
              Filter by
              <Filter className="h-4 w-4" />
            </button>
            <button className="md:w-auto w-full font-sans font-semibold flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="h-4 w-4" />
              Export
            </button>
            {(activeTab === "All" || activeTab === "Assigned") && (
              <button
                onClick={handleAddNew}
                className="md:w-auto w-full font-sans font-semibold flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Add New
              </button>
            )}
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg">
          {/* Table */}
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="w-12 px-6 py-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                {getTableColumns(activeTab).map((column) => (
                  <th
                    key={column}
                    className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans tracking-wider"
                  >
                    {column}
                  </th>
                ))}
                <th className="px-6 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {getTableData(activeTab).map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  {row.cols.map((col, index) => (
                    <td key={index} className="px-6 py-4 whitespace-nowrap">
                      {index === row.cols.length - 1 ? (
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${getStatusClass(
                            col
                          )}`}
                        >
                          {col}
                        </span>
                      ) : (
                        <span className="text-sm text-gray-900 font-sans">
                          {col}
                        </span>
                      )}
                    </td>
                  ))}
                  <td className="px-6 py-4 whitespace-nowrap relative">
                    <button 
                      className="p-1 hover:bg-gray-100 rounded-full"
                      onClick={() => setOpenMenuId(openMenuId === row.id ? null : row.id)}
                    >
                      <MoreHorizontal className="h-4 w-4 text-gray-500" />
                    </button>
                    {openMenuId === row.id && (
                      <div className="absolute right-0 mt-1 w-24 bg-white rounded-lg shadow-lg border py-1 z-10">
                        <Link to={`/ticketdetails`}>
                        <button 
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          View
                        </button>
                        </Link>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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

      {/* New Ticket Drawer */}
      {isNewTicketOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsNewTicketOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
          isNewTicketOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold">New Ticket</h2>
          <button
            onClick={() => setIsNewTicketOpen(false)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4">
          <NewTicketForm />
        </div>
      </div>

      {/* Assign Ticket Drawer */}
      {isAssignTicketOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsAssignTicketOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
          isAssignTicketOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold">Assign Ticket</h2>
          <button
            onClick={() => setIsAssignTicketOpen(false)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4">
          <AssignTicketForm />
        </div>
      </div>
    </div>
  )
}

