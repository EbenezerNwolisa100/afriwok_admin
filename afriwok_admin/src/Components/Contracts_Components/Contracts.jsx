import { useState } from 'react'
// import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Filter, MoreHorizontal, Download } from 'lucide-react'


export default function Contracts() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedItems, setSelectedItems] = useState([])

  const contractData = [
    {
      id: "AFW123 098",
      mode: "Escrow/Card",
      provider: "Arinze Onyia",
      date: "2024/04/09 00:12:06",
      status: "Completed"
    },
    {
      id: "AFW123 098",
      mode: "Escrow/Bank Transfer",
      provider: "Arinze Onyia",
      date: "2024/04/09 00:12:06",
      status: "Completed"
    },
    {
      id: "AFW123 098",
      mode: "Escrow/Card",
      provider: "Arinze Onyia",
      date: "2024/04/09 00:12:06",
      status: "In-Progress"
    },
    {
      id: "AFW123 098",
      mode: "Escrow/Bank Transfer",
      provider: "Arinze Onyia",
      date: "2024/04/09 00:12:06",
      status: "Pending"
    }
  ]

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'In-Progress':
        return 'bg-blue-100 text-blue-800'
      case 'Pending':
        return 'bg-gray-100 text-gray-600'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(contractData.map(item => item.id))
    } else {
      setSelectedItems([])
    }
  }

  const handleSelectItem = (id) => {
    setSelectedItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }
  
 

  return (
    <div className="w-full bg-white rounded-lg shadow">
      {/* Header Controls */}
      <div className="p-4 flex sm:flex-row items-center justify-between gap-4 border-b">
        <button className="md:w-auto w-full font-sans font-semibold flex items-center justify-center gap-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 ">
          <Filter className="h-4 w-4 mr-2" />
          Filter by
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
              <th scope="col" className="px-6 py-3 font-sans text-left text-sm font-medium text-gray-500">
                Work Order ID
              </th>
              <th scope="col" className="px-6 py-3 font-sans text-left text-sm font-medium text-gray-500">
                Mode of Transaction
              </th>
              <th scope="col" className="px-6 py-3 font-sans text-left text-sm font-medium text-gray-500">
                Service Provider
              </th>
              <th scope="col" className="px-6 py-3 font-sans text-left text-sm font-medium text-gray-500">
                Date/Time
              </th>
              <th scope="col" className="px-6 py-3 font-sans text-left text-sm font-medium text-gray-500">
                Status
              </th>
              <th scope="col" className="px-6 py-3 font-sans text-left text-sm font-medium text-gray-500">
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
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold font-sans rounded-full ${getStatusClass(contract.status)}`}>
                    {contract.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="relative">
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>
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
                      ? 'bg-gray-600 text-white'
                      : 'border hover:bg-gray-50'
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
  )
}