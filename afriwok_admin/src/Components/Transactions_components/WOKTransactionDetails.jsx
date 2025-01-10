import { useState } from 'react'
import { X, ArrowUp } from 'lucide-react'

export default function TransactionPopup() {
  const [isOpen, setIsOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('details')

  const handleClose = () => setIsOpen(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Transaction Details</h2>
          <button 
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Job Post Section */}
        <div className="p-4 flex items-start gap-3 border-b">
          <div className="p-2 bg-gray-100 rounded">
            <ArrowUp className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Job Post</h3>
                <p className="text-sm text-gray-500">Jan 29, 2024 21:00</p>
              </div>
              <div className="text-right">
                <p className="font-medium">N20,000.00</p>
                <p className="text-sm text-gray-500">Debit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'details'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Details
          </button>
          <button
            onClick={() => setActiveTab('updates')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'updates'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Updates
          </button>
        </div>

        {/* Transaction Details */}
        {activeTab === 'details' && (
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Transaction ID</p>
                <p className="font-mono text-sm">DE832223874491N587</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="text-green-500 text-sm">Successful</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Transaction date</p>
                <p className="text-sm">Jan 29, 2024 21:00</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Recipient</p>
                <p className="text-sm">Escrow</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Transaction Type</p>
                <p className="text-sm">Work Order</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Work Order ID</p>
                <p className="text-sm font-mono">#FX77N</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Amount</p>
                <p className="text-sm">N50,000.00</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">VAT</p>
                <p className="text-sm">10000</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Work Commission</p>
                <p className="text-sm">12000</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Mode of Transaction</p>
                <p className="text-sm">Bank Transfer</p>
              </div>
            </div>

            <button 
              className="w-full bg-[#94A3B8] text-white py-2 px-4 rounded-md hover:bg-[#64748B] transition-colors mt-6"
            >
              Download Receipt
            </button>
          </div>
        )}

        {/* Updates Tab Content */}
        {activeTab === 'updates' && (
          <div className="p-4">
            <p className="text-gray-500 text-sm">No updates available</p>
          </div>
        )}
      </div>
    </div>
  )
}

