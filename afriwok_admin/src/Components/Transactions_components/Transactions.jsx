import { useState, useEffect } from "react";
import { MoreHorizontal, Download, Calendar, ChevronLeft, ChevronRight, X, ArrowUp, ChevronDown } from 'lucide-react';
import FilterPanel from '../FilterPanel';

const tabs = ["All", "Contracts", "WOK Tokens", "Subscription"];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openMenuId && !event.target.closest('td')) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [openMenuId]);

  const getTableColumns = (tab) => {
    switch (tab) {
      case "All":
        return [
          "Transaction ID",
          "Transaction Type",
          "Mode of Transaction",
          "Date/Time",
          "Status",
        ];
      case "Contracts":
        return [
          "Transaction ID",
          "Transaction Type",
          "Mode of Transaction",
          "Date/Time",
          "Status",
        ];
      case "WOK Tokens":
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
      case "All":
        return [
          {
            id: "TX123 098",
            cols: [
              "TX123 098",
              "Escrow",
              "Card",
              "2024/04/09 12:09",
              "Successful",
            ],
          },
          {
            id: "TX123 099",
            cols: [
              "TX123 099",
              "Escrow",
              "Card",
              "2024/04/09 12:09",
              "Pending",
            ],
          },
          {
            id: "TX123 100",
            cols: [
              "TX123 100",
              "WOK Token",
              "Card",
              "2024/04/09 12:09",
              "Successful",
            ],
          },
        ];
      case "Contracts":
        return [
          {
            id: "WO123 098",
            cols: [
              "WO123 098",
              "Escrow",
              "John Doe",
              "2024/04/09 12:09",
              "Active",
            ],
          },
          {
            id: "WO123 099",
            cols: [
              "WO123 099",
              "Escrow",
              "Jane Smith",
              "2024/04/09 12:09",
              "Pending",
            ],
          },
          {
            id: "WO123 100",
            cols: [
              "WO123 100",
              "Escrow",
              "Bob Johnson",
              "2024/04/09 12:09",
              "Completed",
            ],
          },
        ];

      case "Job Type":
        return [
          {
            id: "Job Type"
          }
        ]
      case "WOK Tokens":
        return [
          {
            id: "TX123 101",
            cols: [
              "TX123 101",
              "WOK Token",
              "Card",
              "2024/04/09 00:12:06",
              "Pending",
            ],
          },
          {
            id: "TX123 102",
            cols: [
              "TX123 102",
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

  const handleViewTransaction = (transaction) => {
    setSelectedTransaction(transaction);
    setOpenMenuId(null);
  };

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
      {activeTab !== "Subscription" && (
        <>
          {/* Table */}
          <div className="border rounded">
            <div className="flex bg-white px-4 rounded-t py-4 justify-between items-start md:items-center gap-2">
            <button
                className="w-full font-sans font-semibold md:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                onClick={() => setIsFilterOpen(true)}
              >
                <Calendar className="h-4 w-4" />
                Filter by
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="w-full font-sans font-semibold md:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
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
                        className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans"
                      >
                        {column}
                      </th>
                    ))}
                    <th className="px-6 py-2 text-left text-sm font-semibold text-gray-500 font-sans"></th>
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
                        <td key={index} className="px-6 py-4 whitespace-nowrap">
                          {index === row.cols.length - 1 ? (
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-sans ${getStatusClass(
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
                          <MoreHorizontal className="h-4 w-4 text-gray-500 font-sans" />
                        </button>
                        {openMenuId === row.id && (
                          <div className="absolute right-0 mt-1 w-24 bg-white rounded-lg shadow-lg border py-1 z-10">
                            <button 
                              className="w-full text-left px-4 py-2 text-sm font-sans text-gray-700 hover:bg-gray-100"
                              onClick={() => handleViewTransaction(row)}
                            >
                              View
                            </button>
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
        </>
      )}

      {/* Subscription Tab Placeholder */}
      {activeTab === "Subscription" && (
        <div className="text-center font-sans py-8 text-gray-500">
          Subscription content will be added later
        </div>
      )}

      {/* Transaction Details Popup */}
      {selectedTransaction && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg w-full max-w-md relative max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold font-sans">Transaction Details</h2>
        <button
          onClick={() => setSelectedTransaction(null)}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Transaction Info */}
      <div className="p-4 flex items-start gap-3 border-b">
        <div className="p-2 bg-gray-100 rounded">
          <ArrowUp className="w-5 h-5 text-gray-600" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium font-sans">
                {selectedTransaction.cols[1] === "Escrow" ? "Job Type" : selectedTransaction.cols[1]}
              </h3>
              <p className="text-sm text-gray-500 font-sans">{selectedTransaction.cols[3]}</p>
            </div>
            <div className="text-right">
              <p className="font-medium font-sans">N20,000.00</p>
              <p className="text-sm text-gray-500 font-sans">Debit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Details */}
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 font-sans">Transaction ID</p>
            <p className="text-sm font-sans">{selectedTransaction.cols[0]}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-sans">Status</p>
            <p className={`text-sm rounded font-sans p-1 ${getStatusClass(selectedTransaction.cols[4])}`}>
              {selectedTransaction.cols[4]}
            </p>
          </div>
          <div>
            <p className="text-sm font-sans text-gray-500">Transaction date</p>
            <p className="text-sm font-sans">{selectedTransaction.cols[3]}</p>
          </div>
          <div>
            <p className="text-sm font-sans text-gray-500">Recipient</p>
            <p className="text-sm font-sans">
              {selectedTransaction.cols[1] === "Escrow" ? "Job Type" : selectedTransaction.cols[1]}
            </p>
          </div>
          <div>
            <p className="text-sm font-sans text-gray-500">Transaction Type</p>
            <p className="text-sm font-sans">{selectedTransaction.cols[1]}</p>
          </div>
          <div>
            <p className="text-sm font-sans text-gray-500">Mode of Transaction</p>
            <p className="text-sm font-sans">{selectedTransaction.cols[2]}</p>
          </div>
          <div>
            <p className="text-sm font-sans text-gray-500">Work ID</p>
            <p className="text-sm font-sans text-[#418050]">XWOekcb</p>
          </div>
          <div>
            <p className="text-sm font-sans text-gray-500">VAT</p>
            <p className="text-sm font-sans">100000</p>
          </div>
          {selectedTransaction.cols[1] !== "Escrow" && (
            <div>
              <p className="text-sm font-sans text-gray-500">Work Credit</p>
              <p className="text-sm font-sans">5000</p>
            </div>
          )}
          <div>
            <p className="text-sm font-sans text-gray-500">Amount</p>
            <p className="text-sm font-sans">N20,000.00</p>
          </div>
          <div>
            <p className="text-sm font-sans text-gray-500">VAT</p>
            <p className="text-sm font-sans">1000</p>
          </div>
          {selectedTransaction.cols[1] !== "WOK Token" && (
            <div>
              <p className="text-sm font-sans text-gray-500">Work Commission</p>
              <p className="text-sm font-sans">1200</p>
            </div>
          )}
        </div>

        <button
          className="w-full bg-[#8B9467] font-sans text-white py-2 px-4 rounded-md hover:bg-[#64748B] transition-colors mt-6"
        >
          Download Receipt
        </button>
      </div>
    </div>
  </div>
)}

<FilterPanel 
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}
