import { ChevronLeft, ChevronRight, Search, Bell, User, ChevronDown } from 'lucide-react'

const TopBar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-b from-gray-900 to-transparent">
      {/* Navigation Buttons */}
      <div className="flex items-center space-x-2">
        <button className="w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-gray-400 hover:text-white">
          <ChevronLeft size={18} />
        </button>
        <button className="w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-gray-400 hover:text-white">
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Search Bar (for search page) */}
      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="w-full bg-gray-800 text-white rounded-full py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:bg-gray-700"
          />
        </div>
      </div>

      {/* User Controls */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="text-gray-400 hover:text-white">
          <Bell size={20} />
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-2 bg-black bg-opacity-50 rounded-full px-2 py-1 hover:bg-opacity-70 cursor-pointer">
          <div className="w-7 h-7 bg-gray-600 rounded-full flex items-center justify-center">
            <User size={16} />
          </div>
          <span className="text-white text-sm font-medium">User</span>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </div>
  )
}

export default TopBar
