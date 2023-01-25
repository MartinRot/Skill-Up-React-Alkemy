import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import Card from './Card';
import Loading from './Loading';

const Resultados = ( addOrRemoveFromFavs ) => {
    
  let query = new URLSearchParams(window.location.search)
  let search = query.get('search')
  let token = sessionStorage.getItem('token')

  const [moviesResults, setMoviesResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    setLoading(true)
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=3345c3b172828f6f4707e4be391adc50&language=es-ES&page=1&include_adult=false&query=${search}`
    axios.get(endpoint)
      .then(response => {
        const apiData = response.data.results
        if(apiData.length === 0){
            swal('La busqueda no arrojo resultados')
        }
        setMoviesResults(apiData)
        //console.log(moviesResults)
      })
      .catch(error => {
        swal('Ocurrio un error, intenta nuevamente mas tarde')
        console.log(error)
      })
      .finally(
        setLoading(false)
      )      

  },[search])

  return (

    <>
      { !token && <Navigate to="/" />} {/* Si no hay token redirige a '/' */}

      { loading? <Loading /> :
    
        <div className="flex items-center justify-start min-h-screen mt-10 mb-10 flex-col">
            <p className='text-white font-semibold text-3xl mb-10'>Buscaste: {search}</p>
            <div className="grid grid-cols-12 gap-2 sm:gap-10 gap-y-12 w-full sm:w-9/12">

            { moviesResults.map(( movie, index ) => { 
                return < Card movie={movie} key={index} addOrRemoveFromFavs={addOrRemoveFromFavs} />
            }) }          

            </div>
        </div>

        }

    </>
      
  )
}

export default Resultados