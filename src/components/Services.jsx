import paintroller from '../assests/interior.svg'
import exteriorpaint from '../assests/exterior.svg'
import commercialpaint from '../assests/commercial.svg'
import { Link } from 'react-router-dom';

function Services() {
  return (
    <section className="lg:px-12 py-12">
      <div className='container px-6 mx-auto'>


        <div>

          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white font-redhat md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
          <p class="mb-6 text-lg font-normal text-white lg:text-xl ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full text-gray-200 gap-4'>





          <div class=" max-w-sm rounded overflow-hidden bg-black shadow-gray-900 shadow-sm">
            <div className='w-full flex justify-start px-6 py-4'><img class="h-16 w-16" src={paintroller} loading='lazy' alt="icon of paint roller" /></div>
            <div class="px-6 pb-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <Link to={'/booknow'} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400">Book Now</Link>
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
              <Link to={'/booknow'} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400">Book Now</Link>
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
              <Link to={'/booknow'} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400">Book Now</Link>
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
              <Link to={'/booknow'} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400">Book Now</Link>
            </div>
          </div>





        </div>
      </div>
    </section>
  )
}

export default Services;