import { Play, MoreHorizontal } from 'lucide-react'
import MusicCard from './MusicCard'
import ArtistCard from './ArtistCard'
import type { Track } from '../types'

interface MainContentProps {
  currentPage: string
  setCurrentTrack: (track: Track) => void
}

const MainContent = ({ currentPage, setCurrentTrack }: MainContentProps) => {
  const trendingSongs = [
    {
      id: 1,
      title: "Golden",
      artists: ["HUNTR/X", "EJAE", "AUDREY NUNA", "REI AMI"],
      image: "https://ext.same-assets.com/2943831706/54040904.jpeg",
      album: "Golden"
    },
    {
      id: 2,
      title: "6 Months Later",
      artists: ["Megan Moroney"],
      image: "https://ext.same-assets.com/2943831706/4150032873.jpeg",
      album: "6 Months Later"
    },
    {
      id: 3,
      title: "Outside",
      artists: ["Cardi B"],
      image: "https://ext.same-assets.com/2943831706/2991705855.jpeg",
      album: "Outside"
    },
    {
      id: 4,
      title: "Bodies",
      artists: ["Offset", "JID"],
      image: "https://ext.same-assets.com/2943831706/2005264145.jpeg",
      album: "Bodies"
    },
    {
      id: 5,
      title: "Gabriela",
      artists: ["KATSEYE"],
      image: "https://ext.same-assets.com/2943831706/1246761892.jpeg",
      album: "Gabriela"
    },
    {
      id: 6,
      title: "Mystical Magical",
      artists: ["Benson Boone"],
      image: "https://ext.same-assets.com/2943831706/933952845.jpeg",
      album: "Mystical Magical"
    }
  ]

  const popularArtists = [
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
      name: "Morgan Wallen",
      image: "https://ext.same-assets.com/2943831706/2333334140.jpeg",
      type: "Artist"
    },
    {
      id: 5,
      name: "Post Malone",
      image: "https://ext.same-assets.com/2943831706/1445850626.jpeg",
      type: "Artist"
    },
    {
      id: 6,
      name: "Rihanna",
      image: "https://ext.same-assets.com/2943831706/1355840798.jpeg",
      type: "Artist"
    }
  ]

  const popularAlbums = [
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

  const charts = [
    {
      id: 1,
      title: "Top Songs - Global",
      description: "Your weekly update of the most played tracks right now - Global.",
      image: "https://ext.same-assets.com/2943831706/409923096.jpeg"
    },
    {
      id: 2,
      title: "Top Songs - USA",
      description: "Your weekly update of the most played tracks right now - USA.",
      image: "https://ext.same-assets.com/2943831706/1503848467.jpeg"
    },
    {
      id: 3,
      title: "Top 50 - Global",
      description: "Your daily update of the most played tracks right now - Global.",
      image: "https://ext.same-assets.com/2943831706/1149261839.jpeg"
    },
    {
      id: 4,
      title: "Viral 50 - Global",
      description: "Your daily update of the most viral tracks right now - Global.",
      image: "https://ext.same-assets.com/2943831706/3205164464.jpeg"
    }
  ]

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 via-gray-900 to-black overflow-y-auto">
      <div className="p-6 space-y-8">
        {/* Good morning/afternoon greeting */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-6">Good evening</h1>

          {/* Quick access tiles */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Liked Songs", image: "https://ext.same-assets.com/2943831706/409923096.jpeg" },
              { title: "Discover Weekly", image: "https://ext.same-assets.com/2943831706/1503848467.jpeg" },
              { title: "Release Radar", image: "https://ext.same-assets.com/2943831706/1149261839.jpeg" },
              { title: "Daily Mix 1", image: "https://ext.same-assets.com/2943831706/3205164464.jpeg" },
              { title: "Your Top Songs 2024", image: "https://ext.same-assets.com/2943831706/409923096.jpeg" },
              { title: "Recently Played", image: "https://ext.same-assets.com/2943831706/1503848467.jpeg" }
            ].map((item) => (
              <div key={item.title} className="bg-gray-800 bg-opacity-50 rounded flex items-center hover:bg-opacity-70 transition-all group cursor-pointer">
                <img src={item.image} alt={item.title} className="w-20 h-20 rounded-l" />
                <span className="text-white font-medium px-4 flex-1">{item.title}</span>
                <div className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center mr-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={20} fill="black" className="text-black ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Songs */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Trending songs</h2>
            <button className="text-gray-400 hover:text-white text-sm font-medium">Show all</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {trendingSongs.map((song) => (
              <MusicCard
                key={song.id}
                title={song.title}
                artists={song.artists}
                image={song.image}
                type="song"
                onClick={() => setCurrentTrack(song)}
              />
            ))}
          </div>
        </section>

        {/* Popular Artists */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Popular artists</h2>
            <button className="text-gray-400 hover:text-white text-sm font-medium">Show all</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {popularArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                name={artist.name}
                image={artist.image}
                type={artist.type}
              />
            ))}
          </div>
        </section>

        {/* Popular Albums */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Popular albums and singles</h2>
            <button className="text-gray-400 hover:text-white text-sm font-medium">Show all</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {popularAlbums.map((album) => (
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

        {/* Popular Radio */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Popular radio</h2>
            <button className="text-gray-400 hover:text-white text-sm font-medium">Show all</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[
              {
                id: 1,
                title: "Morgan Wallen Radio",
                description: "With Luke Combs, Bailey Zimmerman, Jordan Davis and more",
                image: "https://ext.same-assets.com/2943831706/1917721068.jpeg"
              },
              {
                id: 2,
                title: "Drake Radio",
                description: "With Lil Uzi Vert, Tory Lanez, Frank Ocean and more",
                image: "https://ext.same-assets.com/2943831706/2859824144.jpeg"
              },
              {
                id: 3,
                title: "SZA Radio",
                description: "With Frank Ocean, Daniel Caesar, Summer Walker and more",
                image: "https://ext.same-assets.com/2943831706/1201438982.jpeg"
              },
              {
                id: 4,
                title: "Post Malone Radio",
                description: "With Morgan Wallen, Khalid, Marshmello and more",
                image: "https://ext.same-assets.com/2943831706/916650369.jpeg"
              },
              {
                id: 5,
                title: "Taylor Swift Radio",
                description: "With Katy Perry, Harry Styles, Conan Gray and more",
                image: "https://ext.same-assets.com/2943831706/2396644411.jpeg"
              }
            ].map((radio) => (
              <div key={radio.id} className="bg-gray-800 bg-opacity-30 p-4 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer group spotify-card">
                <div className="relative mb-4">
                  <img src={radio.image} alt={radio.title} className="w-full aspect-square object-cover rounded-lg" />
                  <div className="absolute bottom-2 right-2 w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <Play size={20} fill="black" className="text-black ml-1" />
                  </div>
                </div>
                <h3 className="text-white font-medium mb-1">{radio.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">{radio.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Charts */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Featured Charts</h2>
            <button className="text-gray-400 hover:text-white text-sm font-medium">Show all</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {charts.map((chart) => (
              <div key={chart.id} className="bg-gray-800 bg-opacity-30 p-4 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer group spotify-card">
                <div className="relative mb-4">
                  <img src={chart.image} alt={chart.title} className="w-full aspect-square object-cover rounded-lg" />
                  <div className="absolute bottom-2 right-2 w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <Play size={20} fill="black" className="text-black ml-1" />
                  </div>
                </div>
                <h3 className="text-white font-medium mb-1">{chart.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">{chart.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Throwback Thursday */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Throwback Thursday</h2>
            <button className="text-gray-400 hover:text-white text-sm font-medium">Show all</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {[
              {
                id: 1,
                title: "Throwback Thursday",
                description: "#SpotifyTBT this week is all about 80s summer hits. Cover: Bruce Springsteen",
                image: "https://ext.same-assets.com/2943831706/3506968830.jpeg"
              },
              {
                id: 2,
                title: "All Out 2010s",
                description: "The biggest songs of the 2010s. Cover: Lady Gaga",
                image: "https://ext.same-assets.com/2943831706/543469725.jpeg"
              },
              {
                id: 3,
                title: "All Out 2000s",
                description: "The biggest songs of the 2000s. Cover: Britney Spears",
                image: "https://ext.same-assets.com/2943831706/1500756829.jpeg"
              },
              {
                id: 4,
                title: "All Out 90s",
                description: "The biggest songs of the 1990s. Cover: Cher",
                image: "https://ext.same-assets.com/2943831706/855184012.jpeg"
              },
              {
                id: 5,
                title: "All Out 80s",
                description: "The biggest songs of the 1980s. Cover: Madonna",
                image: "https://ext.same-assets.com/2943831706/1554916613.jpeg"
              },
              {
                id: 6,
                title: "All Out 70s",
                description: "The biggest songs of the 1970s. Cover: ABBA",
                image: "https://ext.same-assets.com/2943831706/3022305653.jpeg"
              }
            ].map((throwback) => (
              <MusicCard
                key={throwback.id}
                title={throwback.title}
                artists={[throwback.description]}
                image={throwback.image}
                type="album"
                onClick={() => console.log('Throwback playlist clicked:', throwback.title)}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Jobs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">For the Record</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Communities</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">For Artists</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Developers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Advertising</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Investors</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Vendors</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Useful links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Free Mobile App</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Spotify Plans</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Premium Individual</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Premium Duo</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Premium Family</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Premium Student</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Spotify Free</a></li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between pt-8 border-t border-gray-800">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-sm">© 2025 Spotify AB</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MainContent
