import { useState } from "react";
// import { ArrowLeft, ChevronRight } from "lucide-react";
// import DP from "../../assets/Images/DP.svg";
import ProfilePic from "../../assets/Images/ProfilePic.svg";
import { MarkForRefundForm } from "../../Components/Contracts_Components/MarkUnreadForm";
import { SuspendWokForm } from "../../Components/Contracts_Components/SuspendForm";
import { ArrowLeft } from "lucide-react";

const TicketDetails = () => {
  const [activeTab, setActiveTab] = useState("Comments");
  const [isRefundOpen, setIsRefundOpen] = useState(false);
  const [isSuspendOpen, setIsSuspendOpen] = useState(false);

  const comments = [
    {
      id: 1,
      user: "Bruce jane",
      initials: "BR",
      timeAgo: "1 hrs ago",
      content:
        "Lorem ipsum dolor sit amet consectetur. Pretium fermentum ut quisque leo lorem ut quis. Tempus bibendum habitant neque augue est morbi est. Sed ultricies montes scelerisque accumsan",
    },
    {
      id: 2,
      user: "Cynthia",
      initials: "CY",
      timeAgo: "2 hrs ago",
      content:
        "Lorem ipsum dolor sit amet consectetur. Pretium fermentum ut quisque leo lorem ut quis. Tempus bibendum habitant neque augue est morbi est. Sed ultricies montes scelerisque accumsan",
    },
    {
      id: 3,
      user: "Jason",
      initials: "JS",
      timeAgo: "3 hrs ago",
      content:
        "Lorem ipsum dolor sit amet consectetur. Pretium fermentum ut quisque leo lorem ut quis. Tempus bibendum habitant neque augue est morbi est. Sed ultricies montes scelerisque accumsan",
    },
  ];

  // Mock data
  const contractData = {
    id: "#TX123 098 - Unable to Create Wok Order",
    status: {
      text: "Created 2 Days aAgo",
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
        action: "Jason closed ticket",
      },
      {
        date: "2024/04/09 00:12:06",
        action: "Jason closed ticket",
      },
      {
        date: "2024/04/09 00:12:06",
        action: "Jason closed ticket",
      },
      {
        date: "2024/04/09 00:12:06",
        action: "Jason closed ticket",
      },
      {
        date: "2024/04/09 00:12:06",
        action: "Jason closed ticket",
      },
      {
        date: "2024/04/09 00:12:06",
        action: "Jason closed ticket",
      },
      {
        date: "2024/04/09 00:12:06",
        action: "Jason closed ticket",
      },
    ],
  };

  const getInitialColor = (initials) => {
    const colors = {
      BR: "bg-green-600",
      CY: "bg-rose-600",
      JS: "bg-purple-600",
    };
    return colors[initials] || "bg-gray-600";
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
                  className="px-4 py-2 text-sm font-sans font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Open
                </button>
                <button
                  onClick={() => setIsSuspendOpen(true)}
                  className="px-4 py-2 text-sm font-sans font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Assign
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
                <h2 className="font-sans font-bold mb-3">
                  Ticket Details
                </h2>{" "}
                <hr className=" mb-5" />
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
                {/* <h2 className="text-xl font-semibold mb-6 font-sans">
                  {contractData.title}
                </h2> */}
                {/* Job URL */}
                {/* <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2 font-sans">
                    Copy or Share Job url preview:
                  </p>
                  <div className="bg-gray-100 p-2 rounded-md text-sm font-sans">
                    {contractData.jobUrl}
                  </div>
                </div> */}
                {/* Preview Image */}
                {/* <div className="mb-6">
                  <img
                    // src={contractData.previewImage}
                    src={Details}
                    alt="Job Preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div> */}
                {/* Job Details */}
                <div className="space-y-6">
                  {/* <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-sans">Location</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-sans">
                        {contractData.location.place}
                      </span>
                      <span className="bg-gray-200 px-2 py-1 rounded text-xs font-sans">
                        {contractData.location.currency}
                      </span>
                    </div>
                  </div> */}

                  <div>
                    <h4 className="font-medium mb-2 font-sans">
                      Email Address
                    </h4>
                    <p className="text-sm text-gray-600 font-sans">
                      akinyemi@gmail.com
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 font-sans">Phone Number</h4>
                    <p className="text-sm text-gray-600 font-sans">
                      09039765336
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 font-sans">
                      Additional Info
                    </h4>
                    <p className="text-sm text-gray-600 font-sans">
                      Finding it difficult to create wok order. The error
                      message depicts - Error 404
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 font-sans">Attachment</h4>
                    <p className="text-sm text-gray-600 font-sans">
                      No file attached
                    </p>
                  </div>

                  {/* <div>
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
                  </div> */}
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
                  {["Comments", "History"].map((tab) => (
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
                {activeTab === "Comments" && (
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="flex gap-4">
                        <div
                          className={`flex-shrink-0 font-sans w-8 h-8 rounded-full ${getInitialColor(
                            comment.initials
                          )} flex items-center justify-center text-white font-medium text-sm`}
                        >
                          {comment.initials}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-gray-900 font-sans">
                              {comment.user}
                            </span>
                            <span className="text-sm text-gray-500 font-sans">
                              {comment.timeAgo}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed font-sans">
                            {comment.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "History" && (
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
        {isRefundOpen && (
          <MarkForRefundForm onClose={() => setIsRefundOpen(false)} />
        )}
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
        {isSuspendOpen && (
          <SuspendWokForm onClose={() => setIsSuspendOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default TicketDetails;
