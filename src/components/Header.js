import React from 'react'
import { Link } from 'react-router-dom'

const Header = ( {onLogout} ) => {

    return (

    <nav className="sticky top-0 select-none bg-grey flex justify-center sm:justify-start w-full bg-gray-800 h-14 items z-50">

        <div className='flex flex-no-shrink items-center text-sky-200 font-semibold md:font-bold text-xs lg:text-base m-1 md:ml-7 w-1/6'>Alkemy Prime Video</div>

        <div className="flex flex-no-shrink ml-2 md:ml-7">
            <Link className='py-1 md:py-2 px-2 md:px-4 ml-1 md:ml-3 leading-normal text-white no-underline flex items-center hover:bg-sky-200 hover:text-black font-semibold' to='/'>Home</Link>
            <Link className='py-1 md:py-2 px-2 md:px-4 ml-1 md:ml-3 leading-normal text-white no-underline flex items-center hover:bg-sky-200 hover:text-black font-semibold' to='/listado'>Listado</Link>
        </div>

        <div className="flex flex-no-shrink ml-1 md:ml-7 w-full justify-end mr-10 sm:mr-1 sm:justify-end">
            <p className='sm:py-2 sm:px-4 sm:ml-3 leading-normal text-white no-underline flex items-center hover:bg-sky-200 hover:text-black font-semibold cursor-pointer w-1/6' onClick={onLogout}>Logout</p>
        </div>

    </nav>

  )
}

export default Header