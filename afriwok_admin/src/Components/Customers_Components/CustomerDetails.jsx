import { useState } from "react";
import { ArrowLeft, Mail, Edit, Check, ChevronRight, Circle } from 'lucide-react';
import ProfilePics from '../../assets/Images/ProfilePic.svg'; 
import TopUpToken from './TopUpTokens';
import SuspendAccount from './SuspendAccount';
import ResetPassword from './ResetPassword';
import NotificationPopup from './notification-popup'
import UpdateInfoPopup from './update-info-popup'

const CustomerDetails = () => {
  const [activeView, setActiveView] = useState("client");
  const [activeTab, setActiveTab] = useState("contact-details");
  const [isTopUpOpen, setIsTopUpOpen] = useState(false);
  const [isSuspendOpen, setIsSuspendOpen] = useState(false);
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  const customerData = {
    id: "#C123 435",
    personalInfo: {
      customerID: "#C123435",
      firstName: "ThankGod",
      lastName: "Uche",
      middleName: "Jason",
      dateOfBirth: "DD/MM/YY",
      gender: "Male",
      email: "e.madubuchi@gmail.com",
      phone: "08056623407",
      nin: "44654268787",
      address: "19 Kola Adeyina Close, Lekki Phase 1",
      state: "Lagos"
    },
    businessInfo: {
      client: {
        businessName: "CreativeXG",
        category: "IT",
        rcNumber: "RC23567",
        address: "Ajuyi Road",
        state: "Lagos"
      },
      serviceProvider: {
        businessName: "TechPro Solutions",
        category: "Technology",
        rcNumber: "RC45678",
        address: "Victoria Island",
        state: "Lagos"
      }
    },
    walletInfo: {
      client: {
        balance: "N50,000,000",
        type: "NG WOKS"
      },
      serviceProvider: {
        balance: "N75,000,000",
        type: "NG WOKS PRO"
      }
    }
  };

  const logData = [
    {
      date: "2024/04/09 00:12:06",
      description: "You rated service provider"
    },
    {
      date: "2024/04/09 00:12:06",
      description: "You tipped Service provider with 20 WOKs token"
    },
    {
      date: "2024/04/09 00:12:06",
      description: "You approved work order"
    },
    {
      date: "2024/04/09 00:12:06",
      description: "Service Provider marked work order as completed"
    },
    {
      date: "2024/04/09 00:12:06",
      description: "Service Provider Started work order"
    },
    {
      date: "2024/04/09 00:12:06",
      description: "Work order was acknowledge by Service Provider"
    },
    {
      date: "2024/04/09 00:12:06",
      description: "You initiated a work order deposit of N200,000.00 to escrow wallet"
    }
  ];

  const ticketData = [
    {
      date: "2024/04/09 00:12:06",
      description: "Inaccessible account...",
      ticketId: "TX123 098",
      status: "Closed"
    },
    {
      date: "2024/04/09 00:12:06",
      description: "Inaccessible account...",
      ticketId: "TX123 098",
      status: "Closed"
    },
    {
      date: "2024/04/09 00:12:06",
      description: "Inaccessible account...",
      ticketId: "TX123 098",
      status: "Closed"
    },
    {
      date: "2024/04/09 00:12:06",
      description: "Inaccessible account...",
      ticketId: "TX123 098",
      status: "Closed"
    },
    {
      date: "2024/04/09 00:12:06",
      description: "Inaccessible account...",
      ticketId: "TX123 098",
      status: "Closed"
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "contact-details":
        return (
          <div className="space-y-6">
            {/* Personal Information */}
            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold font-sans">Personal Information</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(customerData.personalInfo).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm font-sans text-gray-500">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    <p className="font-medium font-sans">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Information */}
            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold font-sans">Business Information</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(
                  activeView === "client"
                    ? customerData.businessInfo.client
                    : customerData.businessInfo.serviceProvider
                ).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm font-sans text-gray-500">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    <p className="font-medium font-sans">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Wallet Information */}
            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold font-sans">Wallet Information</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(
                  activeView === "client"
                    ? customerData.walletInfo.client
                    : customerData.walletInfo.serviceProvider
                ).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm font-sans text-gray-500">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    <p className="font-medium font-sans">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "logs":
        return (
          <div className="rounded-lg bg-white p-6">
            <div className="space-y-6">
              {logData.map((log, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Circle className="mt-1 h-2 w-2 text-gray-400 font-sans" />
                  <div>
                    <p className="text-sm text-gray-500 font-sans">{log.date}</p>
                    <p className="font-medium font-sans">{log.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "tickets":
        return (
          <div className="rounded-lg bg-white">
            <div className="divide-y">
              {ticketData.map((ticket, index) => (
                <div key={index} className="flex items-center justify-between p-6">
                  <div className="flex items-start gap-4">
                    <input type="checkbox" className="mt-1 rounded border-gray-300" />
                    <div>
                      <p className="text-sm text-gray-500 font-sans">{ticket.date}</p>
                      <p className="font-medium font-sans">{ticket.description}</p>
                      <p className="text-sm text-gray-500 font-sans">{ticket.ticketId}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-sans text-gray-600">
                      {ticket.status}
                    </span>
                    <button className="flex items-center gap-2 text-sm text-gray-600 font-sans hover:text-gray-900">
                      View Ticket details
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
    <div>
    <button className="rounded-lg border mb-3 border-gray-500 items-center gap-1 flex font-base text-lg py-1 px-3 hover:bg-gray-100">
              <ArrowLeft className="h-5 w-5" /> Back
            </button>
    </div>
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            
            <h1 className="text-lg font-semibold font-sans">{customerData.id}</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <button 
            onClick={() => setIsTopUpOpen(true)}
            className="font-sans rounded-lg bg-[#87986A] px-4 py-2 text-sm font-medium text-white hover:bg-[#758a5c]">
              Top Up Token
            </button>
            <button 
            onClick={() => setIsResetOpen(true)}
            className="font-sans rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50">
              Reset Password
            </button>
            <button 
            onClick={() => setIsSuspendOpen(true)}
            className="font-sans rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-200">
              Suspend
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="rounded-lg bg-white p-6">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <img src={ProfilePics} alt="Profile" className="h-full w-full object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-semibold font-sans">Emeka Madubuchi</h2>
                <p className="text-sm text-gray-500 font-sans">Joined 28th August 2024</p>
                <span className="mt-1 inline-flex font-sans items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs text-green-600">
                  <Check className="h-3 w-3" /> Verified
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="rounded-full border p-2 hover:bg-gray-100"
              onClick={() => setIsNotificationOpen(true)}>
                <Mail className="h-5 w-5" />
              </button>
              <button className="rounded-full border p-2 hover:bg-gray-100"
              onClick={() => setIsUpdateOpen(true)}>
                <Edit className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* View Toggle */}
          <div className="mt-6 border-t pt-6">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveView("client")}
                className={`rounded-lg px-4 py-2 font-sans text-sm font-medium ${
                  activeView === "client"
                    ? "bg-gray-900 text-white font-sans"
                    : "bg-gray-100 text-gray-600 font-sans hover:bg-gray-200"
                }`}
              >
                Client
              </button>
              <button
                onClick={() => setActiveView("service-provider")}
                className={`rounded-lg px-4 py-2 text-sm font-medium font-sans ${
                  activeView === "service-provider"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Service Provider
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="space-y-6">
          <div className="flex border-b bg-white">
            {["contact-details", "logs", "tickets"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-sans font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-gray-900 text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </button>
            ))}
          </div>
          {renderTabContent()}
        </div>
      </div>

      {/* Action Components */}
      <TopUpToken 
        isOpen={isTopUpOpen}
        onClose={() => setIsTopUpOpen(false)}
        userId={customerData.id}
      />
      
      <SuspendAccount 
        isOpen={isSuspendOpen}
        onClose={() => setIsSuspendOpen(false)}
      />
      
      <ResetPassword 
        isOpen={isResetOpen}
        onClose={() => setIsResetOpen(false)}
      />

      <NotificationPopup 
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />

      <UpdateInfoPopup 
        isOpen={isUpdateOpen}
        onClose={() => setIsUpdateOpen(false)}
        userId={customerData.id}
      />
    </div>
    </>
  );
};

export default CustomerDetails;

