import { X } from 'lucide-react'

export function MarkForRefundForm({ onClose }) {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold font-sans">Mark for refund</h2>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <hr />

      <form className="space-y-4 mt-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 font-sans">Client</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 border p-2 focus:border-[#87986A] focus:ring-[#87986A] font-sans">
            <option>Uche ThankGod</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 font-sans">Split*</label>
          <input
            type="text"
            placeholder="70%"
            className="mt-1 block w-full rounded-md border-gray-300 border p-2 focus:border-[#87986A] focus:ring-[#87986A] font-sans"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 font-sans">Service Provider</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 border p-2 focus:border-[#87986A] focus:ring-[#87986A] font-sans">
            <option>Ebenezer Okeke</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 font-sans">Split*</label>
          <input
            type="text"
            placeholder="30%"
            className="mt-1 block w-full rounded-md border-gray-300 border p-2 focus:border-[#87986A] focus:ring-[#87986A] font-sans"
          />
        </div>

        <button
          type="submit"
          className="float-right bg-[#87986A] text-white py-2 px-4 rounded-md hover:bg-[#758a5c] focus:outline-none focus:ring-2 focus:ring-[#87986A] focus:ring-offset-2 font-sans"
        >
          Confirm
        </button>
      </form>
    </div>
  )
}

