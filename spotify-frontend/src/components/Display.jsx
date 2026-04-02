import { Route, Routes, useLocation } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import DisplayAlbum from "./DisplayAlbum"
import DisplayMusic from "./DisplayMusic"
import DisplayPodcasts from "./DisplayPodcasts"
import { useContext, useEffect, useRef } from "react"
import { PlayerContext } from "../context/PlayerContext";

function Display() {
    const { albumsData } = useContext(PlayerContext);

    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.split('/').pop() : "";
    const bgColor = isAlbum && albumsData.length > 0 ? albumsData.find((album) => (album._id === albumId)).bgColour : "#121212";

    useEffect(() => {
        if (isAlbum) {
            displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
        } else {
            displayRef.current.style.background = `#121212`;
        }
    }, [isAlbum, bgColor]);

    return (
        <div ref={displayRef} className="w-full">
            <Routes>
                <Route path="/" element={<DisplayHome />} />
                <Route path="/album/:id" element={<DisplayAlbum album={albumsData.find((album) => (album._id == albumId))} />} />
                <Route path="/music" element={<DisplayMusic />} />
                <Route path="/podcasts" element={<DisplayPodcasts />} />
            </Routes>
        </div>
    )
}

export default Display