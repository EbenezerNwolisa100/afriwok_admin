
const ResetPassword = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md rounded-lg bg-white p-6">
        <h2 className="text-lg font-semibold font-sans">Reset #C123 435 Password</h2>
        <p className="mt-2 text-sm text-gray-600 font-sans">
          This will log the user off the platform and a mail with default password will shared to the registered email address
        </p>
        
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-md font-sans border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          >
            No, go back
          </button>
          <button
            onClick={onConfirm}
            className="rounded-md font-sans border border-red-600 bg-white px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 focus:outline-none"
          >
            Yes, Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

