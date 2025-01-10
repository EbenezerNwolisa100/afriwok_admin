'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function NotificationPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    recipientType: 'All/User',
    subject: '',
    message: ''
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
          <h2 className="text-lg font-semibold font-sans">New Notification</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-sans">Recipient Type</label>
            <select 
              className="w-full p-2 border rounded-lg font-sans"
              value={formData.recipientType}
              onChange={(e) => setFormData(prev => ({...prev, recipientType: e.target.value}))}
            >
              <option>All/User</option>
              <option>Specific Users</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-sans">Subject/Title *</label>
            <input 
              type="text"
              placeholder="Enter Subject of Notification"
              className="w-full p-2 border rounded-lg font-sans"
              value={formData.subject}
              onChange={(e) => setFormData(prev => ({...prev, subject: e.target.value}))}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-sans">Message *</label>
            <textarea 
              placeholder="Enter message here (Also infuse text wizard)"
              className="w-full p-2 border rounded-lg min-h-[150px] font-sans"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-[#87986A] text-white py-2 rounded-lg hover:bg-[#758a5c] font-sans"
          >
            Send Notification
          </button>
        </form>
      </div>
    </div>
  )
}

