import { useContext } from "react"
import Navbar from "./Navbar"
import { PlayerContext } from './../context/PlayerContext';

function DisplayPodcasts() {
    return (
        <div className="w-screen h-screen bg-black text-white overflow-y-auto">
            <Navbar />
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Podcasts</h1>
                <div className="flex items-center justify-center w-full py-8">
                    <div className="text-center text-gray-400">
                        <p>No podcasts available at the moment.</p>
                        <p className="mt-2">Check back later for new content!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayPodcasts