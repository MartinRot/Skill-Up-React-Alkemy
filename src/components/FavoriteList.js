import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import FavoriteButton from './FavoriteButton'

const FavoriteList = ( {favorites, addOrRemoveFromFavs} ) => {
  
  let token = sessionStorage.getItem('token')
  addOrRemoveFromFavs = {addOrRemoveFromFavs}
     
  return (
    <>
      { !token && <Navigate to="/" />} {/* Si no hay token redirige a '/' */}

      { !favorites.length && <div className='flex justify-center mt-20 min-h-screen text-white text-6xl font-semibold'>No hay favoritos</div> }

      <div className="flex flex-wrap content-start items-center justify-center min-h-screen mt-14 mb-14">
          <div className="grid grid-cols-12 gap-2 sm:gap-10 gap-y-12 w-full sm:w-9/12">
                
            { favorites.map((movie, idx) => {
              return (
              <div className="col-span-6 col-start-4 sm:col-span-6 md:col-span-6 lg:col-span-3" key={idx} >
                <div className="w-full flex flex-col">
                <div className="relative">
                  
                    {/* <!-- Image --> */}
                    <Link to={`/detalle?movieID=${movie.id}`}> 
                        <img src={movie.imageURL} className="h-auto rounded-xl brightness-90 hover:brightness-125" alt={movie.title} />
                    </Link>    
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

                        <p className="text-gray-400 text-xs mt-2 select-none" to='/'>{movie.overview.substring(0,100)} ...</p>
                        
                    </div>

                </div>
                </div>
              </div>
              )
            })                
            }

        </div>
      </div>
    </>
  )
}

export default FavoriteList