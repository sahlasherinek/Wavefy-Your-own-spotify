import { useContext } from "react"
import Navbar from "./Navbar"
import SongsItem from "./SongsItem"
import { PlayerContext } from './../context/PlayerContext';

function DisplayMusic() {
    const { songsData } = useContext(PlayerContext)
    
    return (
        <div className="w-screen h-screen bg-black text-white overflow-y-auto">
            <Navbar />
            {/* Songs Section */}
            <div className="px-6 mb-6">
                <h1 className="my-5 font-bold text-2xl">Music Collection</h1>
                <div className="flex gap-4 overflow-x-auto no-scrollbar w-full">
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
    )
}

export default DisplayMusic