import React from 'react'
import mapSvg from '../assests/mapmissing.svg'

function Contact() {
  return (

<div class="container flex justify-center items-center my-24 mx-auto md:px-6 p-2">
          {/* <div class="md:mb-12 lg:mb-0 px-6">
            <div
              class="relative min-h-[400px] rounded-lg shadow-lg dark:shadow-black/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.4221801812373!2d77.25099347414688!3d28.55708268750536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce30d21accc19%3A0x45e471bee92b7d80!2sRenuKiran%20Welfare%20Foundation!5e0!3m2!1sen!2sin!4v1703586046702!5m2!1sen!2sin"
                class="absolute left-0 top-0 h-full w-full rounded-lg"
                frameborder="0"
                allowfullscreen title='map'></iframe>
            </div>
          </div> */}
          
          <div className='w-2/3'>
          <h1 className='text-white text-center lg:text-4xl text-2xl font-redhat'>Sorry for inconvenience Map is under construction...</h1>
            <img src={mapSvg} alt="sorry map is" className='w-full h-full object-cover' /></div>
</div>
  )
}

 export default Contact
