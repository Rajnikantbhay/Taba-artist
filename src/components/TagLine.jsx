import React from 'react'

function TagLine() {
    return (
        <section className='w-full bg-[#19345f] px-14 flex py-8'>
            {/* <div className='flex w-1/6 justify-center bg-white'>
                <img src='/assets/images/paintBrush.svg' alt="Paint Brush" className='w-1/2' />
            </div> */}
            <div className='my-auto text-white flex items-center mr-20' style={{fontFamily:''}}>
                    <h2 className='uppercase text-5xl font-bold'>Let's have a talk</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-28 h-24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
            </div>

            <div className='my-auto'>
                <ul className='flex gap-x-20'>
                <li className='border-2 border-white rounded-full p-3'><a href="/"><img src="/assets/icons/call.svg" alt="" className='w-20 h-20' /></a></li>
                <li className='border-2 border-white rounded-full p-3' ><a href="/"><img src="/assets/icons/whatsapp.svg" alt="" className='w-20 h-20' /></a></li>
                <li className='border-2 border-white rounded-full p-3'><a href="/"><img src="/assets/icons/location.svg" alt="" className='w-20 h-20' /></a></li>
                </ul>
            </div>
        </section>
    )
}

export default TagLine 