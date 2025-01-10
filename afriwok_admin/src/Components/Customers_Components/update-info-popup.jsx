'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function UpdateInfoPopup({ isOpen, onClose, userId }) {
  const [formData, setFormData] = useState({
    userId,
    type: 'Payout Details',
    bankName: 'United Bank of Africa',
    accountNumber: '',
    accountName: ''
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold font-sans">Update Info</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-sans">User ID *</label>
            <input 
              type="text"
              value={formData.userId}
              className="w-full p-2 border rounded-lg bg-gray-50 font-sans"
              readOnly
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-sans">Type</label>
            <select 
              className="w-full p-2 border rounded-lg font-sans"
              value={formData.type}
              onChange={(e) => setFormData(prev => ({...prev, type: e.target.value}))}
            >
              <option>Payout Details</option>
              <option>Other Details</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-sans">Bank Name</label>
            <select 
              className="w-full p-2 border rounded-lg font-sans"
              value={formData.bankName}
              onChange={(e) => setFormData(prev => ({...prev, bankName: e.target.value}))}
            >
              <option>United Bank of Africa</option>
              <option>Other Banks</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-sans">Account Number *</label>
            <input 
              type="text"
              placeholder="2093873903"
              className="w-full p-2 border rounded-lg font-sans"
              value={formData.accountNumber}
              onChange={(e) => setFormData(prev => ({...prev, accountNumber: e.target.value}))}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-sans">Account Name *</label>
            <input 
              type="text"
              placeholder="Uche ThankGod Chukwuebuka"
              className="w-full p-2 border rounded-lg font-sans"
              value={formData.accountName}
              onChange={(e) => setFormData(prev => ({...prev, accountName: e.target.value}))}
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-[#87986A] text-white py-2 rounded-lg hover:bg-[#758a5c] font-sans"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

