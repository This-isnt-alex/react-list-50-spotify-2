import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Track, Artist, Album } from '../types'

interface Playlist {
  id: string
  name: string
  description: string
  image: string
  tracks: Track[]
  createdAt: Date
}

interface AppContextType {
  // Current state
  currentTrack: Track | null
  setCurrentTrack: (track: Track | null) => void
  currentPage: string
  setCurrentPage: (page: string) => void

  // Search
  searchQuery: string
  setSearchQuery: (query: string) => void
  searchResults: {
    tracks: Track[]
    artists: Artist[]
    albums: Album[]
  }

  // Playlists
  userPlaylists: Playlist[]
  createPlaylist: (name: string, description?: string) => Playlist
  addToPlaylist: (playlistId: string, track: Track) => void
  removeFromPlaylist: (playlistId: string, trackId: number) => void
  deletePlaylist: (playlistId: string) => void

  // Liked songs
  likedSongs: Track[]
  toggleLiked: (track: Track) => void
  isLiked: (trackId: number) => boolean

  // All data
  allTracks: Track[]
  allArtists: Artist[]
  allAlbums: Album[]
}

const AppContext = createContext<AppContextType | undefined>(undefined)

// Sample data
const sampleTracks: Track[] = [
  {
    id: 1,
    title: "Golden",
    artists: ["HUNTR/X", "EJAE", "AUDREY NUNA", "REI AMI"],
    image: "https://ext.same-assets.com/2943831706/54040904.jpeg",
    album: "Golden",
    duration: "3:24"
  },
  {
    id: 2,
    title: "6 Months Later",
    artists: ["Megan Moroney"],
    image: "https://ext.same-assets.com/2943831706/4150032873.jpeg",
    album: "6 Months Later",
    duration: "3:45"
  },
  {
    id: 3,
    title: "Outside",
    artists: ["Cardi B"],
    image: "https://ext.same-assets.com/2943831706/2991705855.jpeg",
    album: "Outside",
    duration: "2:58"
  },
  {
    id: 4,
    title: "Bodies",
    artists: ["Offset", "JID"],
    image: "https://ext.same-assets.com/2943831706/2005264145.jpeg",
    album: "Bodies",
    duration: "4:12"
  },
  {
    id: 5,
    title: "Gabriela",
    artists: ["KATSEYE"],
    image: "https://ext.same-assets.com/2943831706/1246761892.jpeg",
    album: "Gabriela",
    duration: "3:18"
  },
  {
    id: 6,
    title: "Mystical Magical",
    artists: ["Benson Boone"],
    image: "https://ext.same-assets.com/2943831706/933952845.jpeg",
    album: "Mystical Magical",
    duration: "3:32"
  },
  {
    id: 7,
    title: "Flowers",
    artists: ["Miley Cyrus"],
    image: "https://ext.same-assets.com/2943831706/1213047049.jpeg",
    album: "Endless Summer Vacation",
    duration: "3:20"
  },
  {
    id: 8,
    title: "Anti-Hero",
    artists: ["Taylor Swift"],
    image: "https://ext.same-assets.com/2943831706/2816297451.jpeg",
    album: "Midnights",
    duration: "3:21"
  },
  {
    id: 9,
    title: "Unholy",
    artists: ["Sam Smith", "Kim Petras"],
    image: "https://ext.same-assets.com/2943831706/742772603.jpeg",
    album: "Gloria",
    duration: "2:36"
  },
  {
    id: 10,
    title: "Escapism",
    artists: ["RAYE", "070 Shake"],
    image: "https://ext.same-assets.com/2943831706/616604215.jpeg",
    album: "My 21st Century Blues",
    duration: "4:07"
  }
]

const sampleArtists: Artist[] = [
  {
    id: 1,
    name: "Kendrick Lamar",
    image: "https://ext.same-assets.com/2943831706/318791108.jpeg",
    type: "Artist"
  },
  {
    id: 2,
    name: "Drake",
    image: "https://ext.same-assets.com/2943831706/4294072019.jpeg",
    type: "Artist"
  },
  {
    id: 3,
    name: "The Weeknd",
    image: "https://ext.same-assets.com/2943831706/3648391844.jpeg",
    type: "Artist"
  },
  {
    id: 4,
    name: "Taylor Swift",
    image: "https://ext.same-assets.com/2943831706/2963135723.jpeg",
    type: "Artist"
  },
  {
    id: 5,
    name: "Billie Eilish",
    image: "https://ext.same-assets.com/2943831706/2657309385.jpeg",
    type: "Artist"
  },
  {
    id: 6,
    name: "Bad Bunny",
    image: "https://ext.same-assets.com/2943831706/1355840798.jpeg",
    type: "Artist"
  }
]

