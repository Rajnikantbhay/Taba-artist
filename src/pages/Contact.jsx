import React, { useEffect, useState } from 'react'
import { ShimmerThumbnail } from 'react-shimmer-effects'

function Map() {
  const [mapLoaded, setMapLoaded] = useState(false);
  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setMapLoaded(true)
    },2000)

    return () => {
      clearInterval(loadTimeout)
    }
  }, [])

  return (
<div className="container flex justify-center items-center my-24 mx-auto md:px-6 p-2">
          <div className="md:mb-12 lg:mb-0 px-6 w-full">
            {mapLoaded ?( <div
              class="relative min-h-[400px] rounded-lg shadow-lg dark:shadow-black/20">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3504.0490834867182!2d77.28046917549848!3d28.56828877569995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM0JzA1LjgiTiA3N8KwMTYnNTkuMCJF!5e0!3m2!1sen!2sin!4v1704347107175!5m2!1sen!2sin" className='w-full' height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
            </div> ) : <ShimmerThumbnail height={400} />}
          </div>
</div>
  )
}

 export default Map
