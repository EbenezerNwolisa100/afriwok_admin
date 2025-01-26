import { useState, useEffect } from "react"
import axios from "axios"
import { ChevronDown, X } from "lucide-react"
import PropTypes from "prop-types"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

export default function AddNewAdminUser({ isOpen, onClose }) {
  const [selectedRole, setSelectedRole] = useState("Admin")
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [roles, setRoles] = useState([])
  const [successMessage, setSuccessMessage] = useState("")

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const token = localStorage.getItem("authToken")
        if (!token) {
          throw new Error("Authentication token is missing. Please log in again.")
        }

        const response = await axios.get("https://admin.dev.afriwok.ng/api/v1/admin/manage-users/list-roles", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        setRoles(response.data.data)
      } catch (err) {
        console.error("Failed to fetch roles:", err)
        setError("Failed to fetch roles. Please try again.")
      }
    }

    fetchRoles()
  }, [])

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setSuccessMessage("")

    try {
      const token = localStorage.getItem("authToken")
      if (!token) {
        throw new Error("Authentication token is missing. Please log in again.")
      }

      const response = await axios.post(
        "https://admin.dev.afriwok.ng/api/v1/admin/manage-users/add-admin",
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone: phoneNumber,
          role: roles.find((r) => r.label === selectedRole)?.role || "admin",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      )

      console.log("Admin user added successfully:", response.data)
      setSuccessMessage("Admin user added successfully!")
      // Reset the form
      setFirstName("")
      setLastName("")
      setEmail("")
      setPhoneNumber("")
      setSelectedRole("Admin")
    } catch (err) {
      console.error("Failed to add admin user:", err.response?.data || err.message)
      if (err.response?.data?.errors) {
        const errorMessages = Object.entries(err.response.data.errors)
          .map(([field, errors]) => `${field}: ${errors.join(", ")}`)
          .join("; ")
        setError(errorMessages)
      } else {
        setError(err.response?.data?.message || "An error occurred. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 translate-x-0">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold font-sans">New Admin User</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="h-4 w-4" />
          </button>
        </div>

        <hr />

        <div className="overflow-y-auto max-h-[calc(100vh-90px)]">
          <form onSubmit={handleSubmit} className="p-4 space-y-3">
            {/* Role selection */}
            <div className="space-y-1">
              <label className="text-sm font-medium flex font-sans justify-between">Role</label>
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
                    {roles.map((role) => (
                      <button
                        key={role.role}
                        type="button"
                        onClick={() => {
                          setSelectedRole(role.label)
                          setIsRoleDropdownOpen(false)
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-gray-50"
                      >
                        {role.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* First Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium font-sans">First Name*</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter first name"
                className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium font-sans">Last Name*</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter last name"
                className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="text-sm font-medium font-sans">Email Address*</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email here"
                className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label className="text-sm font-medium font-sans">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <PhoneInput
                country="ng"
                value={phoneNumber}
                onChange={setPhoneNumber}
                enableSearch={true}
                inputClass="!w-full !pl-10 !pr-3 !py-4 !border !rounded-md !focus:outline-none !focus:ring-2 !focus:ring-green-600 !focus:border-transparent font-sans"
                containerClass="!w-full"
                buttonClass="!absolute !left-0 !top-0 !h-full !bg-gray-200 !rounded-l-md"
                dropdownClass="!font-sans"
                placeholder="Enter phone number"
              />
            </div>

            {/* Error message */}
            {error && (
              <div className="text-red-500 text-sm mt-2 mb-4 font-sans">
                {error.split("; ").map((errMsg, index) => (
                  <div key={index}>{errMsg.replace(/first_name|last_name|email|phone|role/g, "")}</div>
                ))}
              </div>
            )}

            {/* Success message */}
            {successMessage && <div className="text-green-500 text-sm font-sans mt-2 mb-4">{successMessage}</div>}

            {/* Submit Button */}
            <button
              type="submit"
              className={`float-right px-4 py-2 font-sans bg-[#8B9467] text-white rounded-md hover:bg-green-700 transition-colors ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

AddNewAdminUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

