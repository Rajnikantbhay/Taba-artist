import paintroller from '../assests/interior.svg'
import exteriorpaint from '../assests/exterior.svg'
import commercialpaint from '../assests/commercial.svg'

function Services() {
    return (
        <section className="py-12 bg-black">
          <h1 className='text-yellow-100 text-2xl mt-2 lg:text-4xl lg:px-16 px-6 font-redhat drop-shadow-xl drop-shadow-white'>Your All-in-One Painting <br/>Solution for Every Canvas Imaginable</h1>
          <div className='justify-center w-full text-gray-200 md:flex block items-center space-x-4'>
            <div class=" max-w-sm rounded overflow-hidden bg-black shadow-gray-900 shadow-sm">
             <div className='w-full flex justify-start px-6 py-4'><img class="h-16 w-16" src={paintroller} loading='lazy' alt="icon of paint roller" /></div> 
  <div class="px-6 pb-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400">Book Now</button>
  </div>
</div>
<div class=" max-w-sm rounded overflow-hidden bg-black shadow-gray-900 shadow-sm">
             <div className='w-full flex justify-start px-6 py-4'><img class="h-16 w-16" src={exteriorpaint} loading='lazy' alt="icon of paint palette" /></div> 
  <div class="px-6 pb-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400">Book Now</button>
  </div>
</div>
<div class="max-w-sm rounded overflow-hidden shadow-gray-900 shadow-sm bg-black">
             <div className='w-full flex justify-start px-6 py-4'><img class="h-16 w-16" src={commercialpaint} loading='lazy' alt="icon of paint palette" /></div> 
  <div class="px-6 pb-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400">Book Now</button>
  </div>
</div>
</div>
        </section>
    )
}

export default Services;