import { X } from 'lucide-react';

const suspensionReasons = [
  "Inability to complete project",
  "Violation of terms",
  "Suspicious activity",
  "Other"
];

const SuspendAccount = ({ isOpen, onClose }) => {
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
            <h2 className="text-lg font-semibold font-sans">Suspend Account</h2>
            <button 
              onClick={onClose}
              className="rounded-full p-1 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-4">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium font-sans text-gray-700">
                  Reason for Suspension
                </label>
                <select
                  className="mt-1 block w-full font-sans rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#87986A] focus:outline-none"
                >
                  <option value="" className='font-sans'>Select reason</option>
                  {suspensionReasons.map((reason) => (
                    <option key={reason} className='font-sans' value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-sans text-sm font-medium text-gray-700">
                  Remarks *
                </label>
                <input
                  type="text"
                  placeholder="Enter"
                  className="mt-1 block font-sans w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-[#87986A] focus:outline-none"
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="float-right font-sans rounded-md bg-[#87986A] px-4 py-2 text-sm font-medium text-white hover:bg-[#758a5c] focus:outline-none"
                >
                  Suspend
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuspendAccount;

