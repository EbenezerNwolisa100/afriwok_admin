import { X } from "lucide-react";
import PropTypes from 'prop-types';

const NotificationsPanel = ({ isOpen, onClose }) => {
  const notifications = [
    {
      id: 1,
      title: "New message received",
      description: "You have a new message from John Doe",
      time: "5 minutes ago",
      isRead: false
    },
    {
      id: 2,
      title: "Payment successful",
      description: "Your payment of $50 has been processed",
      time: "1 hour ago",
      isRead: false
    },
    {
      id: 3,
      title: "Account update",
      description: "Your account details have been updated",
      time: "2 hours ago",
      isRead: true
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-semibold font-sans">Notifications</h2>
            <button 
              onClick={onClose}
              className="rounded-full p-1 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Notifications List */}
          <div className="flex-1 divide-y">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`p-4 hover:bg-gray-50 ${
                  !notification.isRead ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex gap-4">
                  <div className={`mt-1 h-2 w-2 flex-shrink-0 rounded-full ${
                    !notification.isRead ? 'bg-blue-500' : 'bg-gray-300'
                  }`} />
                  <div>
                    <h3 className="font-medium font-sans">{notification.title}</h3>
                    <p className="text-sm text-gray-600 font-sans">{notification.description}</p>
                    <p className="mt-1 text-xs text-gray-500 font-sans">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
NotificationsPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NotificationsPanel;

