import React from 'react'
import logo from '/images/ws_logo.webp'
import nepal_flag from '/images/npl-flag.gif'
import nz_flag from '/images/nz_flag.webp'
import kiwi_bird from '/images/kiwi.webp'
import danphe_bird from '/images/danphe.webp'



export default function IpadNav() {
  return (
    <div className="min-h-[120px] flex justify-center items-center pt-6 w-full h-full
    ">
        <div className="w-full grid grid-cols-12 place-content-between place-items-center-safe 
           
          ">
             <div className="col-span-6 flex sm:min-w-[350px] sm:h-full sm:items-center sm:justify-center ">
              <img src={logo} 
                className="h-18 flex mx-auto sm:px-4"
              />
              <div className="sm:flex-col max-md:hidden">
              <h1 className="font-ubuntu text-white border-b-1">Whanganui Nepalese Society Inc.</h1>
              <h1 className="font-nepali text-blue-100 text-center">वाङ्गानुइ नेपाली समाज इन्कर्पोरेटेड </h1>
              </div>
            </div>

            <div className="col-span-6 sm:min-w-[80%]">
            <ul className="font-ubuntu text-white sm:flex sm:justify-between ">
              <li className="text-sm px-2"><a href="/">Home</a></li>
              <li className="text-sm px-2"><a href="/">Executive Members</a></li>
              <li className="text-sm px-2"><a href="/">About</a></li>
              <li className="text-sm px-2"><a href="/">Contact</a></li>
                

            </ul>
            </div>

        </div>
    </div>
  )
}
