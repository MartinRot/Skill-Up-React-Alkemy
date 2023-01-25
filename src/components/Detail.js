import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'
import FavoriteButton from './FavoriteButton';


const Detail = (addOrRemoveFromFavs) => {

  let token = sessionStorage.getItem('token')
  let query = new URLSearchParams(window.location.search)
  let movieID = query.get('movieID')

  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(false)
 
  let esteno = movie.release_date;
  let estrenoFormateado = formato(esteno);
 
  function formato(esteno){
      if(!esteno) return
      return esteno.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
  }

  useEffect(() => {
    
    setLoading(true)
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=3345c3b172828f6f4707e4be391adc50&language=es-ES`
    
    axios.get(endPoint).then(response => {
      const movieData = response.data
      setMovie(movieData)
      //console.log(movieData)
    })
    .catch(error => {
      console.log('Hubo errores, intenta nuevamente mas tarde.', error)
    })
    .finally(
      setLoading(false)
    )      
    
  },[movieID])

  return (

    <>
      { !token && <Navigate to="/" />} {/* Si no hay token redirige a '/' */}

      { loading? <Loading /> :

        <div className="container px-5 py-14 mx-auto text-white min-h-[88vh]">

          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center">
            
            <img alt="movie poster" className="w-2/3 sm:w-3/6 xl:w-2/5 rounded border border-gray-700" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 h-full mt-6 lg:mt-0 ">

              <div className='flex mb-2'>
                <h2 className="text-xl lg:text-3xl text-gray-200 tracking-widest font-semibold lg:font-bold mr-4">{movie.title}</h2>
                <FavoriteButton addOrRemoveFromFavs={addOrRemoveFromFavs} />
              </div>

              <h1 className="text-gray-200 text-sm lg:text-xl title-font font-medium">Fecha de estreno: {estrenoFormateado}</h1>

              <div className="flex mb-2 mt-2">

                <span className="flex items-center">                
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>

                  <span className="text-gray-600 ml-3">{movie.vote_count} Votos</span>
                </span>   

              </div>

              <h5 className='leading.relaxed font-bold'>Reseña:</h5>
              <p className="leading-relaxed">{movie.overview}</p>

              <h5 className='leading.relaxed font-bold mt-2'>Generos:</h5>
              {movie.genres?.map(oneGenre => <span className='font-normal' key={oneGenre.id}> {oneGenre.name}.</span>)}
      
              <div className="mt-6 sm:mt-32 xl:mt-52 pb-5 border-b-2 border-gray-200 mb-5" />

            </div>
          </div>
        </div>

      }

    </>

  )
}

export default Detail