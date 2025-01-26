import { useState, useEffect } from "react";
import { Calendar, ChevronDown, Plus, Search, Mail, FileText, Users } from 'lucide-react';
import NewNotificationForm from "../Components/Dashboard_components/NewNotification";
import NewTicketForm from "../Components/Dashboard_components/NewTicket";
import NewAdminForm from "../Components/Dashboard_components/NewAdminUser";

function DashboardSummary() {
  const [user, setUser] = useState({name: "", first_name: ""});
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [activeForm, setActiveForm] = useState(null);

  const toggleCreate = () => setIsCreateOpen(!isCreateOpen);
  const toggleDate = () => setIsDateOpen(!isDateOpen);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleFormOpen = (formType) => {
    setActiveForm(formType);
    setIsCreateOpen(false);
  };

  const handleFormClose = () => {
    setActiveForm(null);
  };

  return (
    <>
      <div className=" bg-white px-3 rounded">
        <div className="w-full mx-auto rounded-lg overflow-hidden">
          {/* Header */}
          <header className="py-4 flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-2xl font-semibold font-sans">Welcome {user.first_name}</h1>
            
            <div className="flex items-center space-x-4">
              <div className="">
                <button onClick={toggleDate} className="flex font-sans items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50">
                  <Calendar className="h-4 w-4 mr-2" />
                  Last 7 Days
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>
                {isDateOpen && (
                  <div className="absolute mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-sans text-sm font-semibold">Today</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-sans text-sm font-semibold">Yesterday</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-sans text-sm font-semibold">Last Week</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-sans text-sm font-semibold">Last Month</li>
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="">
                <button onClick={toggleCreate} className="flex font-sans items-center px-3 py-2 bg-[#87986A] text-white rounded-md text-sm font-semibold hover:bg-[#758a5c]">
                  <Plus className="h-4 w-4 mr-2" />
                  Create
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>
                {isCreateOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <ul>
                      <li 
                        onClick={() => handleFormOpen('ticket')}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-sans text-sm font-semibold"
                      >
                        New Ticket
                      </li>
                      <li 
                        onClick={() => handleFormOpen('notification')}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-sans text-sm font-semibold"
                      >
                        New Notification
                      </li>
                      <li 
                        onClick={() => handleFormOpen('admin')}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-sans text-sm font-semibold"
                      >
                        New Admin User
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-5 bg-[#F9F9F9] rounded-lg">
            <h2 className="text-lg font-semibold mb-4 font-sans">Overall Summary</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
              {/* Revenue Generated */}
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-gray-400 mr-2" />
                  <h3 className="text-normal font-semibold font-sans">Revenue Generated</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between bg-gray-100 py-2 px-2 rounded items-center">
                    <span className="text-gray-600 text-sm font-semibold font-sans">Escrow balance</span>
                    <span className="font-semibold font-sans text-[#8B9467] text-sm">₦230,442.00</span>
                  </div>
                  <div className="flex justify-between bg-gray-100 py-2 px-2 rounded items-center">
                    <span className="text-gray-600 text-sm font-semibold font-sans">Payments </span>
                    <span className="font-semibold font-sans text-[#8B9467] text-sm">₦600,442.00</span>
                  </div>
                  <div className="flex justify-between bg-gray-100 py-2 px-2 rounded items-center">
                    <span className="text-gray-600 text-sm font-semibold font-sans">Commission</span>
                    <span className="font-semibold font-sans text-[#8B9467] text-sm">₦230,442.00</span>
                  </div>
                </div>
              </div>

              {/* Total Contracts */}
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-gray-400 mr-2" />
                  <h3 className="text-normal font-semibold font-sans">Total Contracts</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between bg-green-50 py-2 px-2 rounded items-center">
                    <span className="text-gray-600 text-sm font-semibold font-sans">Open</span>
                    <span className="font-semibold font-sans text-[#228B22] text-sm">10,342</span>
                  </div>
                  <div className="flex justify-between bg-green-50 py-2 px-2 rounded items-center">
                    <span className="text-gray-600 text-sm font-semibold font-sans">In-Progress</span>
                    <span className="font-semibold font-sans text-[#228B22] text-sm">2343</span>
                  </div>
                  <div className="flex justify-between bg-green-50 py-2 px-2 rounded items-center">
                    <span className="text-gray-600 text-sm font-semibold font-sans">Completed</span>
                    <span className="font-semibold font-sans text-[#228B22] text-sm">2026</span>
                  </div>
                </div>
              </div>

              {/* Total Users */}
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-gray-400 mr-2" />
                  <h3 className="text-normal font-semibold font-sans">Total Users</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between bg-red-50 py-2 px-2 rounded items-center">
                    <span className="text-gray-600 text-sm font-semibold font-sans">Client</span>
                    <span className="font-semibold font-sans text-[#DF9057] text-sm">1,042</span>
                  </div>
                  <div className="flex justify-between bg-red-50 py-2 px-2 rounded items-center">
                    <span className="text-gray-600 text-sm font-semibold font-sans">Service Providers</span>
                    <span className="font-semibold font-sans text-[#DF9057] text-sm">121</span>
                  </div>
                  <div className="flex justify-between bg-red-50 py-2 px-2 rounded items-center">
                    <span className="text-gray-600 text-sm font-semibold font-sans">Admin</span>
                    <span className="font-semibold font-sans text-[#DF9057] text-sm">05</span>
                  </div>
                </div>
              </div>

              {/* Total Tickets */}
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <Search className="h-6 w-6 text-gray-400 mr-2" />
                  <h3 className="text-normal font-semibold font-sans">Total Tickets</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between bg-pink-50 py-2 px-2 rounded items-center">
                    <span className="text-gray-600 text-sm contain-contenttext-sm font-semibold font-sans">Open</span>
                    <span className="font-semibold font-sans text-[#9D0C12] text-sm">1,422</span>
                  </div>
                  <div className="flex justify-between bg-pink-50 py-2 px-2 rounded items-center">
                    <span className="text-gray-600 text-sm contain-contenttext-sm font-semibold font-sans">Closed</span>
                    <span className="font-semibold font-sans text-[#9D0C12] text-sm">232</span>
                  </div>
                  <div className="flex justify-between bg-pink-50 py-2 px-2 rounded items-center">
                    <span className="text-gray-600 text-sm contain-contenttext-sm font-semibold font-sans">Assigned</span>
                    <span className="font-semibold font-sans text-[#9D0C12] text-sm">34</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Slide-out Forms */}
        {activeForm && (
          <>
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={handleFormClose}
            />
            
            {/* Form Container */}
            <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
              activeForm ? 'translate-x-0' : 'translate-x-full'
            }`}>
              {activeForm === 'notification' && <NewNotificationForm onClose={handleFormClose} />}
              {activeForm === 'ticket' && <NewTicketForm onClose={handleFormClose} />}
              {activeForm === 'admin' && <NewAdminForm onClose={handleFormClose} />}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default DashboardSummary;

