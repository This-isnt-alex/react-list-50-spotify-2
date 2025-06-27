import { Play } from 'lucide-react'

interface ArtistCardProps {
  name: string
  image: string
  type: string
}

const ArtistCard = ({ name, image, type }: ArtistCardProps) => {
  return (
    <div className="bg-gray-800 bg-opacity-30 p-4 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer group spotify-card">
      <div className="relative mb-4">
        <img
          src={image}
          alt={name}
          className="w-full aspect-square object-cover rounded-full"
        />
        <div className="absolute bottom-2 right-2 w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          <Play size={20} fill="black" className="text-black ml-1" />
        </div>
      </div>
      <h3 className="text-white font-medium mb-1 truncate">{name}</h3>
      <p className="text-gray-400 text-sm">{type}</p>
    </div>
  )
}

export default ArtistCard
