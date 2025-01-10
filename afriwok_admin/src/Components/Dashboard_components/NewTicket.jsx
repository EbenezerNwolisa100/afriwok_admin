import { X } from 'lucide-react'
import '../Dashboard_components/dashboard.css'

export default function NewTicketForm({ onClose }) {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold font-sans">New Ticket</h2>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
          <X className="h-4 w-4" />
        </button>
      </div>

      <hr />

      <div className='pb-32 h-screen overflow-y-auto scrollbar-hide'>
      <form className="space-y-4 mt-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 font-sans">Title</label>
          <input
            type="text"
            placeholder="Enter email here"
            className="mt-1 block w-full font-sans p-2 border rounded-md border-gray-300 shadow-sm focus:border-[#87986A] focus:ring-[#87986A]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium font-sans text-gray-700">Ticket Type</label>
          <select className="mt-1 block w-full font-sans p-2 border rounded-md border-gray-300 shadow-sm focus:border-[#87986A] focus:ring-[#87986A]">
            <option>Report</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium font-sans text-gray-700">Reason</label>
          <select className="mt-1 block w-full font-sans p-2 border rounded-md border-gray-300 shadow-sm focus:border-[#87986A] focus:ring-[#87986A]">
            <option value="">Select</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium font-sans text-gray-700">Customer Name</label>
          <input
            type="text"
            defaultValue="Onome Ugwumba"
            className="mt-1 block w-full font-sans p-2 border rounded-md border-gray-300 shadow-sm focus:border-[#87986A] focus:ring-[#87986A]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium font-sans text-gray-700">Customer Email Address</label>
          <input
            type="email"
            defaultValue="Onome Ugwumba"
            className="mt-1 block w-full font-sans p-2 border rounded-md border-gray-300 shadow-sm focus:border-[#87986A] focus:ring-[#87986A]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium font-sans text-gray-700">Customer Phone</label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center font-sans p-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
              🇳🇬 +234
            </span>
            <input
              type="tel"
              placeholder="80 0000 0000"
              className="flex-1 block w-full font-sans p-2 border rounded-none rounded-r-md border-gray-300 focus:border-[#87986A] focus:ring-[#87986A]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium font-sans text-gray-700">User</label>
          <select className="mt-1 block w-full font-sans p-2 border rounded-md border-gray-300 shadow-sm focus:border-[#87986A] focus:ring-[#87986A]">
            <option>Onome Ugwumba</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium font-sans text-gray-700">Additional Info</label>
          <textarea
            rows={4}
            placeholder="Detailed description"
            className="mt-1 block w-full font-sans p-2 border rounded-md border-gray-300 shadow-sm focus:border-[#87986A] focus:ring-[#87986A]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#87986A] text-white font-sans py-2 px-4 rounded-md hover:bg-[#758a5c] focus:outline-none focus:ring-2 focus:ring-[#87986A] focus:ring-offset-2"
        >
          Save
        </button>
      </form>
      </div>
    </div>
  )
}

