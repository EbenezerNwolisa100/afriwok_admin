import { useState } from "react";
import { Eye, ChevronDown, X } from "lucide-react";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function AddNewAdminUser({ isOpen, onClose }) {
  const [selectedRole, setSelectedRole] = useState("Admin");
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  if (!isOpen) return null;

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 translate-x-0">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold font-sans">New Admin User</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <hr />

        <div className="overflow-y-auto max-h-[calc(100vh-90px)]">
          <form onSubmit={(e) => e.preventDefault()} className="p-4 space-y-3">
            {/* Role selection */}
            <div className="space-y-1">
              <label className="text-sm font-medium flex font-sans justify-between">
                Role
                <button className="text-green-600 font-sans flex items-center gap-1 text-sm">
                  <Eye className="h-4 w-4" />
                  View Roles/Permissions?
                </button>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                  className="w-full px-3 py-2 text-left border rounded-md font-sans flex items-center justify-between hover:border-gray-400"
                >
                  {selectedRole}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isRoleDropdownOpen && (
                  <div className="absolute top-full left-0 w-full font-sans mt-1 border rounded-md bg-white shadow-lg z-10">
                    {["Admin", "Super-Admin", "Support"].map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => {
                          setSelectedRole(role);
                          setIsRoleDropdownOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-gray-50"
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="text-sm font-medium font-sans">
                Email Address*
              </label>
              <input
                type="email"
                required
                placeholder="Enter email here"
                className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            {/* First Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium font-sans">
                First Name*
              </label>
              <input
                type="text"
                required
                placeholder="Enter"
                className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium font-sans ">
                Last Name*
              </label>
              <input
                type="text"
                required
                placeholder="Enter"
                className="w-full px-3 py-2 border font-sans  rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label className="text-sm font-medium font-sans">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <PhoneInput
                  country="us"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  enableSearch={true}
                  inputClass="!w-full !pl-10 !pr-3 !py-2 !border !rounded-md !focus:outline-none !focus:ring-2 !focus:ring-green-600 !focus:border-transparent font-sans"
                  containerClass="!w-full"
                  buttonClass="!absolute !left-0 !top-0 !h-full !bg-gray-200 !rounded-l-md"
                  dropdownClass="!font-sans"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            {/* Status */}
            <div className="space-y-2">
              <label className="text-sm font-medium font-sans">Status</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                  className="w-full px-3 py-2 text-left border font-sans rounded-md flex items-center justify-between hover:border-gray-400"
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
                        className="w-full px-3 py-2 font-sans text-left hover:bg-gray-50"
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
              className="float-right px-4 py-2 font-sans bg-[#8B9467] text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

AddNewAdminUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
