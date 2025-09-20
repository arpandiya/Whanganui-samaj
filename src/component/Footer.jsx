import React from 'react'

export default function Footer() {
  return (
    <div className="min-h-[100px] flex justify-center items-center font-ubuntu text-white border-t-2">
        <p className="text-xs text-center">
            All rights reserved to Whaganui Nepalese Society Inc.
            <br/>
       
        &copy; {new Date().getFullYear()}
        
        </p>
        
    </div>
  )
}
