import { ChevronDown } from 'lucide-react'

export default function AssignTicketForm() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="ticketId" className="block text-sm font-medium text-gray-700">Ticket ID</label>
        <input
          type="text"
          id="ticketId"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          defaultValue="TX123 098"
          readOnly
        />
      </div>

      <div>
        <label htmlFor="ticketOwner" className="block text-sm font-medium text-gray-700">Ticket Owner</label>
        <div className="mt-1 relative">
          <select
            id="ticketOwner"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 appearance-none"
          >
            <option>Select admin/staff</option>
          </select>
          <ChevronDown className="absolute right-2 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      <div>
        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Additional info*</label>
        <textarea
          id="additionalInfo"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Detailed description"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Assign Ticket
        </button>
      </div>
    </form>
  )
}

