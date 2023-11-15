import React from 'react'
import './Components.css'

function Carousel() {
  return (
    <div className='relative w-full m-auto h-screen'>


<div className='absolute w-full opacity-50 h-screen bg-blue-300 z-30'> helloo</div>
      

<div id="default-carousel" class="absolute w-full z-20" data-carousel="slide">


    <div class="relative h-screen overflow-hidden">

        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div className='absolute z-20 text-center text-white' style={{left:'50%', transform:'translate(-50%, -50%)', top:'50%'}}><h2 className='uppercase text-9xl' style={{fontFamily:'Montserrat'}}>Taba
            </h2>
            <p className='text-sm'>The Art By Artist</p>
            </div>
            <div id='gradient-overlay'></div>
            <img src="https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/media%2FIMG_20230423_224504.jpg?alt=media&token=efd1860a-2db0-44e3-ac47-628c622e2f65" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full object-cover" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div className='absolute z-20 text-center text-white' style={{left:'50%', transform:'translate(-50%, -50%)', top:'50%'}}><h2 className='uppercase text-9xl' style={{fontFamily:'Montserrat'}}>Taba
                </h2>
                <p className='text-sm'>The Art By Artist</p>
            </div>
            <div id='gradient-overlay'></div>
            <img src="https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/media%2FIMG_20230219_191645.jpg?alt=media&token=36b3ea2b-1911-4cb2-9cee-348ed728c8c0" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div className='absolute z-20 text-center text-white' style={{left:'50%', transform:'translate(-50%, -50%)', top:'50%'}}><h2 className='uppercase text-9xl' style={{fontFamily:'Montserrat'}}>Taba
                </h2>
                <p className='text-sm'>The Art By Artist</p>
            </div>
            <div id='gradient-overlay'></div>
            <img src="https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/media%2FIMG20210318134356.jpg?alt=media&token=61fe46f3-7b01-4e7f-9975-5b9f5bef3311" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

    </div>
  )
}

export default Carousel
