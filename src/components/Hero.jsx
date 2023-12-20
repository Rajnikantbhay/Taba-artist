import Imgone from '../assests/taba1.webp'
import Imgtwo from '../assests/2.webp'
import Imgthree from '../assests/3.webp'
import Imgfour from '../assests/4.webp'


function Hero () {
    return (
        <section className="flex w-full" style={{height:'90vh'}}>
            <div className='w-[60%]'>
                <div className="bg-[#151316] w-full h-1/2 flex justify-center uppercase font-inter text-4xl tracking-wider py-12 text-white">
                    <p className='leading-normal tracking-wider'><span className='font-fair text-8xl'>t</span>he <span className='text-blue-900 font-bold'><span className='font-fair text-8xl'>a</span>rt</span> <br/><span className='pl-32'><span className='font-fair text-8xl'>b</span>y <span className='text-blue-900 font-bold'><span className='font-fair text-8xl'>a</span>rtist</span></span></p>
                </div>
                <div className="w-full h-1/2 flex">
                    <div style={{flex:'2'}} ><img src={Imgone} alt="" className='h-full w-full object-cover'/></div>
                    <div className='px-4 py-4 flex-1 overflow-hidden'>
                        <h3 className='mb-2 font-bold'>HEADING</h3>
                        <p>Lorem ip Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, aperiam. Eum veritatis, possimus dicta reiciendis vitae corporis Id!</p></div>
                    <div className='flex-1'><img src={Imgtwo} className='h-full w-full object-cover' alt="" /></div>
                </div>
            </div>
            <div className='w-2/5'>
                <div className='h-3/5'><img src={Imgthree} alt="" className='h-full w-full object-cover bg-gradient-to-t from-purple-500 to-purple-900' /></div>
                <div className='flex h-[40%]'>
                    <div className='flex-1 shadow-inner'><p className='px-4 py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique reiciendis laudantium laboriosam tempore autem? Quas eum fuga, accusantium placeat amet nobis consequatur ea itaque ex nam rerum non, molestias quia.</p></div>
                    <div className='flex-1 shadow-md'><img src={Imgfour} alt="" className='h-full w-full object-cover' /></div>
                </div>
            </div>
        </section>
    )
}

export default Hero