import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Heart, Volume2, Monitor, Maximize2 } from 'lucide-react'
import { useState } from 'react'
import type { Track } from '../types'

interface MusicPlayerProps {
  currentTrack: Track | null
}

const MusicPlayer = ({ currentTrack }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(33)
  const [volume, setVolume] = useState(70)

  if (!currentTrack) {
    return (
      <div className="h-24 bg-gray-900 border-t border-gray-800 flex items-center justify-between px-4">
        <div className="flex items-center space-x-4 flex-1">
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-gray-700 rounded" />
            <div>
              <p className="text-gray-400 text-sm">Nothing is playing</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Shuffle size={20} className="text-gray-400" />
          <SkipBack size={20} className="text-gray-400" />
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <Play size={16} className="text-gray-400" />
          </div>
          <SkipForward size={20} className="text-gray-400" />
          <Repeat size={20} className="text-gray-400" />
        </div>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <Volume2 size={20} className="text-gray-400" />
          <div className="w-20 h-1 bg-gray-700 rounded-full" />
        </div>
      </div>
    )
  }

  return (
    <div className="h-24 bg-gray-900 border-t border-gray-800 flex items-center justify-between px-4">
      {/* Track Info */}
      <div className="flex items-center space-x-4 flex-1 min-w-0">
        <div className="flex items-center space-x-3">
          <img
            src={currentTrack.image}
            alt={currentTrack.title}
            className="w-14 h-14 rounded"
          />
          <div className="min-w-0">
            <h4 className="text-white text-sm font-medium truncate">{currentTrack.title}</h4>
            <p className="text-gray-400 text-xs truncate">
              {currentTrack.artists.join(', ')}
            </p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-spotify-green transition-colors">
          <Heart size={16} />
        </button>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center space-y-2 flex-1 max-w-md">
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Shuffle size={20} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipBack size={20} />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause size={16} className="text-black" />
            ) : (
              <Play size={16} className="text-black ml-0.5" />
            )}
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipForward size={20} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Repeat size={20} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center space-x-2 w-full">
          <span className="text-gray-400 text-xs">1:23</span>
          <div className="flex-1 h-1 bg-gray-600 rounded-full relative group cursor-pointer">
            <div
              className="h-full bg-white rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100" />
            </div>
          </div>
          <span className="text-gray-400 text-xs">4:02</span>
        </div>
      </div>

      {/* Volume & Additional Controls */}
      <div className="flex items-center space-x-4 flex-1 justify-end">
        <button className="text-gray-400 hover:text-white transition-colors">
          <Monitor size={16} />
        </button>
        <div className="flex items-center space-x-2">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Volume2 size={16} />
          </button>
          <div className="w-24 h-1 bg-gray-600 rounded-full relative group cursor-pointer">
            <div
              className="h-full bg-white rounded-full relative"
              style={{ width: `${volume}%` }}
            >
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100" />
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Maximize2 size={16} />
        </button>
      </div>
    </div>
  )
}

export default MusicPlayer
