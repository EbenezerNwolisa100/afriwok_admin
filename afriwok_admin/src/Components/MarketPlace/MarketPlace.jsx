import { useState } from "react"
import { ChevronLeft, ChevronRight, Download, Filter, MoreHorizontal } from "lucide-react"
import { Link } from "react-router-dom"

const tabs = [
  { id: "wok-post", label: "WOK Post" },
  { id: "wok-profile", label: "WOK Profile" },
]

const wokPostData = [
  {
    id: "C123 435",
    name: "Adedamo John",
    email: "adedamo@example.com",
    phone: "+234 80 123456789",
    location: "Enugu",
    status: "Delisted",
  },
  {
    id: "C123 485",
    name: "Adedamo",
    email: "adedamo@example.com",
    phone: "+234 80 123456789",
    location: "Enugu",
    status: "Active",
  },
  // Add more sample data as needed
]

const wokProfileData = [
  {
    id: "C123 435",
    name: "Adedamo John",
    email: "adedamo@example.com",
    phone: "+234 80 123456789",
    tagIdentified: "Fraud, Crypto",
    location: "Enugu",
    status: "Delisted",
  },
  {
    id: "C123 437",
    name: "Adedamo",
    email: "adedamo@example.com",
    phone: "+234 80 123456789",
    tagIdentified: "Igoke",
    location: "Enugu",
    status: "Active",
  },
  // Add more sample data as needed
]

export default function WokDashboard() {
  const [activeTab, setActiveTab] = useState("wok-post")
  const [currentPage, setCurrentPage] = useState(1)
  const [openDropdownId, setOpenDropdownId] = useState(null)

  const handleMoreClick = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id)
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "text-green-600"
      case "delisted":
        return "text-gray-600"
      case "expired":
        return "text-blue-600"
      default:
        return "text-gray-600"
    }
  }

  const renderTable = () => {
    const data = activeTab === "wok-post" ? wokPostData : wokProfileData

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="w-4 p-4">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500   font-sans"
              >
                WOK ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500   font-sans"
              >
                {activeTab === "wok-post" ? "Cx Name" : "Cx First Name"}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500   font-sans"
              >
                Email address
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500   font-sans"
              >
                Phone Number
              </th>
              {activeTab === "wok-profile" && (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500   font-sans"
                >
                  Tag Identified
                </th>
              )}
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500   font-sans"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500   font-sans"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500   font-sans"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="w-4 p-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-sans">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{item.phone}</td>
                {activeTab === "wok-profile" && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{item.tagIdentified}</td>
                )}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">{item.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  <span className={`font-sans ${getStatusColor(item.status)}`}>{item.status}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans relative">
                  <button onClick={() => handleMoreClick(item.id)} className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                  {openDropdownId === item.id && (
                    <>
                      <div className="fixed inset-0 h-full w-full z-10" onClick={() => setOpenDropdownId(null)} />
                      <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-20">
                        <Link
                          to={activeTab === "wok-post" ? `/wokpost` : `/wokprofile`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-sans"
                          onClick={() => setOpenDropdownId(null)}
                        >
                          View
                        </Link>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                font-sans whitespace-nowrap py-4 px-6 border-b-2 text-sm font-medium
                ${
                  activeTab === tab.id
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Filters and Export */}
      <div className="p-4 flex justify-between items-center border-b border-gray-200">
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 font-sans">
          <Filter className="h-4 w-4 mr-2" />
          Filter by
        </button>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 font-sans">
          <Download className="h-4 w-4 mr-2" />
          Export
        </button>
      </div>

      {/* Table */}
      {renderTable()}

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
            <div className="flex font-sans items-center gap-1">
              Next
              <ChevronRight className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

