// import { useState } from "react";
// import { Eye, ChevronDown, X } from "lucide-react";
// import PropTypes from "prop-types";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// export default function AddNewAdminUser({ isOpen, onClose }) {
//   const [selectedRole, setSelectedRole] = useState("Admin");
//   const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
//   const [selectedStatus, setSelectedStatus] = useState("Active");
//   const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");

//   if (!isOpen) return null;

//   const handlePhoneChange = (value) => {
//     setPhoneNumber(value);
//   };

//   return (
//     <>
//       <div
//         className="fixed inset-0 bg-black bg-opacity-50 z-40"
//         onClick={onClose}
//       />
//       <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 translate-x-0">
//         <div className="flex justify-between items-center border-b p-4">
//           <h2 className="text-lg font-semibold font-sans">New Admin User</h2>
//           <button
//             onClick={onClose}
//             className="p-1 hover:bg-gray-100 rounded-full"
//           >
//             <X className="h-4 w-4" />
//           </button>
//         </div>

//         <hr />

//         <div className="overflow-y-auto max-h-[calc(100vh-90px)]">
//           <form onSubmit={(e) => e.preventDefault()} className="p-4 space-y-3">
//             {/* Role selection */}
//             <div className="space-y-1">
//               <label className="text-sm font-medium flex font-sans justify-between">
//                 Role
//                 <button className="text-green-600 font-sans flex items-center gap-1 text-sm">
//                   <Eye className="h-4 w-4" />
//                   View Roles/Permissions?
//                 </button>
//               </label>
//               <div className="relative">
//                 <button
//                   type="button"
//                   onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
//                   className="w-full px-3 py-2 text-left border rounded-md font-sans flex items-center justify-between hover:border-gray-400"
//                 >
//                   {selectedRole}
//                   <ChevronDown className="h-4 w-4" />
//                 </button>
//                 {isRoleDropdownOpen && (
//                   <div className="absolute top-full left-0 w-full font-sans mt-1 border rounded-md bg-white shadow-lg z-10">
//                     {["Admin", "Super-Admin", "Support"].map((role) => (
//                       <button
//                         key={role}
//                         type="button"
//                         onClick={() => {
//                           setSelectedRole(role);
//                           setIsRoleDropdownOpen(false);
//                         }}
//                         className="w-full px-3 py-2 text-left hover:bg-gray-50"
//                       >
//                         {role}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Email Address */}
//             <div className="space-y-1">
//               <label className="text-sm font-medium font-sans">
//                 Email Address*
//               </label>
//               <input
//                 type="email"
//                 required
//                 placeholder="Enter email here"
//                 className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
//               />
//             </div>

//             {/* First Name */}
//             <div className="space-y-2">
//               <label className="text-sm font-medium font-sans">
//                 First Name*
//               </label>
//               <input
//                 type="text"
//                 required
//                 placeholder="Enter"
//                 className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
//               />
//             </div>

//             {/* Last Name */}
//             <div className="space-y-2">
//               <label className="text-sm font-medium font-sans ">
//                 Last Name*
//               </label>
//               <input
//                 type="text"
//                 required
//                 placeholder="Enter"
//                 className="w-full px-3 py-2 border font-sans  rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
//               />
//             </div>

//             {/* Phone Number */}
//             <div className="space-y-2">
//               <label className="text-sm font-medium font-sans">
//                 Phone Number<span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <PhoneInput
//                   country="ng"
//                   value={phoneNumber}
//                   onChange={handlePhoneChange}
//                   enableSearch={true}
//                   inputClass="!w-full !pl-10 !pr-3 !py-4 !border !rounded-md !focus:outline-none !focus:ring-2 !focus:ring-green-600 !focus:border-transparent font-sans"
//                   containerClass="!w-full"
//                   buttonClass="!absolute !left-0 !top-0 !h-full !bg-gray-200 !rounded-l-md"
//                   dropdownClass="!font-sans"
//                   placeholder="Enter phone number"
//                 />
//               </div>
//             </div>
//             {/* Status */}
//             <div className="space-y-2">
//               <label className="text-sm font-medium font-sans">Status</label>
//               <div className="relative">
//                 <button
//                   type="button"
//                   onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
//                   className="w-full px-3 py-2 text-left border font-sans rounded-md flex items-center justify-between hover:border-gray-400"
//                 >
//                   {selectedStatus}
//                   <ChevronDown className="h-4 w-4" />
//                 </button>
//                 {isStatusDropdownOpen && (
//                   <div className="absolute top-full left-0 font-sans w-full mt-1 border rounded-md bg-white shadow-lg z-10">
//                     {["Active", "Inactive"].map((status) => (
//                       <button
//                         key={status}
//                         type="button"
//                         onClick={() => {
//                           setSelectedStatus(status);
//                           setIsStatusDropdownOpen(false);
//                         }}
//                         className="w-full px-3 py-2 font-sans text-left hover:bg-gray-50"
//                       >
//                         {status}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="float-right px-4 py-2 font-sans bg-[#8B9467] text-white rounded-md hover:bg-green-700 transition-colors"
//             >
//               Save
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// AddNewAdminUser.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };










