import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { assets } from '../assets/frontend-assets/assets';
import { PlayerContext } from '../context/PlayerContext';
import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const DisplayAlbum = ({ album }) => {

    const { id } = useParams();
    const [albumData, setAlbumData] = useState("");
    const { playWithId, albumsData, songsData, track, play, pause, playStatus } = useContext(PlayerContext);
    const [hoveredSongId, setHoveredSongId] = useState(null); // Hover state

    useEffect(() => {
        albumsData.map((item) => {
            if (item._id === id) {
                setAlbumData(item);
            }
        });
    }, [albumsData, id]);

    const handleMouseEnter = (songId) => {
        setHoveredSongId(songId);
    };

    const handleMouseLeave = () => {
        setHoveredSongId(null);
    };

    return albumData ? (
        <div className="w-screen h-screen bg-black text-white overflow-y-auto">
            <Navbar />
            <div className="mt-10 flex flex-col md:flex-row md:items-end gap-8">
                <img className='w-48 h-48 object-cover rounded' src={albumData.image} alt="" />
                <div className="flex flex-col gap-3">
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-2 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <div className='flex items-center'>
                        <img className='inline-block w-5 h-5 mr-2' src={assets.spotify_logo} alt="spotify_logo" />
                        <b className='mr-2'>Spotify</b>
                        <span className='text-gray-300'>• 1,323,154 likes</span>
                        <b className='mx-2'>• 50 songs</b>
                        <span className='text-gray-300'>- about 2 hr. 30 min.</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                <p>#<b className='ml-2'>Title</b></p>
                <p>Name</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='m-auto w-4 h-4' src={assets.clock_icon} alt="clock_icon" />
            </div>
            <hr />
            {songsData.filter((item) => item.album === album.name).map((item, index) => (
                <div
                    key={index}
                    onClick={() => hoveredSongId === item._id && playStatus ? pause() : playWithId(item._id)}
                    className="grid grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(item._id)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className='flex items-center w-10'>
                        {track._id === item._id && playStatus ? (
                            <img className={hoveredSongId === item._id ? "m-auto w-5 h-5 mr-4" : 'object-contain m-auto mr-4 w-5 h-5'} src={hoveredSongId === item._id ? assets.pause_icon : assets.music_gif} alt="gif" />
                        ) : hoveredSongId === item._id ? (
                            <img className='m-auto w-5 h-5 mr-4' onClick={play} src={assets.play_icon} alt="gif" />
                        ) : (
                            <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                        )}
                        <img style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "8px" }} className='inline-block mr-5' src={item.image} alt="" />
                    </div>
                    <p className='text-[15px] font-bold'>{item.name}</p>
                    <p className='text-[15px] hidden sm:block'>5 days ago</p>
                    <p className='text-[15px] text-center'>{item.duration}</p>
                </div>
            ))}
        </div>
    ) : null
}
DisplayAlbum.propTypes = {
    album: PropTypes.object
};

export default DisplayAlbum;
