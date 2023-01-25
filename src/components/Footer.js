import React from 'react'

const Footer = () => {

  let token = sessionStorage.getItem('token')

  return (

    <>

      { token? 
        <footer className="sticky bottom-0 footer footer-center w-full p-4 bg-gray-800 text-white">
          <div className="text-center">
            <p>
              Copyright © 2023 -
              <a className="font-semibold" href="mailto:martin_rot@hotmail.com"
                >Alkemy Challenge</a
              >
            </p>
          </div>
        </footer>
        : 
        <>
        </>
      }

    </>

  )
}

export default Footer