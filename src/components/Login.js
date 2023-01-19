import React from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {    

    const navigate = useNavigate()

    const submitHandler = (e) => {

        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        const regexEmail = /^(([^<>()[\],;:\s@]+(\.[^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@"]{2,})$/

        if( email === '' || password === '' ){
            swal('Los campos no pueden estar vacíos.');
            return;
        }

        if( email !== '' && !regexEmail.test(email) ){
            swal('Debes escribir una direccion de correo electronico valida')
            //console.log('Debes escribir una direccion de correo electronico valida')
            return;
        }

        if( email !== 'challenge@alkemy.org' || password !== 'react' ){
            swal("Credenciales inválidas - Clickea en 'olvide la contraseña' ")
            return;
        } else {
            axios
                .post('http://challenge-react.alkemy.org', { email, password })
                .then(res => {
                    swal('¡Bienvenido a Alkemy Prime Video!')
                    const tokenRecibido = res.data.token
                    sessionStorage.setItem('token', tokenRecibido)
                    //localStorage.setItem('miNombre', 'Martin')
                    navigate("/listado");                    
                })
        }

    }

    const handleClick = () => {    
          swal( 'Datos de ingreso: ', 
          `Correo: challenge@alkemy.org 
          Contraseña: react` );
    }

    let token = sessionStorage.getItem('token')

  return (

    <>
        { token && <Navigate to='/listado' /> } {/* Si tengo token voy al listado */}

        <div className="flex items-center h-[88vh]">

            <div className="flex-col flex ml-auto mr-auto items-center w-2/3 lg:w-1/3 justify-center bg-gray-800 h-3/5 drop-shadow-2xl">
                <h1 className="font-semibold text-base md:font-bold md:text-2xl mb-10 text-white">Formulario de Login</h1>
                <form onSubmit={submitHandler} action="" className="mt-2 flex flex-col lg:w-2/3 w-10/12">
                        
                        <p className='italic font-roboto text-white text-xs md:text-base'>Correo Electronico</p>
                        <div className="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6">

                            <input
                                type="email"
                                name='email'
                                className="flex-shrink flex-grow flex-auto leading-normal w-px border-0 md:h-10 h-8 border-grey-light rounded rounded-l-none px-3 self-center relative font-roboto md:text-xl outline-none"
                                placeholder="Nombre de usuario"
                            />

                        </div>

                        <p className='italic font-roboto text-white text-xs md:text-base'>Contraseña</p>
                        <div className="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-4">                    
                            <input
                                type="password"
                                name='password'
                                className="flex-shrink flex-grow flex-auto leading-normal w-px border-0 md:h-10 h-8 px-3 relative self-center font-roboto md:text-xl outline-none"
                                placeholder="Constraseña"
                            />
                        </div>

                        <p className="text-xs md:text-base text-white text-right font-roboto leading-normal hover:underline mb-6 cursor-pointer font-semibold" onClick={handleClick}>Olvido su contraseña?</p>

                        <button type='submit' className='bg-blue-900 py-2 md:py-4 text-center px-17 md:px-12 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-4 md:mb-10 md:font-semibold'>Ingresar</button>
                    
                </form>

            </div>
            
        </div>

    </>

  )
}

export default Login
