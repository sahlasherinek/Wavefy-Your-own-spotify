import { useContext } from "react"
import AlbumItem from "./AlbumItem"
import Navbar from "./Navbar"
import SongsItem from "./SongsItem"
import { PlayerContext } from './../context/PlayerContext';

function DisplayHome() {
    const { songsData, albumsData } = useContext(PlayerContext)
    
    return (
        <>
          <div className="w-screen h-screen bg-black text-white overflow-y-auto">
      <Navbar />

      {/* Albums Section */}
      <div className="px-6">
        <h1 className="my-5 font-bold text-2xl">Your Albums</h1>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {albumsData.length > 0 ? (
            albumsData.map((item, index) => (
              <AlbumItem
                key={index}
                image={item.image}
                name={item.name}
                desc={item.desc}
                id={item._id}
              />
            ))
          ) : (
            <div className="flex items-center justify-center w-full py-8">
              <div className="text-center text-gray-400">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto mb-2"></div>
                <p>Loading albums...</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Songs Section */}
      <div className="px-6 mb-6">
        <h1 className="my-5 font-bold text-2xl">Your Songs</h1>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {songsData.length > 0 ? (
            songsData.map((item, index) => (
              <SongsItem
                key={index}
                image={item.image}
                name={item.name}
                desc={item.desc}
                id={item._id}
              />
            ))
          ) : (
            <div className="flex items-center justify-center w-full py-8">
              <div className="text-center text-gray-400">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto mb-2"></div>
                <p>Loading songs...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
        </>
    )
}

export default DisplayHome