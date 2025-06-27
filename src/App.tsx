import { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import MusicPlayer from './components/MusicPlayer'
import TopBar from './components/TopBar'
import type { Track } from './types'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* Main Layout */}
      <div className="flex-1 flex min-h-0">
        {/* Sidebar */}
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <TopBar />
          <MainContent currentPage={currentPage} setCurrentTrack={setCurrentTrack} />
        </div>
      </div>

      {/* Music Player */}
      <MusicPlayer currentTrack={currentTrack} />
    </div>
  )
}

export default App
