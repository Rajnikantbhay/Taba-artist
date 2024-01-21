import paintroller from '../assests/interior.svg'
import exteriorpaint from '../assests/exterior.svg'
import commercialpaint from '../assests/commercial.svg'
import { Link } from 'react-router-dom';

function Services() {
  return (
    <section className="lg:px-12 py-12">
      <div className='container px-6 mx-auto'>


        <div>
          <h1 class="mb-4 uppercase lg:text-4xl leading-none tracking-tight text-white font-redhat text-2xl">our services</h1>
          <p class="mb-6 text-lg font-inter text-white lg:text-xl ">Here at Taba we focus on providing the best possible services.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 w-full text-gray-200 gap-4'>

          <div class=" max-w-sm rounded overflow-hidden bg-white shadow-gray-900 shadow-sm">
            <div className='w-full flex justify-start px-6 py-4'><img class="h-16 w-16" src={paintroller} loading='lazy' alt="icon of paint roller" /></div>
            <div class="px-6 pb-4">
              <div class="font-bold text-xl text-black mb-2">Interior Design</div>
              <p class="text-black text-base">
                
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <Link to={'/booknow'} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 hover:bg-gray-400">Book Now</Link>
            </div>
          </div>

          <div class=" max-w-sm rounded overflow-hidden bg-white shadow-gray-900 shadow-sm">
            <div className='w-full flex justify-start px-6 py-4'><img class="h-16 w-16" src={exteriorpaint} loading='lazy' alt="icon of paint palette" /></div>
            <div class="px-6 pb-4">
              <div class="font-bold text-xl text-black mb-2">Interior Design</div>
              <p class="text-black text-base">
                
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <Link to={'/booknow'} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 hover:bg-gray-400">Book Now</Link>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-gray-900 shadow-sm bg-white">
            <div className='w-full flex justify-start px-6 py-4'><img class="h-16 w-16" src={commercialpaint} loading='lazy' alt="icon of paint palette" /></div>
            <div class="px-6 pb-4">
              <div class="font-bold text-black text-xl mb-2">Mural Art</div>
              <p class="text-black text-base">
                
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <Link to={'/booknow'} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 hover:bg-gray-400">Book Now</Link>
            </div>
          </div>


          <div class="max-w-sm rounded overflow-hidden shadow-gray-900 shadow-sm bg-white ">
            <div className='w-full flex justify-start px-6 py-4'><img class="h-16 w-16" src={commercialpaint} loading='lazy' alt="icon of paint palette" /></div>
            <div class="px-6 pb-4">
              <div class="font-bold text-xl text-black mb-2">Graphic Design</div>
              <p class="text-black text-base">
                
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <Link to={'/booknow'} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 hover:bg-gray-400">Book Now</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services;