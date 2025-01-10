"use client";

import { useState } from "react";
import {
  MoreHorizontal,
  Download,
  Filter,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const tabs = ["Users", "Payment", "Ticket", "Contracts", "Subscription"];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Users");
  const [currentPage, setCurrentPage] = useState(1);

  const getMetrics = (tab) => {
    switch (tab) {
      case "Users":
        return [
          { title: "New Users", value: "53" },
          { title: "Total Users", value: "3" },
          { title: "Active Users", value: "5" },
          { title: "Verified Users", value: "5" },
        ];
      case "Ticket":
        return [
          { title: "Open", value: "1,442" },
          { title: "Closed", value: "100" },
          { title: "Assigned", value: "10" },
        ];
      case "Contracts":
        return [
          { title: "Open", value: "10,442" },
          { title: "In-Progress", value: "2342" },
          { title: "Completed", value: "2044" },
        ];
      case "Payment":
        return [
          { title: "Escrow", value: "N230,442.00" },
          { title: "Completed", value: "N600,442.00" },
          { title: "Commission", value: "N500,000.00" },
          { title: "Refunded", value: "N120,000.00" },
        ];
      default:
        return [];
    }
  };

  const getTableColumns = (tab) => {
    switch (tab) {
      case "Users":
        return [
          "Customer ID",
          "First Name",
          "Last Name",
          "Email address",
          "Phone Number",
          "Location",
          "Status",
        ];
      case "Ticket":
        return [
          "Ticket ID",
          "Ticket Type",
          "Subject",
          "User",
          "Date/Time Created",
          "Status",
        ];
      case "Contracts":
        return [
          "Work Order ID",
          "Mode of Transaction",
          "Service Provider",
          "Date/Time",
          "Status",
        ];
      case "Payment":
        return [
          "Transaction ID",
          "Transaction Type",
          "Mode of Transaction",
          "Date/Time",
          "Status",
        ];
      default:
        return [];
    }
  };

  const getTableData = (tab) => {
    switch (tab) {
      case "Users":
        return [
          {
            id: "C123 435",
            cols: [
              "C123 435",
              "Adedemo",
              "Isjokee",
              "adedemo@example.com",
              "+234 80 123456789",
              "Enugu",
              "In Active",
            ],
          },
          {
            id: "C123 436",
            cols: [
              "C123 436",
              "Adedemo",
              "Isjoke",
              "adedemo@example.com",
              "+234 80 123456789",
              "Enugu",
              "Active",
            ],
          },
          
        ];
      case "Ticket":
        return [
          {
            id: "TX123 098",
            cols: [
              "TX123 098",
              "Report",
              "Inaccessible account",
              "Uche ThankGod",
              "2024/04/09 00:12:06",
              "Closed",
            ],
          },
          {
            id: "TX123 099",
            cols: [
              "TX123 098",
              "Report",
              "Unable to create WOK",
              "Uche ThankGod",
              "2024/04/09 00:12:06",
              "Open",
            ],
          },
        ];
      case "Contracts":
        return [
          {
            id: "AFW123 098",
            cols: [
              "AFW123 098",
              "Escrow/Card",
              "Arinze Onyia",
              "2024/04/09 00:12:06",
              "Completed",
            ],
          },
          {
            id: "AFW123 099",
            cols: [
              "AFW123 098",
              "Escrow/Bank Transfer",
              "Arinze Onyia",
              "2024/04/09 00:12:06",
              "Completed",
            ],
          },
        ];
      case "Payment":
        return [
          {
            id: "TX123 098",
            cols: [
              "TX123 098",
              "Escrow",
              "Card",
              "2024/04/09 00:12:06",
              "Pending",
            ],
          },
          {
            id: "TX123 099",
            cols: [
              "TX123 098",
              "WOK Token",
              "Bank Transfer",
              "2024/04/09 00:12:06",
              "Successful",
            ],
          },
        ];
      default:
        return [];
    }
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "active":
      case "completed":
      case "successful":
      case "open":
        return "bg-green-100 text-green-800";
      case "in active":
      case "pending":
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className=" max-w-[1400px] mx-auto bg-[#F9F9F9]">
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

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6">
        {getMetrics(activeTab).map((metric) => (
          <div
            key={metric.title}
            className="bg-white rounded-lg border border-gray-300 py-5 px-4"
          >
            <div className="flex justify-between items-start">
              <div className="mb-4">
                <h3 className="text-normal text-gray-500 font-sans">
                  {metric.title}
                </h3>
                <p className="text-2xl md:text-3xl font-sans font-semibold mt-2">
                  {metric.value}
                </p>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <MoreHorizontal className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      {activeTab !== "Subscription" && (
        <>
          {/* Table */}
          <div className="border rounded">
          <div className="flex bg-white px-4 rounded-t py-4 justify-between items-start md:items-center gap-2">
            <button className="w-full font-sans font-semibold md:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Calendar className="h-4 w-4" />
              Filter by
              <Filter className="h-4 w-4" />
            </button>
            <button className="w-full font-sans text-white font-semibold md:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 bg-[#D0D5DD] rounded-lg hover:bg-gray-50">
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>

          <div className="overflow-x-auto rounded-lg">
            {/* Table Controls */}
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="">
                <tr>
                  <th className="w-12 px-6 py-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </th>
                  {getTableColumns(activeTab).map((column) => (
                    <th
                      key={column}
                      className="px-6 py-2 text-left text-sm font-medium text-gray-500 font-sans"
                    >
                      {column}
                    </th>
                  ))}
                  <th className="px-6 py-2 text-left font-semibold text-gray-500 font-sans"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {getTableData(activeTab).map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                    </td>
                    {row.cols.map((col, index) => (
                      <td key={index} className="px-6 py-4 font-sans whitespace-nowrap">
                        {index === row.cols.length - 1 ? (
                          <span
                            className={`px-2 py-1 rounded-full font-sans text-sm ${getStatusClass(
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
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="p-1 hover:bg-gray-100 rounded-full">
                        <MoreHorizontal className="h-4 w-4 text-gray-500 font-sans" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex bg-white flex-col md:flex-row items-center justify-between border-t gap-4 px-6 py-6">
            <span className="text-sm text-gray-500 order-2 font-sans font-medium md:order-1">
              Page {currentPage} of 30
            </span>
            <div className="flex items-center gap-2 order-1 md:order-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center text-lg font-bold gap-1 font-sans px-4 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
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
                className="flex items-center font-bold font-sans gap-1 px-4 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          </div>
        </>
      )}

      {/* Subscription Tab Placeholder */}
      {activeTab === "Subscription" && (
        <div className="text-center font-sans py-8 text-gray-500">
          Subscription content will be added later
        </div>
      )}
    </div>
  );
}
