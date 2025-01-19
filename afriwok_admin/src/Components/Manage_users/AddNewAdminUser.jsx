// import { useState } from 'react';
// import { Eye, ChevronDown, X } from 'lucide-react';
// import PropTypes from 'prop-types';

// export default function AddNewAdminUser({ isOpen, onClose }) {
//   const [selectedRole, setSelectedRole] = useState("Administrator");
//   const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
//   const [selectedStatus, setSelectedStatus] = useState("Active");
//   const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
//   const [phoneCode, setPhoneCode] = useState("+234");

//   if (!isOpen) return null;

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
//                     {["Administrator", "Super Admin", "User"].map((role) => (
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
//               <label className="text-sm font-medium font-sans ">
//                 Phone Number*
//               </label>
//               <div className="flex gap-2">
//                 <select
//                   value={phoneCode}
//                   onChange={(e) => setPhoneCode(e.target.value)}
//                   className="px-3 py-2 border rounded-md font-sans focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
//                 >
//                   <option className="font-sans" value="+234">
//                     +234
//                   </option>
//                   <option className="font-sans" value="+1">
//                     +1
//                   </option>
//                   <option className="font-sans" value="+44">
//                     +44
//                   </option>
//                 </select>
//                 <input
//                   type="tel"
//                   required
//                   placeholder="80 0000 0000"
//                   className="flex-1 px-3 py-2 font-sans border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
// import { Eye, ChevronDown, X } from "lucide-react";
// import PropTypes from "prop-types";
// import axios from "axios";

// export default function AddNewAdminUser({ isOpen, onClose }) {
//   const [selectedRole, setSelectedRole] = useState("Administrator");
//   const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
//   const [selectedStatus, setSelectedStatus] = useState("Active");
//   const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
//   const [phoneCode, setPhoneCode] = useState("+234");
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   if (!isOpen) return null;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     const data = {
//       first_name: formData.firstName,
//       last_name: formData.lastName,
//       email: formData.email,
//       phone: `${phoneCode}${formData.phoneNumber}`,
//       role: selectedRole,
//       status: selectedStatus,
//     };

//     try {
//       setIsLoading(true); // Set loading state before making the API request

//       const token = localStorage.getItem("authToken"); // Get token dynamically
//       const response = await axios.post(
//         "http://dummyapi.example/manage-users/add-admin",
//         data,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`, 
//           },
//         }
//       );

//       console.log("Admin User Added:", response.data);
//       onClose(); // Call onClose only on success
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       setError(
//         err.response?.data?.message || err.message || "An error occurred"
//       );
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
//                     {["Administrator", "Super Admin", "User"].map((role) => (
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
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleInputChange}
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
//                 name="firstName"
//                 required
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 placeholder="Enter"
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
//                 name="lastName"
//                 required
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 placeholder="Enter"
//                 className="w-full px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
//               />
//             </div>

//             {/* Phone Number */}
//             <div className="space-y-2">
//               <label className="text-sm font-medium font-sans">
//                 Phone Number*
//               </label>
//               <div className="flex gap-2">
//                 <select
//                   value={phoneCode}
//                   onChange={(e) => setPhoneCode(e.target.value)}
//                   className="px-3 py-2 border rounded-md font-sans focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
//                 >
//                   <option value="+234">+234</option>
//                   <option value="+1">+1</option>
//                   <option value="+44">+44</option>
//                 </select>
//                 <input
//                   type="tel"
//                   name="phoneNumber"
//                   required
//                   value={formData.phoneNumber}
//                   onChange={handleInputChange}
//                   placeholder="80 0000 0000"
//                   className="flex-1 px-3 py-2 border font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
//                         className="w-full px-3 py-2 text-left hover:bg-gray-50"
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
//               disabled={isLoading}
//               className="float-right px-4 py-2 bg-[#8B9467] text-white rounded-md hover:bg-green-700 transition-colors"
//             >
//               {isLoading ? "Saving..." : "Save"}
//             </button>

//             {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
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









import { useState } from "react";
import { Eye, ChevronDown, X } from "lucide-react";
import PropTypes from "prop-types";

export default function AddNewAdminUser({ isOpen, onClose }) {
  const [selectedRole, setSelectedRole] = useState("Administrator");
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [phoneCode, setPhoneCode] = useState("+234");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Return early pattern should be after hooks
  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.phoneNumber.match(/^\d{10}$/)) {
      setError("Please enter a valid 10-digit phone number");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setError(null);

    const data = {
      first_name: formData.firstName.trim(),
      last_name: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: `${phoneCode}${formData.phoneNumber}`,
      role: selectedRole,
      status: selectedStatus,
    };

    try {
      setIsLoading(true);

      // Get token from secure storage
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("Authentication token not found");
      }

      const response = await fetch(
        `http://dummyapi.example/manage-users/add-admin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add admin user");
      }

      const result = await response.json();
      onClose();
      return result;
    } catch (err) {
      setError(err.message || "An error occurred while adding the admin user");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 modal-overlay"
        onClick={handleClickOutside}
      />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold">New Admin User</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-90px)]">
          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex justify-between">
                Role
                <button 
                  type="button" 
                  className="text-green-600 flex items-center gap-1 text-sm"
                >
                  <Eye className="h-4 w-4" />
                  View Roles/Permissions?
                </button>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                  className="w-full px-3 py-2 text-left border rounded-md flex items-center justify-between hover:border-gray-400"
                >
                  {selectedRole}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isRoleDropdownOpen && (
                  <div className="absolute top-full left-0 w-full mt-1 border rounded-md bg-white shadow-lg z-10">
                    {["Administrator", "Super Admin", "User"].map((role) => (
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

            {["email", "firstName", "lastName"].map((field) => (
              <div key={field} className="space-y-1">
                <label className="text-sm font-medium block">
                  {field === "email" 
                    ? "Email Address*" 
                    : field === "firstName"
                    ? "First Name*"
                    : "Last Name*"
                  }
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleInputChange}
                  placeholder={field === "email" ? "Enter email here" : "Enter"}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
            ))}

            <div className="space-y-1">
              <label className="text-sm font-medium block">
                Phone Number*
              </label>
              <div className="flex gap-2">
                <select
                  value={phoneCode}
                  onChange={(e) => setPhoneCode(e.target.value)}
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                >
                  <option value="+234">+234</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="80 0000 0000"
                  className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium block">Status</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                  className="w-full px-3 py-2 text-left border rounded-md flex items-center justify-between hover:border-gray-400"
                >
                  {selectedStatus}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isStatusDropdownOpen && (
                  <div className="absolute top-full left-0 w-full mt-1 border rounded-md bg-white shadow-lg z-10">
                    {["Active", "Inactive"].map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => {
                          setSelectedStatus(status);
                          setIsStatusDropdownOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-gray-50"
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {error && (
              <div role="alert" className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 border border-red-200">
                {error}
              </div>
            )}

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-[#8B9467] text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
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