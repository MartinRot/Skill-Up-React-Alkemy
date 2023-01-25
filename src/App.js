import { Routes, Route, useNavigate } from 'react-router-dom'

/* Components */
import Login from "./components/Login";
import Listado from './components/Listado';
import Footer from './components/Footer';
import Detail from './components/Detail';
import NavBar from './components/NavBar';
import Resultados from './components/Resultados';
import FavoriteList from './components/FavoriteList';
import { useEffect, useState } from 'react';

function App() {

  function onLogout(){
    sessionStorage.clear()
    navigate('/')
  }

  const navigate = useNavigate()  

  /* Fav */
  const [ favorites, setFavorites ] = useState([])

  useEffect(() => {

    const favsInLocal = localStorage.getItem('favs')
    
    if(favsInLocal != null){
      const favsArray = JSON.parse(favsInLocal)
      setFavorites(favsArray)
    }

  },[])  

  const addOrRemoveFromFavs = e => {
    
    const favMovies = localStorage.getItem('favs')
    let tempMoviesInFavs
  
    if (favMovies === null ){
      tempMoviesInFavs = []
    } else {
      tempMoviesInFavs = JSON.parse(favMovies)
    }

    const btn = e.currentTarget
    const parent = btn.parentElement.parentElement.parentElement.parentElement  
    
    const imageURL = parent.querySelector('img').getAttribute('src')
    const title = parent.querySelector('h5').innerText
    const overview = parent.querySelector('p').innerText
    
    const movieData = {
      imageURL, title, overview,
      id: btn.dataset.movieId
    }
    
    let movieInArray = tempMoviesInFavs.find(oneMovie => {
      return oneMovie.id === movieData.id
    })

    if(!movieInArray){
      tempMoviesInFavs.push(movieData)
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs))
      setFavorites(tempMoviesInFavs)
      //console.log('Se agrego la pelicula')
    } else {
      let moviesLeft = tempMoviesInFavs.filter(oneMovie => {
        return oneMovie.id !== movieData.id
      })      
      localStorage.setItem('favs', JSON.stringify(moviesLeft))
      setFavorites(moviesLeft)
      //console.log('Se elimino la pelicula')
    }

  }
  
  return (

    <div className='bg-gray-900 flex flex-col' >

      <NavBar onLogout={onLogout} favorites={favorites} />
      
      <Routes>

        <Route path='/' element={ <Login /> } />
        <Route path='/listado' element={ <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} /> }  />
        <Route path='/detalle' element={ <Detail addOrRemoveFromFavs={addOrRemoveFromFavs} /> } />
        <Route path='/resultados' element={ <Resultados addOrRemoveFromFavs={addOrRemoveFromFavs} /> } />
        <Route path='/favoritos' element={ <FavoriteList addOrRemoveFromFavs={addOrRemoveFromFavs} favorites={favorites} /> } />

      </Routes>
      
      <Footer />
    </div>
    
  );
}

export default App;
