import React from 'react'
import member1 from '/images/president.webp'
import member2 from '/images/kumar.webp'
import member3 from '/images/diya.webp'
import member4 from '/images/madan.webp'
import member5 from '/images/ram.webp'
import member6 from '/images/narayan-nepal.webp'
import arpan from '/images/arpan.webp'
import TeamCard from './TeamCard'


export default function Team() {
  return (
    <div className=" font-ubuntu bg-linear-to-r from-blue-700 to-red-700 h-full py-8 border-b-2 border-blue-50 flex-col place-items-center
    
    " id="team">
        <h2 className="text-white text-center w-42 pb-0.5  border-b-2 mx-auto font-bold tracking-wide">Executive Members</h2>
    
        <div className="">
            <div className="flex justify-center pt-4">
               <TeamCard img={member1} name={"Dr. Raj Khadka"} type={"President"}/>
               
            </div>
        </div>
    <div className="flex flex-wrap justify-center">
        <div className="flex justify-center pt-4 ">
               <TeamCard img={member3} name={" Mrs. Diya Poudel"} type={"Treasurer"}/>
            </div>
            <div className="flex justify-center pt-4">
               <TeamCard img={member5} name={"Mr. Ram B. Gurung"} type={"Secretary"}/>
            </div>

            <div className="flex justify-center pt-4">
               <TeamCard img={member2} name={"Mr. Kumar Ghimire"} type={"Executive Member"}/>

            </div>

            <div className="flex justify-center pt-4">
               <TeamCard img={member4} name={"Mr. Madan Rijal"} type={"Executive Member"}/>
            </div>

            
            </div>

            <hr className="drop-shadow-red-50 drop-shadow-md w-4/5 my-4 opacity-50"/>
            
            <div className="flex flex-wrap items-center justify-around">
            <TeamCard img={member6} name={"Dr. Narayan Nepal"} type={"Senior Advisor"}/>
            <TeamCard img={arpan} name={"Mr. Arpan Subedi"} type={"Tech Lead"}/>
            </div>
    </div>
  )
}
