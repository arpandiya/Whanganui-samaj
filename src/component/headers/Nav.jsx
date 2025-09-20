import React from 'react'
import logo from '/images/ws_logo.webp'
import nepal_flag from '/images/npl-flag.gif'
import nz_flag from '/images/nz_flag.webp'
import kiwi_bird from '/images/kiwi.webp'
import danphe_bird from '/images/danphe.webp'



export default function Nav() {
  return (
    <div className="min-h-[120px] flex justify-center items-center pt-6">
        <div className="grid grid-cols-7 place-content-between place-items-center-safe">
            <div className="col-span-1">
              <img src={nepal_flag} 
              className="h-8 mix-blend-multiply"
              alt="nepal flag"
              />
            </div>

            <div className="col-span-5 place-items-center-safe px-4">
            <img src={logo} 
                className="h-12"
              />
              <h1 className="font-ubuntu text-white border-b-1">Whanganui Nepalese Society Inc.</h1>
              <h1 className="font-nepali text-blue-100">वाङ्गानुइ नेपाली समाज इन्कर्पोरेटेड </h1>
            </div>

            <div className="col-span-1">
              <img src={nz_flag}
                className="h-5"
              />
            </div>
        </div>
    </div>
  )
}
