import React from 'react'
import { ArrowRight } from 'lucide-react';
import {useNavigate} from 'react-router-dom'
import BlurCircle from './BlurCircle';
import MovieCard from './MovieCard';


const FeaturedSection = () => {


  const navigate = useNavigate()

  return (
    <div className=' w-full bg-[#09090b] py-20 px-6 lg:px-24 xl:px-28 overflow-hidden text-white'>
      <div className= 'relative flex justify-between items-center pt-20'>
        <BlurCircle top='0px' right='-90px'/>
        <h1 className='font-medium text-gray-300'>Now Showing</h1>
        <button onClick={()=>navigate('/movies')} className=' z-10 group cursor-pointer flex gap-1'>View All <ArrowRight className='group-hover:translate-x-0.5 transition h-4 w-4 mt-1'/></button>
      </div>
      <div className='flex flex-wrap mt-20 z-5 px-10 sm:px-6 gap-10'>
        <MovieCard limit={4}/>
      </div>
      <div className='flex justify-center mt-20'>
        <button onClick={()=>{navigate('/movies'); scrollTo(0,0)}} className='px-10 py-3 text-sm bg-[#f84565]/80 font-medium hover:scale-102 cursor-pointer rounded-xl'>Show more</button>
      </div>
    </div>
  )
}

export default FeaturedSection