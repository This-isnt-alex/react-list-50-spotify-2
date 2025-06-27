import { Home, Search, Library, Plus, Heart, Download } from 'lucide-react'

interface SidebarProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

const Sidebar = ({ currentPage, setCurrentPage }: SidebarProps) => {
  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'library', icon: Library, label: 'Your Library' },
  ]

  const playlists = [
    'Create your first playlist',
    'Let\'s find some podcasts to follow',
    'Liked Songs',
    'Recently Played',
    'Made For You',
    'Recently Played',
    'Heavy Metal Classics',
    'Rock Anthems',
    'Chill Hip-Hop',
    'Today\'s Top Hits',
    'RapCaviar',
    'Peaceful Piano',
    'Deep Focus',
    'Jazz Vibes',
    'Pop Rising',
    'Discover Weekly'
  ]

  return (
    <div className="w-64 bg-black h-full flex flex-col">
      {/* Main Navigation */}
      <div className="p-6">
        {/* Spotify Logo */}
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center mr-2">
            <span className="text-black font-bold text-lg">♪</span>
          </div>
          <span className="text-white font-bold text-xl">Spotify</span>
        </div>

        {/* Main Menu */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex items-center space-x-4 w-full p-2 rounded-md text-left transition-colors ${
                currentPage === item.id
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <item.icon size={24} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Library Section */}
      <div className="flex-1 px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <Library size={24} />
            <span className="font-medium">Your Library</span>
          </button>
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-white">
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Create Playlist Buttons */}
        <div className="space-y-3 mb-6">
          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="text-white font-medium mb-2">Create your first playlist</h3>
            <p className="text-gray-400 text-sm mb-3">It's easy, we'll help you</p>
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
              Create playlist
            </button>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="text-white font-medium mb-2">Let's find some podcasts to follow</h3>
            <p className="text-gray-400 text-sm mb-3">We'll keep you updated on new episodes</p>
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
              Browse podcasts
            </button>
          </div>
        </div>

        {/* Playlist List */}
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {playlists.map((playlist) => (
            <button
              key={playlist}
              className="block w-full text-left text-gray-300 hover:text-white p-2 rounded text-sm transition-colors"
            >
              {playlist}
            </button>
          ))}
        </div>

        {/* Install App */}
        <div className="mt-8 pt-4 border-t border-gray-800">
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <Download size={20} />
            <span className="text-sm font-medium">Install App</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
