import MovieCard from '../components/MovieCard'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import BlurCircle from '../components/BlurCircle';

const Movies = () => {
  return (
    <>
    <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <BlurCircle bottom='0' left='-60px'/>
      <div className='px-15 h-[150vh] sm:px-15 py-40 bg-[#09090b] xl:px-35 text-white'>
      <h1 className='font-medium'>Now Showing</h1>
      <div className='flex flex-wrap gap-8 mt-10'>
      <MovieCard/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Movies