import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function NewTicketForm() {
  const [ticketType, setTicketType] = useState('Report')
  const [reason, setReason] = useState('')

  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Enter email here"
        />
      </div>

      <div>
        <label htmlFor="ticketType" className="block text-sm font-medium text-gray-700">Ticket Type</label>
        <div className="mt-1 relative">
          <select
            id="ticketType"
            value={ticketType}
            onChange={(e) => setTicketType(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 appearance-none"
          >
            <option>Report</option>
            <option>Issue</option>
            <option>Request</option>
          </select>
          <ChevronDown className="absolute right-2 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason</label>
        <div className="mt-1 relative">
          <select
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 appearance-none"
          >
            <option value="">Select</option>
            <option value="account">Account Issues</option>
            <option value="payment">Payment Problems</option>
            <option value="technical">Technical Difficulties</option>
          </select>
          <ChevronDown className="absolute right-2 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      <div>
        <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Customer name</label>
        <input
          type="text"
          id="customerName"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          defaultValue="Onome Ugwumba"
        />
      </div>

      <div>
        <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700">Customer Email address</label>
        <input
          type="email"
          id="customerEmail"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          defaultValue="Onome Ugwumba"
        />
      </div>

      <div>
        <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700">Customer Phone</label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            🇳🇬 +234
          </span>
          <input
            type="tel"
            id="customerPhone"
            className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="80 0000 0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="user" className="block text-sm font-medium text-gray-700">User</label>
        <div className="mt-1 relative">
          <select
            id="user"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 appearance-none"
          >
            <option>Onome Ugwumba</option>
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
          Create Ticket
        </button>
      </div>
    </form>
  )
}

