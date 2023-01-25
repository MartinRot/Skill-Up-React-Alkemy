import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar';

const NavBar = ( {onLogout, favorites} ) => {

    let token = sessionStorage.getItem('token')
    
    return (

        <>

        { token? 

            <div className="flex flex-col items-center justify-center mt-32" >
                <div className="flex flex-col">

                    {/* <!-- Navbar -->  */}
                    <nav className="flex justify-around py-4 bg-gray-800 w-full fixed top-0 left-0 right-0 z-10">  

                        {/* <!-- Logo Container --> */}
                        <div className="flex items-center">
                            {/* <!-- Logo --> */}
                                <h3 className="text-sky-200 font-semibold md:font-bold text-xs sm:text-base lg:text-xl select-none">
                                    Alkemy Cinema
                                </h3>
                        </div>

                        {/* <!-- Links Section --> */}
                        <div className="items-center flex space-x-2 sm:space-x-8 text-xs sm:text-xl">             
                            <Link to={'/listado'} className="flex text-white hover:text-sky-600
                                transition-colors duration-300
                                font-semibold">
                                Listado
                            </Link>
                        </div>

                        <div className="items-center flex space-x-2 sm:space-x-8 text-xs sm:text-xl">             
                            <Link to={'/favoritos'} className="flex text-white hover:text-sky-600
                                transition-colors duration-300
                                font-semibold">
                                Favoritos
                                { favorites.length > 0 && <sup className='text-red-600 p-1'>({favorites.length})</sup> }
                            </Link>
                        </div>

                        {/* <!-- Logout Section --> */}
                        <div className="flex items-center text-xs sm:text-xl">
                            <Link onClick={onLogout} className="flex text-white hover:text-sky-600
                                cursor-pointer transition-colors duration-300
                                font-semibold">
                                Logout
                            </Link>
                        </div>                       

                    </nav>

                    <div className="flex justify-around py-4 w-full fixed top-0 left-0 right-0 z-10 mt-14 bg-fondoOpacity">
                        <SearchBar />
                    </div>

                </div>
            </div>
            
        :

            <div className="flex items-center justify-center h-28">
                <h3 className="text-sky-200 font-semibold md:font-bold sm:text-2xl lg:text-4xl">
                    Alkemy Cinema
                </h3>
            </div>
    
        }

        </>
    
  )
}

export default NavBar