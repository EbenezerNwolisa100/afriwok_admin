import { X } from 'lucide-react'

export default function NewNotificationForm({ onClose }) {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold font-sans">New Notification</h2>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
          <X className="h-4 w-4" />
        </button>
      </div>

      <hr />
      
      <form className="space-y-4 mt-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 font-sans">Recipient Type</label>
          <select className="mt-1 font-sans block w-full rounded-md border-gray-300 border p-2 focus:border-[#87986A] focus:ring-[#87986A]">
            <option>User</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 font-sans">Customer Email</label>
          <input
            type="email"
            defaultValue=""
            className="mt-1 block w-full font-sans border p-2 rounded-md border-gray-300 shadow-sm focus:border-[#87986A] focus:ring-[#87986A]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium font-sans text-gray-700">Subject/Title</label>
          <input
            type="text"
            placeholder="Enter Subject of Notification"
            className="mt-1 block font-sans w-full rounded-md border-gray-300 border p-2 focus:border-[#87986A] focus:ring-[#87986A]"
          />
        </div>

        <div>
          <label className="block font-sans text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows={4}
            placeholder="Enter Message here (Also HTML use text editor)"
            className="mt-1 border p-2 block font-sans w-full rounded-md border-gray-300 shadow-sm focus:border-[#87986A] focus:ring-[#87986A]"
          />
        </div>

        <button
          type="submit"
          className="float-right bg-[#87986A] font-sans text-white py-2 px-4 rounded-md hover:bg-[#758a5c] focus:outline-none focus:ring-2 focus:ring-[#87986A] focus:ring-offset-2"
        >
          Send Notification
        </button>
      </form>
    </div>
  )
}