// import { useState } from "react";
// import axios from "axios";
// import { ChevronDown, X } from "lucide-react";
// import PropTypes from "prop-types";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// export default function AddNewAdminUser({ isOpen, onClose }) {
//   const [selectedRole, setSelectedRole] = useState("Admin");
//   const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   if (!isOpen) return null;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem("authToken"); // Retrieve token from localStorage
//       if (!token) {
//         throw new Error("Authentication token is missing. Please log in again.");
//       }

//       const response = await axios.post(
//         "https://admin.dev.afriwok.ng/api/v1/admin/manage-users/add-admin",
//         {
//           first_name: firstName,
//           last_name: lastName,
//           email,
//           phone: phoneNumber,
//           role: selectedRole.toLowerCase(), // Ensure the role is in the expected format
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
//           },
//         }
//       );

//       console.log("Admin user added successfully:", response.data);
//       alert("Admin user added successfully!");
//       // Optionally clear the form after submission
//       setFirstName("");
//       setLastName("");
//       setEmail("");
//       setPhoneNumber("");
//       setSelectedRole("Admin");
//     } catch (err) {
//       console.error("Failed to add admin user:", err.response?.data || err.message);
//       setError(err.response?.data?.message || "An error occurred. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <div
//         className="fixed inset-0 bg-black bg-opacity-50 z-40"
//         onClick={onClose}
//       />
//       <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 translate-x-0">
//         <div className="flex justify-between items-center border-b p-4">
//           <h2 className="text-lg font-semibold font-sans">New Admin User</h2>
//           <button
//             onClick={onClose}
//             className="p-1 hover:bg-gray-100 rounded-full"
//           >
//             <X className="h-4 w-4" />
//           </button>
//         </div>

//         <hr />

//         <div className="overflow-y-auto max-h-[calc(100vh-90px)]">
//           <form onSubmit={handleSubmit} className="p-4 space-y-3">
//             {/* Role selection */}
//             <div className="space-y-1">
//               <label className="text-sm font-medium flex font-sans justify-between">
//                 Role
//               </label>
//               <div className="relative">
//                 <button
//                   type="button"
//                   onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
//                   className="w-full px-3 py-2 text-left border rounded-md font-sans flex items-center justify-between hover:border-gray-400"
//                 >
//                   {selectedRole}
//                   <ChevronDown className="h-4 w-4" />
//                 </button>
//                 {isRoleDropdownOpen && (
//                   <div className="absolute top-full left-0 w-full font-sans mt-1 border rounded-md bg-white shadow-lg z-10">
//                     {["Admin", "Super-Admin", "Support"].map((role) => (
//                       <button
//                         key={role}
//                         type="button"
//                         onClick={() => {
//                           setSelectedRole(role);
//                           setIsRoleDropdownOpen(false);
//                         }}
//                         className="w-full px-3 py-2 text-left hover:bg-gray-50"
//                       >
//                         {role}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* First Name */}
//             <div className="space-y-2">
//               <label className="text-sm font-medium font-sans">
//                 First Name*
//               </label>
//               <input
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 placeholder="Enter first name"
//                 className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
//               />
//             </div>

//             {/* Last Name */}
//             <div className="space-y-2">
//               <label className="text-sm font-medium font-sans">
//                 Last Name*
//               </label>
//               <input
//                 type="text"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 placeholder="Enter last name"
//                 className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
//               />
//             </div>

//             {/* Email Address */}
//             <div className="space-y-1">
//               <label className="text-sm font-medium font-sans">
//                 Email Address*
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter email here"
//                 className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
//               />
//             </div>

//             {/* Phone Number */}
//             <div className="space-y-2">
//               <label className="text-sm font-medium font-sans">
//                 Phone Number<span className="text-red-500">*</span>
//               </label>
//               <PhoneInput
//                 country="ng"
//                 value={phoneNumber}
//                 onChange={setPhoneNumber}
//                 enableSearch={true}
//                 inputClass="!w-full !pl-10 !pr-3 !py-4 !border !rounded-md !focus:outline-none !focus:ring-2 !focus:ring-green-600 !focus:border-transparent font-sans"
//                 containerClass="!w-full"
//                 buttonClass="!absolute !left-0 !top-0 !h-full !bg-gray-200 !rounded-l-md"
//                 dropdownClass="!font-sans"
//                 placeholder="Enter phone number"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className={`float-right px-4 py-2 font-sans bg-[#8B9467] text-white rounded-md hover:bg-green-700 transition-colors ${
//                 isLoading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//               disabled={isLoading}
//             >
//               {isLoading ? "Saving..." : "Save"}
//             </button>

//             {/* Error Message */}
//             {error && (
//               <div className="text-red-500 text-sm mt-2">
//                 {error}
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// AddNewAdminUser.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };








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

