import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "Support",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen ">
      <div className="w-full mx-auto rounded-lg">
        {/* Tabs */}
        <div className="border-b">
          <div className="flex">
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-6 py-4 font-sans font-medium relative ${
                activeTab === "profile"
                  ? "text-[#87986A] border-b-2 border-[#87986A]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`px-6 py-4 font-sans font-medium relative ${
                activeTab === "security"
                  ? "text-[#87986A] border-b-2 border-[#87986A]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Security
            </button>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="py-6">
          {activeTab === "profile" ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-sans font-medium text-gray-700">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full font-sans py-2 px-2 border-gray-200 border rounded-md focus:border-[#87986A] focus:ring-[#87986A] sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium text-gray-700">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md p-2 border-gray-200 border font-sans focus:border-[#87986A] focus:ring-[#87986A] sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block font-sans text-sm font-medium text-gray-700">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-200 border font-sans p-2 focus:border-[#87986A] focus:ring-[#87986A] sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium text-gray-700">
                    Phone Number*
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center font-sans bg-white p-2 rounded-l-md border-gray-200 border px-3 text-gray-500 sm:text-sm">
                      +234
                    </span>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="block w-full rounded-none rounded-r-md border-gray-200 border focus:border-[#87986A] focus:ring-[#87986A] sm:text-sm"
                      required
                    />
                  </div>
                </div>
                <div className="">
                  <label className="block text-sm font-sans font-medium text-gray-700">
                    Role
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border font-sans rounded-md border-gray-200 shadow-sm focus:border-[#87986A] focus:ring-[#87986A] sm:text-sm"
                    readOnly
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 ">
                <div>
                  <label className="block text-sm font-medium font-sans text-gray-700">
                    Old Password*
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type={showOldPassword ? "text" : "password"}
                      name="oldPassword"
                      value={formData.oldPassword}
                      onChange={handleInputChange}
                      placeholder="Enter your old password"
                      className="block w-full p-2 font-sans rounded-md border-gray-300 focus:border-[#87986A] focus:ring-[#87986A] sm:text-sm pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowOldPassword(!showOldPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      {showOldPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-sans font-medium text-gray-700">
                    New Password*
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      name="newPassword"
                      value={formData.newPassword}
                      placeholder="Enter your new password"
                      onChange={handleInputChange}
                      className="block w-full rounded-md font-sans p-2 border-gray-300 focus:border-[#87986A] focus:ring-[#87986A] sm:text-sm pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      {showNewPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium text-gray-700">
                    Confirm New Password*
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your new password"
                      className="block w-full rounded-md font-sans p-2 border-gray-300 focus:border-[#87986A] focus:ring-[#87986A] sm:text-sm pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Form Actions */}
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              className="rounded-md border border-gray-300 font-sans bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#87986A] focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md border border-transparent font-sans bg-[#87986A] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#758a5c] focus:outline-none focus:ring-2 focus:ring-[#87986A] focus:ring-offset-2"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
