import mainImg from '../assests/mainimg.webp'

function Main() {
    return (
        <section className='w-full moon bg-black flex' style={{height:'90vh'}}>
            <div className='flex-1'>
                <div className='h-2/5'></div>
                <div className='h-3/5  relative'>
                    <img src={mainImg} alt="Taba artist" className='h-full left-0 absolute mirror-image' />
                </div>
            </div>
            <div className='w-3/5 h-full relative flex bg-black'>
                <div className='md:ml-4 flex items-center'>
                <h1 className='uppercase text-white font-redhat md:text-8xl md:tracking-wide '>
                    <span className='text-[#c9b594]'>T</span>he<br/>
                    <span className='text-[#c9b594]'>a</span>rt<br/>
                    <span className='text-[#c9b594]'>b</span>y<br/>
                    <span className='text-[#c9b594]'>a</span>rtist
                </h1>
 
                </div>
                <img src={mainImg} alt="Taba artist" className='h-full right-0 absolute' />
            </div>
        </section>
    )
}

export default Main;