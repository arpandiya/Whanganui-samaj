import React from 'react'
import logo from '/images/ws_logo.webp'
import nepal_flag from '/images/npl-flag.gif'
import nz_flag from '/images/nz_flag.webp'
import kiwi_bird from '/images/kiwi.webp'
import danphe_bird from '/images/danphe.webp'



export default function Nav() {
  return (
    <div className="min-h-[120px] flex justify-center items-center pt-6 w-full h-full

    ">
        <div className="w-full grid grid-cols-7 place-content-between place-items-center-safe 
          // sm:grid-cols-12 sm:justify-end
          md:grid-cols-8
          ">
            <div className="col-span-1 
              sm:col-span-2 sm:w-full sm:h-full">
              <img src={nepal_flag} 
              className="h-8 mix-blend-multiply sm:hidden"
              alt="nepal flag"
              />
              <div className="hidden sm:flex sm:min-w-[350px] sm:w-full sm:h-full sm:items-center sm:justify-center">
              <img src={logo} 
                className="h-18 flex mx-auto sm:px-4"
              />
              <div className="sm:flex-col">
              <h1 className="font-ubuntu text-white border-b-1">Whanganui Nepalese Society Inc.</h1>
              <h1 className="font-nepali text-blue-100 text-center">वाङ्गानुइ नेपाली समाज इन्कर्पोरेटेड </h1>
              </div>
              </div>
            </div>

            <div className=" col-span-5 place-items-center px-4 
            sm:col-span-4 sm:hidden sm:ml-8
            
            ">
            <img src={logo} 
                className="h-12 flex mx-auto sm:hidden"
              />
              <h1 className="font-ubuntu text-white border-b-1">Whanganui Nepalese Society Inc.</h1>
              <h1 className="font-nepali text-blue-100 text-center">वाङ्गानुइ नेपाली समाज इन्कर्पोरेटेड </h1>
            </div>

            <div className="col-span-1 sm:col-span-4">
              <img src={nz_flag}
                className="h-5 sm:hidden"
              />
            </div>

            <div className="hidden sm:block sm:col-span-6 sm:min-w-[80%]">
            <ul className="font-ubuntu text-white sm:flex sm:justify-between ">
              <li><a href="/">Home</a></li>
              <li><a href="/">Executive Members</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
                

            </ul>
            </div>

        </div>
    </div>
  )
}
