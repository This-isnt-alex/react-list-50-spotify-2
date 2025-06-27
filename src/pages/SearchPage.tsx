import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { useApp } from '../context/AppContext'
import MusicCard from '../components/MusicCard'
import ArtistCard from '../components/ArtistCard'

const SearchPage = () => {
  const { searchQuery, setSearchQuery, searchResults, setCurrentTrack, allTracks } = useApp()
  const [activeFilter, setActiveFilter] = useState('all')
  const [recentSearches, setRecentSearches] = useState<string[]>(['Taylor Swift', 'Hip Hop', 'Chill', 'Rock'])

  const browseGenres = [
    { id: 1, name: 'Pop', color: 'bg-pink-500', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
    { id: 2, name: 'Hip-Hop', color: 'bg-orange-500', image: 'https://images.unsplash.com/photo-1571330735066-03d8df960b59?w=300&h=300&fit=crop' },
    { id: 3, name: 'Rock', color: 'bg-red-500', image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop' },
    { id: 4, name: 'Electronic', color: 'bg-purple-500', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=300&fit=crop' },
    { id: 5, name: 'Jazz', color: 'bg-blue-500', image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=300&h=300&fit=crop' },
    { id: 6, name: 'Country', color: 'bg-yellow-500', image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=300&h=300&fit=crop' },
    { id: 7, name: 'Classical', color: 'bg-indigo-500', image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&h=300&fit=crop' },
    { id: 8, name: 'Reggae', color: 'bg-green-500', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' }
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'tracks', label: 'Songs' },
    { id: 'artists', label: 'Artists' },
    { id: 'albums', label: 'Albums' },
    { id: 'playlists', label: 'Playlists' }
  ]

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query && !recentSearches.includes(query)) {
      setRecentSearches(prev => [query, ...prev.slice(0, 4)])
    }
  }

  const clearSearch = () => {
    setSearchQuery('')
    setActiveFilter('all')
  }

  const removeRecentSearch = (search: string) => {
    setRecentSearches(prev => prev.filter(s => s !== search))
  }

  const hasResults = searchResults.tracks.length > 0 || searchResults.artists.length > 0 || searchResults.albums.length > 0

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 via-gray-900 to-black overflow-y-auto">
      <div className="p-6">
        {/* Search Header */}
        <div className="mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="What do you want to play?"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full bg-gray-800 text-white rounded-full py-3 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:bg-gray-700"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>

          {/* Filters */}
          {searchQuery && (
            <div className="flex space-x-2 mb-6">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter.id
                      ? 'bg-white text-black'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Results */}
        {searchQuery ? (
          hasResults ? (
            <div className="space-y-8">
              {/* Top Result */}
              {searchResults.tracks.length > 0 && (activeFilter === 'all' || activeFilter === 'tracks') && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Top result</h2>
                  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover:bg-opacity-70 transition-all cursor-pointer group max-w-md">
                    <div className="flex items-center space-x-4">
                      <img
                        src={searchResults.tracks[0].image}
                        alt={searchResults.tracks[0].title}
                        className="w-20 h-20 rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white text-xl font-bold mb-1">{searchResults.tracks[0].title}</h3>
                        <p className="text-gray-400 text-sm mb-1">
                          Song • {searchResults.tracks[0].artists.join(', ')}
                        </p>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setCurrentTrack(searchResults.tracks[0])}
                            className="bg-spotify-green text-black px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform"
                          >
                            Play
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Songs */}
              {searchResults.tracks.length > 0 && (activeFilter === 'all' || activeFilter === 'tracks') && (
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-white">Songs</h2>
                    {activeFilter === 'all' && (
                      <button
                        onClick={() => setActiveFilter('tracks')}
                        className="text-gray-400 hover:text-white text-sm font-medium"
                      >
                        Show all
                      </button>
                    )}
                  </div>
                  <div className="space-y-2">
                    {(activeFilter === 'all' ? searchResults.tracks.slice(0, 4) : searchResults.tracks).map((track, index) => (
                      <div
                        key={track.id}
                        onClick={() => setCurrentTrack(track)}
                        className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800 cursor-pointer group"
                      >
                        <span className="text-gray-400 text-sm w-4">{index + 1}</span>
                        <img src={track.image} alt={track.title} className="w-10 h-10 rounded" />
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-medium truncate">{track.title}</p>
                          <p className="text-gray-400 text-sm truncate">{track.artists.join(', ')}</p>
                        </div>
                        <span className="text-gray-400 text-sm">{track.duration}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Artists */}
              {searchResults.artists.length > 0 && (activeFilter === 'all' || activeFilter === 'artists') && (
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-white">Artists</h2>
                    {activeFilter === 'all' && (
                      <button
                        onClick={() => setActiveFilter('artists')}
                        className="text-gray-400 hover:text-white text-sm font-medium"
                      >
                        Show all
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {(activeFilter === 'all' ? searchResults.artists.slice(0, 6) : searchResults.artists).map((artist) => (
                      <ArtistCard
                        key={artist.id}
                        name={artist.name}
                        image={artist.image}
                        type={artist.type}
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* Albums */}
              {searchResults.albums.length > 0 && (activeFilter === 'all' || activeFilter === 'albums') && (
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-white">Albums</h2>
                    {activeFilter === 'all' && (
                      <button
                        onClick={() => setActiveFilter('albums')}
                        className="text-gray-400 hover:text-white text-sm font-medium"
                      >
                        Show all
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {(activeFilter === 'all' ? searchResults.albums.slice(0, 6) : searchResults.albums).map((album) => (
                      <MusicCard
                        key={album.id}
                        title={album.title}
                        artists={album.artists}
                        image={album.image}
                        type="album"
                        onClick={() => console.log('Album clicked:', album.title)}
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-white text-xl font-bold mb-2">No results found for "{searchQuery}"</h2>
              <p className="text-gray-400">Please make sure your words are spelled correctly, or use fewer or different keywords.</p>
            </div>
          )
        ) : (
          /* Browse Content */
          <div className="space-y-8">
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Recent searches</h2>
                <div className="space-y-2">
                  {recentSearches.map((search) => (
                    <div key={search} className="flex items-center justify-between p-3 hover:bg-gray-800 rounded cursor-pointer group">
                      <button
                        onClick={() => handleSearch(search)}
                        className="flex items-center space-x-3 flex-1"
                      >
                        <Search size={20} className="text-gray-400" />
                        <span className="text-white">{search}</span>
                      </button>
                      <button
                        onClick={() => removeRecentSearch(search)}
                        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-white"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Browse all */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Browse all</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {browseGenres.map((genre) => (
                  <div
                    key={genre.id}
                    onClick={() => handleSearch(genre.name)}
                    className={`${genre.color} rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform relative overflow-hidden h-32`}
                  >
                    <h3 className="text-white font-bold text-lg">{genre.name}</h3>
                    <img
                      src={genre.image}
                      alt={genre.name}
                      className="absolute bottom-0 right-0 w-20 h-20 object-cover rounded transform rotate-12 translate-x-2 translate-y-2"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchPage
