import { ArrowLeft, ChevronRight } from "lucide-react";
// import { useParams, Link } from "react-router-dom"
import ProfilePic from "../../assets/images/ProfilePic.svg";

export default function WokProfile() {
  const contractData = {
    status: {
      isActive: true,
      text: "Active",
    },
  };

  return (
    <div className="min-h-screen">
      <div className="">
        {/* Header */}
        <button
          className="mb-3 font-semibold font-sans flex bg-white border-gray-300 border items-center gap-1 rounded px-4 py-2"
          // onClick={handleBack}
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>
        {/* Header */}
        <div className="bg-white rounded">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <h1 className="text-xl font-sans font-semibold">#AHVG577</h1>
                </div>
                <div className="flex space-x-3">
                  <button
                    // onClick={() => setIsRefundOpen(true)}
                    className="px-4 py-2 text-sm font-sans font-medium bg-[#D0D5DD] text-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Delist
                  </button>
                  <button
                    // onClick={() => setIsSuspendOpen(true)}
                    className="px-4 py-2 text-sm font-sans font-medium bg-[#D0D5DD] text-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Suspend User
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="bg-white rounded-lg shadow p-6 mt-3">
          <div className="space-y-6">
            <div>
              <div className="flex sm:flex-row flex-col items-start sm:items-center justify-between">
                <div>
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
                        alt="{image}"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium underline font-sans">
                        The Youngs Enterprises
                      </h3>
                    </div>
                  </div>
                </div>
                <button className="flex font-sans border p-2 mb-1 rounded items-center text-normal text-gray-600 hover:text-gray-400">
                  View WOK details
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>

              <div className="grid gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 font-sans">
                    Location
                  </h3>
                  <p className="mt-1 font-sans">Enugu</p>
                </div>
                <hr className="w-full sm:w-96" />

                <div>
                  <h3 className="text-sm font-medium text-gray-500 font-sans">
                    Language
                  </h3>
                  <p className="mt-1 font-sans">Igbo, Hausa</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 font-sans">
                    Bio
                  </h3>
                  <p className="mt-1 font-sans">
                    I am a Plumber looking for to work on drainage systems
                  </p>
                </div>
                <hr className="w-full sm:w-96" />

                <div>
                  <h3 className="text-sm font-medium text-gray-500 font-sans">
                    Category
                  </h3>
                  <p className="mt-1 font-sans">Plumber</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 font-sans">
                    Skills
                  </h3>
                  <p className="mt-1 font-sans">
                    Tiling, Interior, Piping, Plastering, Tiles
                  </p>
                </div>
                <hr className="w-full sm:w-96" />

                <div>
                  <h3 className="text-sm font-medium text-gray-500 font-sans">
                    WOK Experience
                  </h3>
                  <div className="mt-1 space-y-2 font-sans">
                    <p className="font-sans underline">Project Manager @Wok</p>
                    <p className="font-sans underline">Project Manager @Dio</p>
                  </div>
                </div>
                <hr className="w-full sm:w-96" />

                <div>
                  <h3 className="text-sm font-medium text-gray-500 font-sans">
                    Availability
                  </h3>
                  <p className="mt-1 font-sans">Part-Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