const sampleAlbums: Album[] = [
  {
    id: 1,
    title: "I'm The Problem",
    artists: ["Morgan Wallen"],
    image: "https://ext.same-assets.com/2943831706/1213047049.jpeg",
    type: "Album"
  },
  {
    id: 2,
    title: "DEBÍ TIRAR MÁS FOTOS",
    artists: ["Bad Bunny"],
    image: "https://ext.same-assets.com/2943831706/860939735.jpeg",
    type: "Album"
  },
  {
    id: 3,
    title: "HIT ME HARD AND SOFT",
    artists: ["Billie Eilish"],
    image: "https://ext.same-assets.com/2943831706/2816297451.jpeg",
    type: "Album"
  },
  {
    id: 4,
    title: "GNX",
    artists: ["Kendrick Lamar"],
    image: "https://ext.same-assets.com/2943831706/742772603.jpeg",
    type: "Album"
  }
]

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [currentPage, setCurrentPage] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [userPlaylists, setUserPlaylists] = useState<Playlist[]>([
    {
      id: 'liked-songs',
      name: 'Liked Songs',
      description: 'Songs you liked',
      image: 'https://misc.scdn.co/liked-songs/liked-songs-300.png',
      tracks: [],
      createdAt: new Date()
    }
  ])
  const [likedSongs, setLikedSongs] = useState<Track[]>([])

  // Search functionality
  const searchResults = {
    tracks: searchQuery ? sampleTracks.filter(track =>
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artists.some(artist => artist.toLowerCase().includes(searchQuery.toLowerCase())) ||
      track.album.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [],
    artists: searchQuery ? sampleArtists.filter(artist =>
      artist.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [],
    albums: searchQuery ? sampleAlbums.filter(album =>
      album.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      album.artists.some(artist => artist.toLowerCase().includes(searchQuery.toLowerCase()))
    ) : []
  }

  // Playlist management
  const createPlaylist = (name: string, description = '') => {
    const newPlaylist: Playlist = {
      id: `playlist-${Date.now()}`,
      name,
      description,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      tracks: [],
      createdAt: new Date()
    }
    setUserPlaylists(prev => [...prev, newPlaylist])
    return newPlaylist
  }

  const addToPlaylist = (playlistId: string, track: Track) => {
    setUserPlaylists(prev => prev.map(playlist => {
      if (playlist.id === playlistId) {
        const trackExists = playlist.tracks.some(t => t.id === track.id)
        if (!trackExists) {
          return { ...playlist, tracks: [...playlist.tracks, track] }
        }
      }
      return playlist
    }))
  }

  const removeFromPlaylist = (playlistId: string, trackId: number) => {
    setUserPlaylists(prev => prev.map(playlist => {
      if (playlist.id === playlistId) {
        return { ...playlist, tracks: playlist.tracks.filter(t => t.id !== trackId) }
      }
      return playlist
    }))
  }

  const deletePlaylist = (playlistId: string) => {
    if (playlistId !== 'liked-songs') {
      setUserPlaylists(prev => prev.filter(p => p.id !== playlistId))
    }
  }

  // Liked songs management
  const toggleLiked = (track: Track) => {
    setLikedSongs(prev => {
      const isAlreadyLiked = prev.some(t => t.id === track.id)
      if (isAlreadyLiked) {
        return prev.filter(t => t.id !== track.id)
      } else {
        return [...prev, track]
      }
    })
  }

  const isLiked = (trackId: number) => {
    return likedSongs.some(t => t.id === trackId)
  }

  // Update liked songs playlist
  useEffect(() => {
    setUserPlaylists(prev => prev.map(playlist => {
      if (playlist.id === 'liked-songs') {
        return { ...playlist, tracks: likedSongs }
      }
      return playlist
    }))
  }, [likedSongs])

  const value: AppContextType = {
    currentTrack,
    setCurrentTrack,
    currentPage,
    setCurrentPage,
    searchQuery,
    setSearchQuery,
    searchResults,
    userPlaylists,
    createPlaylist,
    addToPlaylist,
    removeFromPlaylist,
    deletePlaylist,
    likedSongs,
    toggleLiked,
    isLiked,
    allTracks: sampleTracks,
    allArtists: sampleArtists,
    allAlbums: sampleAlbums
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
