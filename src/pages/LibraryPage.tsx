import { useState } from 'react'
import { Plus, Search, Grid3X3, List, Play, MoreHorizontal, Pin, Download } from 'lucide-react'
import { useApp } from '../context/AppContext'
import CreatePlaylistModal from '../components/CreatePlaylistModal'

const LibraryPage = () => {
  const {
    userPlaylists,
    createPlaylist,
    deletePlaylist,
    setCurrentTrack,
    likedSongs
  } = useApp()

  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list')
  const [sortBy, setSortBy] = useState<'recently_added' | 'alphabetical' | 'creator'>('recently_added')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [filterType, setFilterType] = useState<'all' | 'playlists' | 'artists' | 'albums'>('all')

  const filterOptions = [
    { id: 'all', label: 'All' },
    { id: 'playlists', label: 'Playlists' },
    { id: 'artists', label: 'Artists' },
    { id: 'albums', label: 'Albums' }
  ]

  const sortOptions = [
    { id: 'recently_added', label: 'Recently added' },
    { id: 'alphabetical', label: 'Alphabetical' },
    { id: 'creator', label: 'Creator' }
  ]

  const filteredPlaylists = userPlaylists.filter(playlist => {
    const matchesSearch = playlist.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterType === 'all' || filterType === 'playlists'
    return matchesSearch && matchesFilter
  })

  const sortedPlaylists = [...filteredPlaylists].sort((a, b) => {
    switch (sortBy) {
      case 'alphabetical':
        return a.name.localeCompare(b.name)
      case 'recently_added':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      default:
        return 0
    }
  })

  const handleCreatePlaylist = (name: string, description: string) => {
    createPlaylist(name, description)
    setShowCreateModal(false)
  }

  const recentlyPlayed = [
    {
      id: 'recent-1',
      name: 'Daily Mix 1',
      description: 'Taylor Swift, Olivia Rodrigo, Sabrina Carpenter and more',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb0d320225d072c38c4b7f6cb8/1/en/default',
      type: 'playlist'
    },
    {
      id: 'recent-2',
      name: 'Discover Weekly',
      description: 'Your weekly mixtape of fresh music',
      image: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
      type: 'playlist'
    }
  ]

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 via-gray-900 to-black overflow-y-auto">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">Your Library</h1>
            <button
              onClick={() => setShowCreateModal(true)}
              className="text-gray-400 hover:text-white transition-colors"
              title="Create playlist"
            >
              <Plus size={24} />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
              className="text-gray-400 hover:text-white transition-colors"
              title={`Switch to ${viewMode === 'list' ? 'grid' : 'list'} view`}
            >
              {viewMode === 'list' ? <Grid3X3 size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search in Your Library"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 text-white rounded py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Filter pills */}
          <div className="flex items-center space-x-2 mb-4">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setFilterType(option.id as any)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  filterType === option.id
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-gray-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-gray-300 border-none focus:outline-none cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id} className="bg-gray-900">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Access - Recently Played */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Recently played</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {recentlyPlayed.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 bg-opacity-50 rounded flex items-center hover:bg-opacity-70 transition-all group cursor-pointer"
              >
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-l" />
                <div className="px-4 flex-1 min-w-0">
                  <p className="text-white font-medium truncate">{item.name}</p>
                </div>
                <div className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center mr-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={16} fill="black" className="text-black ml-0.5" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Playlists */}
        <section>
          {viewMode === 'list' ? (
            <div className="space-y-2">
              {sortedPlaylists.map((playlist) => (
                <div
                  key={playlist.id}
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800 cursor-pointer group"
                >
                  <div className="relative">
                    <img
                      src={playlist.image}
                      alt={playlist.name}
                      className="w-12 h-12 rounded"
                    />
                    {playlist.id === 'liked-songs' && (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded flex items-center justify-center">
                        <span className="text-white text-lg">♥</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium truncate">{playlist.name}</p>
                    <p className="text-gray-400 text-sm truncate">
                      {playlist.id === 'liked-songs'
                        ? `${likedSongs.length} liked songs`
                        : `${playlist.tracks.length} songs`
                      }
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100">
                    {playlist.tracks.length > 0 && (
                      <button
                        onClick={() => setCurrentTrack(playlist.tracks[0])}
                        className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Play size={14} fill="black" className="text-black ml-0.5" />
                      </button>
                    )}
                    <button className="text-gray-400 hover:text-white">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {sortedPlaylists.map((playlist) => (
                <div
                  key={playlist.id}
                  className="bg-gray-800 bg-opacity-30 p-4 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer group spotify-card"
                >
                  <div className="relative mb-4">
                    <img
                      src={playlist.image}
                      alt={playlist.name}
                      className="w-full aspect-square object-cover rounded"
                    />
                    {playlist.id === 'liked-songs' && (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded flex items-center justify-center">
                        <span className="text-white text-4xl">♥</span>
                      </div>
                    )}
                    {playlist.tracks.length > 0 && (
                      <div className="absolute bottom-2 right-2 w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                        <Play
                          size={20}
                          fill="black"
                          className="text-black ml-1 cursor-pointer"
                          onClick={() => setCurrentTrack(playlist.tracks[0])}
                        />
                      </div>
                    )}
                  </div>
                  <h3 className="text-white font-medium mb-1 truncate">{playlist.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {playlist.description || `${playlist.tracks.length} songs`}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Empty state */}
        {sortedPlaylists.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-white text-xl font-bold mb-2">No playlists found</h2>
            <p className="text-gray-400 mb-4">
              {searchQuery
                ? `No playlists match "${searchQuery}"`
                : "Create your first playlist to get started"
              }
            </p>
            {!searchQuery && (
              <button
                onClick={() => setShowCreateModal(true)}
                className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
              >
                Create playlist
              </button>
            )}
          </div>
        )}
      </div>

      {/* Create Playlist Modal */}
      {showCreateModal && (
        <CreatePlaylistModal
          onClose={() => setShowCreateModal(false)}
          onCreate={handleCreatePlaylist}
        />
      )}
    </div>
  )
}

export default LibraryPage
