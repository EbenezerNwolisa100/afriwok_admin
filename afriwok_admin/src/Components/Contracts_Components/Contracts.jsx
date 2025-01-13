import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  MoreHorizontal,
} from "lucide-react";
import FilterPanel from "../FilterPanel";

export default function Contracts() {
  const [openMenuId, setOpenMenuId] = useState(null); // Track which menu is open
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const contractData = [
    {
      id: "AFW123 028",
      mode: "Escrow/Card",
      provider: "Arinze Onyia",
      date: "2024/04/09 00:12:06",
      status: "Completed",
    },
    {
      id: "AFW123 038",
      mode: "Escrow/Bank Transfer",
      provider: "Arinze Onyia",
      date: "2024/04/09 00:12:06",
      status: "Completed",
    },
    {
      id: "AFW123 058",
      mode: "Escrow/Card",
      provider: "Arinze Onyia",
      date: "2024/04/09 00:12:06",
      status: "In-Progress",
    },
    {
      id: "AFW123 098",
      mode: "Escrow/Bank Transfer",
      provider: "Arinze Onyia",
      date: "2024/04/09 00:12:06",
      status: "Pending",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In-Progress":
        return "bg-blue-100 text-blue-800";
      case "Pending":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(contractData.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Close menu if click is outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".relative")) {
        setOpenMenuId(null); // Close the menu if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleViewContract = () => {
    // Redirect to contractdetails page with the contract ID
    navigate(`/contractdetails`);
    setOpenMenuId(null); // Close the menu after redirect
  };

  return (
    <div className="w-full bg-white rounded-lg shadow">
      {/* Header Controls */}
      <div className="p-4 flex sm:flex-row items-center justify-between gap-4 border-b">
        <button
          className="w-full font-sans font-semibold md:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          onClick={() => setIsFilterOpen(true)}
        >
          <Calendar className="h-4 w-4" />
          Filter by
          <ChevronDown className="h-4 w-4" />
        </button>

        <button className="md:w-auto w-full bg-[#D0D5DD] text-white font-sans font-semibold flex items-center justify-center gap-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Download className="h-4 w-4 mr-2" />
          Export
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="w-12 px-6 py-3 text-left">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  onChange={handleSelectAll}
                  checked={selectedItems.length === contractData.length}
                />
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-sans text-left text-sm font-medium text-gray-500"
              >
                Work Order ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-sans text-left text-sm font-medium text-gray-500"
              >
                Mode of Transaction
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-sans text-left text-sm font-medium text-gray-500"
              >
                Service Provider
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-sans text-left text-sm font-medium text-gray-500"
              >
                Date/Time
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-sans text-left text-sm font-medium text-gray-500"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-sans text-left text-sm font-medium text-gray-500"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-50 divide-y divide-gray-200">
            {contractData.map((contract, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={selectedItems.includes(contract.id)}
                    onChange={() => handleSelectItem(contract.id)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                  {contract.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                  {contract.mode}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                  {contract.provider}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-sans">
                  {contract.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold font-sans rounded-full ${getStatusClass(
                      contract.status
                    )}`}
                  >
                    {contract.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 relative">
                  {/* MoreHorizontal Button */}
                  <button
                    className="p-1 hover:bg-gray-100 rounded-full"
                    onClick={() =>
                      setOpenMenuId(
                        openMenuId === contract.id ? null : contract.id
                      )
                    }
                  >
                    <MoreHorizontal className="h-4 w-4 text-gray-500 font-sans" />
                  </button>
                  {/* Dropdown Menu */}
                  {openMenuId === contract.id && (
                    <div className="absolute right-0 mt-1 w-24 bg-white rounded-lg shadow-lg border py-1 z-10">
                      <button
                        className="w-full text-left px-4 py-2 text-sm font-sans text-gray-700 hover:bg-gray-100"
                        onClick={() => handleViewContract(contract.id)}
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

      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}
