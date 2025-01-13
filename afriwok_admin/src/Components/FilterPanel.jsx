import { useState } from 'react';
import PropTypes from 'prop-types';
import { X } from 'lucide-react';

const FilterPanel = ({ isOpen, onClose }) => {
  const [filters, setFilters] = useState({
    dateRange: '',
    status: '',
    state: '',
    type: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle filter application
    console.log('Applying filters:', filters);
    onClose();
  };

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
            <h2 className="text-lg font-semibold font-sans">Filter by</h2>
            <button 
              onClick={onClose}
              className="rounded-full p-1 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-sans text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  placeholder="DD/MM/YYYY - DD/MM/YYYY"
                  className="mt-1 block w-full font-sans rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-[#87986A] focus:outline-none"
                  value={filters.dateRange}
                  onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-sans font-medium text-gray-700">
                  Status
                </label>
                <select
                  className="mt-1 block w-full font-sans rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#87986A] focus:outline-none"
                  value={filters.status}
                  onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                >
                  <option className='font-sans' value="">Select</option>
                  <option className='font-sans' value="all">All</option>
                  <option className='font-sans' value="Verified">Verified</option>
                  <option className='font-sans' value="Unverified">Unverified</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-sans font-medium text-gray-700">
                  State
                </label>
                <select
                  className="mt-1 block w-full font-sans rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#87986A] focus:outline-none"
                  value={filters.state}
                  onChange={(e) => setFilters({ ...filters, state: e.target.value })}
                >
                  <option className='font-sans' value="" disabled selected>Select</option>
                  <option className='font-sans' value="All">All</option>
                  <option className='font-sans' value="Active">Active</option>
                  <option className='font-sans' value="InActive">InActive</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-sans font-medium text-gray-700">
                  Type
                </label>
                <select
                  className="mt-1 block font-sans w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#87986A] focus:outline-none"
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                >
                  <option value="" disabled selected>Select</option>
                  <option className='font-sans' value="All">All</option>
                  <option className='font-sans' value="Client">Client</option>
                  <option className='font-sans' value="Service Provider">Service Provider</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="float-right font-sans rounded-md bg-[#87986A] px-4 py-2 text-sm font-medium text-white hover:bg-[#758a5c] focus:outline-none"
                >
                  Apply Filter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
FilterPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FilterPanel;

