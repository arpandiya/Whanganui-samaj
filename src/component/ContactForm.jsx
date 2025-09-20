import React from 'react'

export default function ContactForm() {
  return (
    <div className="w-full flex justify-center items-center min-h-100">
        <form className="border-2 border-blue-50 rounded-md p-6">
            <h1 className="w-full  bg-amber-50 rounded text-xl py-2 text-center">Contact Forms</h1>
            
            <InputField 
            label="First Name :"
            type="text" 
            name="" 
            value="" 
            placeholder="enter firstname" />
            <InputField 
            label="Last Name :"
            type="text" 
            name="" 
            value="" 
            placeholder="enter lastname" />

            <InputField 
            label="Email :"
            type="email" 
            name="" 
            value="" 
            placeholder="enter email" />

            <label className=" text-white">Message :</label>
            <div className="flex font-ubuntu">
            <textarea
            className='bg-white px-1'
            placeholder='enter message'
             rows={6} 
             cols={35} ></textarea> 
            </div>

            <InputField 
                type="submit"
                value="Send"
                className="cursor-pointer hover:opacity-50"
            />
        </form>
    </div>
  )
}

const InputField = ({label, type, name, value, placeholder}) => {
    return(
        <>
        <div className="flex-col justify-around items-center font-ubuntu my-4">
        <label className=" text-white">{label}</label>
        <input 
        type={type} 
        name={name}
        value={value}
        placeholder={placeholder}
        className="bg-blue-50 w-full h-10 px-2 rounded"
        />
        </div>
        </>
    );
}