import React from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const SearchBar = () => {

    const navigate = useNavigate()

    const submitHandler = e => {
        e.preventDefault()

        const search = e.currentTarget.search.value.trim()

        if(search.length === 0){
            swal('El campo de busqueda no puede estar vacio')
        }else if (search.length < 4){
            swal('Tienes que escribir más de 4 caracteres')
        }else{
            e.currentTarget.search.value = ''
            navigate(`/resultados?search=${search}`)
        }

    }


  return (

        <div className="max-w-2xl mx-auto w-full">

            <form onSubmit={submitHandler}>
                <label htmlFor="search" className="mb-2 text-sm font-medium text-white sr-only">Search</label>
                
                <div className="relative">

                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>

                    <input type="search" id="search" className="block p-4 pl-10 w-full text-sm text-white tracking-widest bg-gray-800 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Busca tu pelicula..." />

                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Buscar</button>

                </div>
            </form>          
        </div>        
    
  )
}

export default SearchBar