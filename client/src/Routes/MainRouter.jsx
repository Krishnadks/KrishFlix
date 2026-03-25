import {Route, Router, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Favorite from '../pages/Favorite';
import Seatlayout from '../pages/Seatlayout';
import Mybooking from '../pages/Mybooking';
const MainRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/moviedetails' element={<MovieDetails/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/seat' element={<Seatlayout/>} />
        <Route path='/mybooking' element={<Mybooking/>}/>
    </Routes>
  )
}

export default MainRouter