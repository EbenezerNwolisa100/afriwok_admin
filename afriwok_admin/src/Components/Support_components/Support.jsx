import { useState } from "react";
import { Search, Send, ChevronLeft } from "lucide-react";
import ProfilePic from "../../assets/images/ProfilePic.svg";

const LiveSupportChat = () => {
  const [activeTab, setActiveTab] = useState("queue");
  const [selectedChat, setSelectedChat] = useState(null);

  const tabs = [
    { id: "queue", label: "Queue" },
    { id: "groups", label: "Groups" },
  ];

  const chats = [
    { id: 1, name: "Adewale John", message: "Can you re-adjust the number of broch...", avatar: ProfilePic },
    { id: 2, name: "Sales Department", message: "Emmanuel Annunziee: Can you re-adjust...", avatar: ProfilePic },
    { id: 3, name: "Solomon Ideh", message: "Viverra purus gravida suscipit non", avatar: ProfilePic },
  ];

  const messages = [
    { id: 1, sender: "Adewale John", content: "Hey Olivia, can you please review when you can?", timestamp: "Friday 2:20pm" },
    { id: 2, sender: "You", content: "Sure thing, I'll have a look today.", timestamp: "Friday 2:20pm" },
    { id: 3, sender: "Adewale John", content: "Thank you very much", timestamp: "Friday 2:20pm" },
  ];

  return (
    <div className="h-screen w-full flex flex-col lg:flex-row bg-white border rounded-lg overflow-hidden">
      {/* Sidebar */}
      <div
        className={`lg:w-80 lg:flex flex-col border-r ${
          selectedChat ? "hidden lg:block" : "block"
        }`}
      >
        {/* Tabs */}
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 text-sm font-sans font-medium ${
                activeTab === tab.id
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="p-4 border-b">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border rounded-md font-sans text-sm"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`w-full flex items-center font-sans p-4 hover:bg-gray-50 ${
                selectedChat?.id === chat.id ? "bg-gray-50" : ""
              }`}
            >
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3 text-left">
                <div className="text-sm font-medium font-sans">{chat.name}</div>
                <div className="text-xs text-gray-500 font-sans truncate">
                  {chat.message}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <button
                  onClick={() => setSelectedChat(null)}
                  className="block lg:hidden mr-3 text-gray-500 font-sans hover:text-gray-700"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <img
                  src={selectedChat.avatar}
                  alt={selectedChat.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="ml-3 font-medium font-sans">{selectedChat.name}</span>
              </div>
              <button className="px-4 py-1 text-sm bg-gray-900 font-sans text-white rounded-md">
                End Chat
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex flex-col ${
                    message.sender === "You" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.sender === "You"
                        ? "bg-green-700 text-white font-sans"
                        : "bg-gray-100 font-sans"
                    }`}
                  >
                    {message.content}
                  </div>
                  <span className="text-xs font-sans text-gray-500 mt-1">
                    {message.timestamp}
                  </span>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type message here..."
                  className="w-full pl-4 pr-10 py-2 border rounded-md"
                />
                <button className="absolute right-2 top-2 text-gray-400 font-sans hover:text-gray-600">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center font-sans text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveSupportChat;
