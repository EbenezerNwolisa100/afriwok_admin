import { X } from 'lucide-react'

export default function NewAdminForm({ onClose }) {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold font-sans">New Admin User</h2>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
          <X className="h-4 w-4" />
        </button>
      </div>
      <hr />

      <form className="space-y-4 mt-6">
        <div>
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700 font-sans">Role</label>
            <a href="#" className="text-xs text-[#87986A] font-sans">View Roles/Permissions?</a>
          </div>
          <select className="mt-1 p-2 block font-sans w-full rounded-md border-gray-300 border focus:border-[#87986A] focus:ring-[#87986A]">
            <option>Administrator</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium font-sans text-gray-700">Email Address*</label>
          <input
            type="email"
            placeholder="Enter email here"
            required
            className="mt-1 block w-full rounded-md font-sans border-gray-300 border p-2 focus:border-[#87986A] focus:ring-[#87986A]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 font-sans">First Name*</label>
          <input
            type="text"
            placeholder="Enter"
            required
            className="mt-1 font-sans p-2 block w-full rounded-md border-gray-300 border focus:border-[#87986A] focus:ring-[#87986A]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium font-sans text-gray-700">Last Name*</label>
          <input
            type="text"
            placeholder="Enter"
            required
            className="mt-1 block w-full rounded-md font-sans p-2 border-gray-300 border focus:border-[#87986A] focus:ring-[#87986A]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 font-sans">Phone Number*</label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex font-sans p-2 items-center px-3 rounded-l-md border border-r border-gray-300  text-gray-500 sm:text-sm">
              🇳🇬 +234
            </span>
            <input
              type="tel"
              placeholder="80 0000 0000"
              required
              className="flex-1 block font-sans w-full p-2 rounded-none rounded-r-md border border-gray-300 focus:border-[#87986A] focus:ring-[#87986A]"
            />
          </div>
        </div>

        <button
          type="submit"
          className="float-right bg-[#87986A] font-sans text-white py-2 px-4 rounded-md hover:bg-[#758a5c] focus:outline-none focus:ring-2 focus:ring-[#87986A] focus:ring-offset-2"
        >
          Save
        </button>
      </form>
    </div>
  )
}

