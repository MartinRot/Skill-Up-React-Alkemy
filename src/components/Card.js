import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteButton from './FavoriteButton';


const Card = ( {movie, addOrRemoveFromFavs} ) => { 
    
    let esteno = movie.release_date;
    let estrenoFormateado = formato(esteno);
    //console.log(estrenoFormateado);
   
    function formato(esteno){
        return esteno.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
    }

  return (
    /* sm - md - lg */
    <div className="col-span-6 col-start-4 sm:col-span-6 md:col-span-6 lg:col-span-3" >
        <div className="w-full flex flex-col">
        <div className="relative">

            {/* <!-- Image --> */}
            <Link to={`/detalle?movieID=${movie.id}`}> 
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="h-auto rounded-xl brightness-90 hover:brightness-125" alt={movie.title} />
            </Link>            

            <div
            className="absolute right-2 bottom-2 bg-gray-800 w-10 h-10 rounded-full border-sky-600  border-solid border-2  flex justify-center items-center ">
                <div>
                    <h1 className="text-white text-xs font-bold select-none">{movie.vote_average}%</h1>
                </div>
            </div>

        </div>

        <div className="flex flex-row mt-2 gap-2">

            {/* <!-- Description --> */}
            <div className="flex flex-col">

                <div className='flex justify-between items-center'>
                    <Link to={`/detalle?movieID=${movie.id}`}>
                        <h5 className="text-gray-100 text-sm font-semibold">{movie.title} </h5>
                    </Link>                    
                    <FavoriteButton addOrRemoveFromFavs={addOrRemoveFromFavs} id={movie.id} />
                </div>

                {/* <Link className="text-gray-400 text-xs mt-2 hover:text-gray-100" to='/'>Alkemy Studios</Link> */}
                <p className="text-gray-400 text-xs mt-2 select-none" to='/'>{movie.overview.substring(0,100)} ...</p>
                {/* <p className="text-gray-400 text-xs mt-1">241K views. 3 years ago</p> */}
                <p className="text-gray-400 text-xs mt-1 select-none">Estreno {estrenoFormateado}</p>
            </div>

        </div>
        </div>
    </div>
    
    
  )
}

export default Card