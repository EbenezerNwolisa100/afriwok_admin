import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

export default function AddNewRole({ isOpen, onClose }) {
  const [selectedPermission, setSelectedPermission] = useState("");
  const [isPermissionDropdownOpen, setIsPermissionDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 translate-x-0">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold font-sans">New Role</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="p-4 space-y-3">
          <div className="space-y-2">
            <label className="text-sm font-medium font-sans">Role Name*</label>
            <input
              type="text"
              required
              placeholder="Enter role name"
              className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium font-sans">Permission</label>
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setIsPermissionDropdownOpen(!isPermissionDropdownOpen)
                }
                className="w-full px-3 py-2 text-left font-sans border rounded-md flex items-center justify-between hover:border-gray-400"
              >
                {selectedPermission || "select permissions"}
                <ChevronDown className="h-4 w-4" />
              </button>
              {isPermissionDropdownOpen && (
                <div className="absolute top-full font-sans left-0 w-full mt-1 border rounded-md bg-white shadow-lg z-10">
                  {["View Only", "Edit", "Full Access"].map((permission) => (
                    <button
                      key={permission}
                      type="button"
                      onClick={() => {
                        setSelectedPermission(permission);
                        setIsPermissionDropdownOpen(false);
                      }}
                      className="w-full px-3 font-sans py-2 text-left hover:bg-gray-50"
                    >
                      {permission}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium font-sans">Status</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                className="w-full px-3 py-2 text-left font-sans border rounded-md flex items-center justify-between hover:border-gray-400"
              >
                {selectedStatus}
                <ChevronDown className="h-4 w-4" />
              </button>
              {isStatusDropdownOpen && (
                <div className="absolute top-full left-0 font-sans w-full mt-1 border rounded-md bg-white shadow-lg z-10">
                  {["Active", "Inactive"].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => {
                        setSelectedStatus(status);
                        setIsStatusDropdownOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left font-sans hover:bg-gray-50"
                    >
                      {status}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="float-right px-4 py-2 bg-[#8B9467] font-sans text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}

