import React from 'react'
import banner from '/images/ws-banner -new.png'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <div className="bg-linear-to-r to-teal-600 min-h-[770px] font-ubuntu py-4 border-t-2 border-white pt-4">
        <div className="flex justify-center py-2 my-6">
        <h3 className="text-lg font-bold border-b-2 border-blue-50 text-white px-4">Contact</h3>
        
        </div>
        <ContactForm />
        {/* <div className="flex justify-center border-2 border-blue-50 mx-10 p-2 rounded-xl my-4 mt-6">
            
            <article className="flex-col justify-between items-center">
                <span className="text-xs text-white text-center">Email: 
                <a className="text-red-100 font-bold tracking-wide text-md" href="mailto: whanganui.samaj@gmail.com"> whanganui.samaj@gmail.com</a>
                </span>
                <br/>
                
                <span className="text-xs text-white text-center">Phone: 
                <a className="text-red-100 font-bold tracking-wide text-md" href="tel: wanganuinepalisamaj@gmail.com"> +64 6 123 3454 </a>
                </span>
                <br/>
                
                <span className="text-xs text-white text-center">Address: 
                <a className="text-red-100 font-bold tracking-wide text-md" href="tel: wanganuinepalisamaj@gmail.com"> Whanganui Road, New Zealand </a>
                </span>
            </article>
        </div> */}
       
        <div className="flex justify-around py-4 mx-4">
        
        <div className="h-48 object-contain border-2 border-white my-6">
            {/* <img src={banner} 
            className="h-32"
            /> */}
            

<iframe width="340" height="200" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=7%20Silverdale%20street%20Whanganui+(Whanganui%20Nepalese%20Society%20Inc.)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
 <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=9d188b24c6fe9123876830fce692975a6fc3f840'></script>

        </div>

       
        </div>
    </div>
  )
}
