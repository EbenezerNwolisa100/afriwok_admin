import { useState } from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import DP from "../../assets/Images/DP.svg";
import ProfilePic from "../../assets/Images/ProfilePic.svg";
import Details from "../../assets/Images/Details.svg";
import WorkEvidence from "../../assets/Images/WorkEvidence.svg";
import { MarkForRefundForm } from "../../Components/Contracts_Components/MarkUnreadForm";
import { SuspendWokForm } from "../../Components/Contracts_Components/SuspendForm";

const WokPost = () => {
  const [activeTab, setActiveTab] = useState("Completed");
  const [isRefundOpen, setIsRefundOpen] = useState(false);
  const [isSuspendOpen, setIsSuspendOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Mock data
  const contractData = {
    id: "AFW123 098",
    status: {
      text: "Active 2 Days ago",
      isActive: true,
    },
    company: {
      name: "De Youngs Enterprise",
      image: "/placeholder.svg",
    },
    title: "Painter Needed urgently",
    jobUrl: "#fwork/0410...",
    previewImage: "/placeholder.svg",
    location: {
      place: "Enugu, Nigeria",
      currency: "NGN",
    },
    budget: "N 300,000",
    description:
      "Looking for a Plumber to work on a drainage system with square size of 2sqm for two different buildings",
    duration: "24 Hours (1 day)",
    category: "Tiler",
    serviceProvider: {
      name: "Uche ThankGod",
      id: "4FW020",
      image: "/placeholder.svg",
    },
    history: [
      {
        date: "2024/04/09 00:12:06",
        action: "You rated service provider",
      },
      {
        date: "2024/04/09 00:12:06",
        action: "You tipped Service provider with 20 WOKs token",
      },
      {
        date: "2024/04/09 00:12:06",
        action: "You approved wok order",
      },
      {
        date: "2024/04/09 00:12:06",
        action: "Service Provider marked work order as completed",
      },
      {
        date: "2024/04/09 00:12:06",
        action: "Service Provider Started work order",
      },
      {
        date: "2024/04/09 00:12:06",
        action: "WOK order was acknowledge by Service Provider",
      },
      {
        date: "2024/04/09 00:12:06",
        action:
          "You initiated a wok order deposit of N200,000.00 to escrow wallet",
      },
    ],
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <button
        className="mb-3 font-semibold font-sans flex bg-white border-gray-400 border items-center gap-1 rounded px-4 py-2"
        onClick={handleBack}
      >
        <ArrowLeft className="h-5 w-5" />
        Back
      </button>
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-sans font-semibold">
                  #{contractData.id}
                </h1>
              </div>
              <div className="flex space-x-3">
                <button 
                onClick={() => setIsRefundOpen(true)}
                className="px-4 py-2 text-sm font-sans font-medium bg-[#D0D5DD] text-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  Delist
                </button>
                <button 
                onClick={() => setIsSuspendOpen(true)}
                className="px-4 py-2 text-sm font-sans font-medium bg-[#D0D5DD] text-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  Suspend User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-5">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left Column - Job Details */}
          <div className="w-full lg:w-2/5 space-y-6">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                {/* Status */}
                <div className="flex items-center space-x-2 mb-6">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      contractData.status.isActive
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                  />
                  <span className="text-sm text-gray-600 font-sans">
                    {contractData.status.text}
                  </span>
                </div>

                {/* Company Info */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      // src={contractData.company.image}
                      src={ProfilePic}
                      alt={contractData.company.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium underline font-sans">
                      {contractData.company.name}
                    </h3>
                  </div>
                </div>

                {/* Job Title */}
                <h2 className="text-xl font-semibold mb-6 font-sans">
                  {contractData.title}
                </h2>

                {/* Job URL */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2 font-sans">
                    Copy or Share Job url preview:
                  </p>
                  <div className="bg-gray-100 p-2 rounded-md text-sm font-sans">
                    {contractData.jobUrl}
                  </div>
                </div>

                {/* Preview Image */}
                <div className="mb-6">
                  <img
                    // src={contractData.previewImage}
                    src={Details}
                    alt="Job Preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                {/* Job Details */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-sans">Location</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-sans">
                        {contractData.location.place}
                      </span>
                      <span className="bg-gray-200 px-2 py-1 rounded text-xs font-sans">
                        {contractData.location.currency}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 font-sans">
                      Job description
                    </h4>
                    <p className="text-sm text-gray-600 font-sans">
                      {contractData.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 font-sans">Duration</h4>
                    <p className="text-sm text-gray-600 font-sans">
                      {contractData.duration}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 font-sans">
                      Category/Skills
                    </h4>
                    <p className="text-sm text-gray-600 font-sans">
                      {contractData.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tabs */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow">
              {/* Tabs */}
              <div className="border-b">
                <div className="flex">
                  {["Active", "Completed", "Suspended"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-sm font-medium font-sans relative ${
                        activeTab === tab
                          ? "text-[#87986A] border-b-2 border-[#87986A] font-sans"
                          : "text-gray-500 hover:text-gray-700 font-sans"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "Active" && (
                  <div className="flex sm:items-center items-left gap-2 flex-col sm:flex-row justify-between ">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          // src={contractData.serviceProvider.image}
                          src={DP}
                          alt={contractData.serviceProvider.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium underline font-sans">
                          {contractData.serviceProvider.name}
                        </h3>
                        <p className="text-sm text-gray-500 font-sans">
                          {contractData.serviceProvider.id}
                        </p>
                      </div>
                    </div>
                    
                    <>
                      <button
                        className="flex font-sans border p-2 rounded items-center text-normal text-gray-600 hover:text-gray-400"
                        onClick={() => setIsPopupOpen(true)}
                      >
                        View WOK details
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </button>

                      {isPopupOpen && (
                        <div className="fixed inset-0 flex items-center justify-center z-50 mx-3">
                          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsPopupOpen(false)}></div>
                          <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
                            <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold mb-4 font-sans">WOK Details</h3>
                              <button
                              className="text-gray-600 font-sans hover:text-gray-800"
                              onClick={() => setIsPopupOpen(false)}
                              >
                                &times;
                              </button>
                            </div>
                            <div className="space-y-4">
                              <img src={WorkEvidence} alt="Image 1" className="w-full h-auto object-cover rounded-lg" />
                              <img src={WorkEvidence} alt="Image 2" className="w-full h-auto object-cover rounded-lg" />
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  </div>
                )}

                {activeTab === "WOK History" && (
                  <div className="space-y-6">
                    {contractData.history.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-2 h-2 mt-2 bg-gray-300 rounded-full" />
                        <div>
                          <p className="text-sm text-gray-600 font-sans">
                            {item.date}
                          </p>
                          <p className="text-sm font-sans">{item.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "Ticket" && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 font-sans">
                      No Ticket created under this WOK
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mark for Refund Drawer */}
      {isRefundOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsRefundOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
          isRefundOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {isRefundOpen && <MarkForRefundForm onClose={() => setIsRefundOpen(false)} />}
      </div>

      {/* Suspend Wok Drawer */}
      {isSuspendOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSuspendOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
          isSuspendOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {isSuspendOpen && <SuspendWokForm onClose={() => setIsSuspendOpen(false)} />}
      </div>
    </div>
  );
};

export default WokPost;
