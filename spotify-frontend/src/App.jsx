import { useContext } from 'react'
import Display from './components/Display'
import Player from './components/Player'
//import Sidebar from './components/Sidebar'
import { PlayerContext } from './context/PlayerContext'

const App = () => {

  const { audioRef, track, songsData } = useContext(PlayerContext);

  return (
    <div className='h-screen bg-[#121212]'>
      {songsData.length !== 0 ?
        <>
          <div className="h-[90%] w-full">
            {/* {<Sidebar /> } */}
            <Display />
          </div>
          <Player />
        </>
        : <div className="h-full flex items-center justify-center text-white">
            <div className="text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500 mx-auto mb-4"></div>
              <p>Loading...</p>
            </div>
          </div>}
      <audio ref={audioRef} src={track ? track.file : ""} preload='none'></audio>
    </div>
  )
}

export default App