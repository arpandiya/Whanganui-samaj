import React from 'react'
import Info from './Info'

export default function Footer() {
  return (
    <div className="w-full min-h-[100px] flex-col justify-center items-center font-ubuntu text-white border-t-2 my-1">
        <p className="text-xs text-center mt-2">
            All rights reserved to Whaganui Nepalese Society Inc.
            <br/>
       
        &copy; {new Date().getFullYear()}

<br/>
        


        
        </p>

        <Info />
        
    </div>
  )
}
