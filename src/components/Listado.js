import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import Card from './Card'

/* Api Key -> 3345c3b172828f6f4707e4be391adc50 */

const Listado = (addOrRemoveFromFavs) => {

  let token = sessionStorage.getItem('token')
  const [ moviesList, setMoviesList ] = useState([])

  useEffect(() => {

    const endpoint = 'https://api.themoviedb.org/3/discover/movie?api_key=3345c3b172828f6f4707e4be391adc50&language=es-ES&page=1'
    axios.get(endpoint)
      .then(response => {
        const apiData = response.data
        setMoviesList(apiData.results)
      })
      .catch(error => {
        swal('Ocurrio un error, intenta nuevamente mas tarde')
        console.log(error)
      })

  }, [setMoviesList]) 
  //console.log(moviesList)

  return (
    /* sm - md - lg */
    <>
      { !token && <Navigate to="/" />} {/* Si no hay token redirige a '/' */}

      <div className="flex items-center justify-center min-h-screen mt-14 mb-14">
        <div className="grid grid-cols-12 gap-2 sm:gap-10 gap-y-12 w-full sm:w-9/12">          

          { moviesList.map(( movie, index ) => { 
            return < Card movie={movie} key={index} addOrRemoveFromFavs={addOrRemoveFromFavs} />
          }) }          

        </div>
      </div>
    </>

  )
  
}

export default Listado