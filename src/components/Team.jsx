import { CardDefault } from "./Cards"
import { HorizontalCard } from "./Cards"
import paintbucket from '../assests/paintbucket.svg'
import paintsplash from '../assests/paintsplash.svg'
import painttube from '../assests/painttube.svg'

function Team () {
    return (
        <section className='w-full bg-black py-12 lg:px-12'>
            <div className='container px-6 flex flex-col'>
                <h1 className="lg:text-4xl text-2xl text-yellow-100 font-redhat">Curious to know who we are? We're TABA, your premier destination for transformative painting solutions.</h1>
                <div className='flex gap-8 my-12 flex-wrap'>
                <CardDefault/>
                <CardDefault/>
                <div className='flex-1 flex flex-col justify-center gap-y-12 items-center'>
                    <img src={paintbucket} alt="" className='lg:w-24' />
                    <img src={paintsplash} alt="" className='lg:w-24' />
                    <img src={painttube} alt="" className='lg:w-24' />
                </div>
                </div>
                <div className="w-full">
                    <HorizontalCard />
                </div>
            </div>
        </section>
    )
}

export default Team