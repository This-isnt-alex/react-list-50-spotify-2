export interface Track {
  id: number
  title: string
  artists: string[]
  image: string
  album: string
  duration?: string
}

export interface Artist {
  id: number
  name: string
  image: string
  type: string
}

export interface Album {
  id: number
  title: string
  artists: string[]
  image: string
  type: string
}

export interface PlaylistItem {
  id: string
  title: string
  image: string
}

export interface Playlist {
  id: string
  name: string
  description: string
  image: string
  tracks: Track[]
  createdAt: Date
}
