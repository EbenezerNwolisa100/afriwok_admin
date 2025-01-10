import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Calendar, ChevronDown } from 'lucide-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function DashboardChart() {
  const [activeTab, setActiveTab] = useState('revenue')
  const [timeFilter, setTimeFilter] = useState('7days')
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false)

  // Chart data for different tabs
  const chartData = {
    revenue: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      data: [4500, 3200, 8200, 7800, 2500, 6500, 7900, 8500, 6700, 5400, 4200, 3800]
    },
    tickets: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      data: [85, 75, 90, 85, 95, 88, 92, 87, 89, 91, 86, 93]
    },
    users: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      data: [1200, 1350, 1450, 1600, 1750, 1850, 2000, 2200, 2400, 2600, 2800, 3000]
    },
    jobs: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      data: [250, 280, 310, 340, 360, 380, 400, 420, 450, 480, 510, 550]
    }
  }

  const timeFilterOptions = [
    { value: 'today', label: 'Today' },
    { value: 'yesterday', label: 'Yesterday' },
    { value: '7days', label: 'Last Week' },
    { value: '30days', label: 'Last Month' },
    { value: 'custom', label: 'Select date range' }
  ]

  const tabs = [
    { id: 'revenue', label: 'Revenue Breakdown' },
    { id: 'tickets', label: 'Ticket Resolution Rate' },
    { id: 'users', label: 'User Growth' },
    { id: 'jobs', label: 'Job activity trends' }
  ]

  const currentData = chartData[activeTab]

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#f0f0f0'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }

  const data = {
    labels: currentData.labels,
    datasets: [
      {
        data: currentData.data,
        backgroundColor: '#87986A',
        borderRadius: 4
      }
    ]
  }

  return (
    <div className="bg-white py-6 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-xl font-sans font-semibold">{tabs.find(tab => tab.id === activeTab)?.label}</h2>
        
        {/* Time Filter Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
            className="flex items-center gap-2 px-4 font-sans font-semibold py-2 border border-gray-200 rounded-lg text-sm"
          >
            <Calendar className="h-4 w-4" />
            {timeFilterOptions.find(option => option.value === timeFilter)?.label}
            <ChevronDown className="h-4 w-4" />
          </button>

          {isTimeDropdownOpen && (
            <div className="absolute md:right-4 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {timeFilterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setTimeFilter(option.value)
                    setIsTimeDropdownOpen(false)
                  }}
                  className="w-full px-4 py-2 text-left font-sans font-semibold text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div className="h-[400px] mb-6">
        <Bar data={data} options={chartOptions} />
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-4 items-center justify-center border-t border-gray-200 pt-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm px-4 py-2 rounded-full font-sans font-semibold transition-colors ${
              activeTab === tab.id
                ? 'bg-[#87986A] text-white font-sans font-semibold'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}

