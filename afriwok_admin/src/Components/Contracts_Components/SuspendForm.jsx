import { X } from 'lucide-react'

export function SuspendWokForm({ onClose }) {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold font-sans">Suspend Wok</h2>
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
          <label className="block text-sm font-medium text-gray-700 font-sans">Reason for Suspension</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 border p-2 focus:border-[#87986A] focus:ring-[#87986A] font-sans">
            <option>Inability to complete project</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 font-sans">Mitigations*</label>
          <input
            type="text"
            placeholder="Enter"
            className="mt-1 block w-full rounded-md p-2 border-gray-300 border focus:border-[#87986A] focus:ring-[#87986A] font-sans"
          />
        </div>

        <button
          type="submit"
          className="float-right bg-[#87986A] text-white py-2 px-4 rounded-md hover:bg-[#758a5c] focus:outline-none focus:ring-2 focus:ring-[#87986A] focus:ring-offset-2 font-sans"
        >
          Suspend
        </button>
      </form>
    </div>
  )
}

