import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/frontend-assets/assets'

function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            {/* <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="arrow_left" />
                    <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="arrow_right" />
                </div> */}
                {/* <div className="flex items-center gap-4">
                    <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
                    <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
                    <p className='bg-sky-400 text-black w-7 h-7 rounded-full flex items-center justify-center'>N</p>
                </div> */}
                  {/* <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
                  <h1 className="text-2xl font-bold">WELCOME TO WAVEFY</h1>
                    <p className="text-sm text-gray-300">Your own spotify</p>
                    </div> */}

            {/* </div>
            <div className="flex items-center gap-2 mt-4">
                <p onClick={() => navigate('/')} className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
                <p onClick={() => navigate('/music')} className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
                <p onClick={() => navigate('/podcasts')} className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
            </div> */}
     <div className="w-full relative flex items-center justify-between font-semibold px-6 py-4 mb-2 mt-1">
  {/* Left - Arrows */}
  <div className="flex items-center gap-2">
    <img
      onClick={() => navigate(-1)}
      className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
      src={assets.arrow_left}
      alt="arrow_left"
    />
    <img
      onClick={() => navigate(1)}
      className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
      src={assets.arrow_right}
      alt="arrow_right"
    />
  </div>

  {/* Center - Title + Tagline */}
  <div className="absolute left-1/2 transform -translate-x-1/2 text-center leading-tight">
    <h1 className="text-3xl font-bold">WELCOME TO WAVEFY</h1>
    <p className="text-sm text-gray-300">Your own spotify</p>
  </div>

  {/* Right - Buttons */}
  <div className="flex items-center gap-2">
    <p
      onClick={() => navigate('/')}
      className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer"
    >
      All
    </p>
    <p
      onClick={() => navigate('/music')}
      className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer"
    >
      Music
    </p>
    {/* <p
      onClick={() => navigate('/podcasts')}
      className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer"
    >
      Podcasts
    </p> */}
  </div>
</div>

        </>
    )
}

export default Navbar