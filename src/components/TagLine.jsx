// import React from 'react'

// function TagLine() {
//     return (
//         <section className='w-full bg-[#19345f] px-14 md:flex block py-8 xl:flex-row flex-col'>
//             <div className='my-auto text-white xl:text-start flex justify-center items-center xl:mr-20'>
//                     <h2 className='uppercase md:text-5xl text-3xl font-bold '>Let's Paint together</h2>
//                         <svg xmlns="http://www.w3.org/2000/svg" className='hidden xl:block w-28 h-24' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
//                         </svg>
//             </div>

//             <div className='my-auto mx-auto xl:m-0 mt-8'>
//                 <ul className='sm:flex block md:gap-x-20 justify-center gap-x-32'>
//                 <li className='border-2 border-white sm:rounded-full p-3'><a href="/"><img src="/assets/icons/call.svg" alt="" className='md:w-20 md:h-20 w-16 h-16' /></a></li>
//                 <li className='border-2 border-white sm:rounded-full p-3' ><a href="/"><img src="/assets/icons/whatsapp.svg" alt="" className='md:w-20 md:h-20 w-16 h-16' /></a></li>
//                 <li className='border-2 border-white sm:rounded-full p-3'><a href="/"><img src="/assets/icons/location.svg" alt="" className='md:w-20 md:h-20 w-16 h-16' /></a></li>
//                 </ul>
//             </div>
//         </section>
//     )
// }

// export default TagLine 
import React from 'react';

const TagLine = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <div className="text-xl mb-4">Your Tagline Goes Here</div>
      <div className="flex justify-around">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">WhatsApp</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Direct Call</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Location</button>
      </div>
    </div>
  );
};

export default TagLine;

