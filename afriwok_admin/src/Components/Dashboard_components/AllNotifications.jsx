
import PropTypes from 'prop-types';

const NotificationPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"
        onClick={onClose}
      ></div>

      {/* Popup panel */}
      <div className="relative bg-white shadow-lg w-2/3 h-full max-w-xl">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold font-sans">Notifications</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 border py-1 px-2"
          >
            ✖
          </button>
        </div>
        <div className="p-4">
          {/* Content goes here */}
          <p className="text-gray-500 font-sans">No new notifications.</p>
        </div>
      </div>
    </div>
  );
};


NotificationPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NotificationPopup;
