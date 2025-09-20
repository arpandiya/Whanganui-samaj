import React from 'react'

export default function TeamCard({img, name, type}) {
  return (
    <div className="mx-2 my-2 px-1 py-1 border-4 border-blue-100 text-white rounded">
          <div className="border-1 border-blue-50">
          <img src={img}
          className="h-44 object-contain "
          />  
        </div>
        <div className="text-center py-1 bg-linear-to-b from-purple-400 to-blue-900">
          <h5 className="font-bold border-b-1 py-1 text-sm">{name}</h5>

          <p className="text-blue-200">{type}</p>
          </div>
    </div>
  )
}
