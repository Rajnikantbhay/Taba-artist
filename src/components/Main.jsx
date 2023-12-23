import mainImg from '../assests/mainimg.webp'

function Main() {
    return (
        <section className='w-full moon bg-black flex h-[90vh]'>
            <div className='flex-1 lg:block hidden'>
                <div className='h-2/5'></div>
                <div className='h-3/5  relative'>
                    <img src={mainImg} alt="Taba artist" className='h-full left-0 absolute mirror-image' />
                </div>
            </div>
            <div className='lg:w-3/5 h-full  w-full relative sm:flex block'>
                <div className='lg:ml-4 flex items-center ml-16 h-full'>
                <h1 className='uppercase text-white font-redhat text-9xl sm:text-opacity-100 lg:tracking-wide tracking-normal z-50  '>
                    <span className='text-yellow-100 sm:text-opacity-100 drop-shadow-xl'>T</span><span className='sm:text-8xl text-6xl'>he</span><br/>
                    <span className='text-yellow-100 sm:text-opacity-100 drop-shadow-xl'>a</span><span className='sm:text-8xl text-6xl'>rt</span><br/>
                    <span className='text-yellow-100 sm:text-opacity-100 drop-shadow-xl'>b</span><span className='sm:text-8xl text-6xl'>y</span><br/>
                    <span className='text-yellow-100 sm:text-opacity-100 drop-shadow-xl'>a</span><span className='sm:text-8xl text-6xl'>rtist</span>
                </h1>
                </div>
                <div className=''>
                <img src={mainImg} alt="Taba artist" className='h-full object-cover right-0 top-0 absolute' />
                </div>
            </div>
            {/* <Catalog/> */}
        </section>
    )
}

export default Main;