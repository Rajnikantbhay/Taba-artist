import { CardDefault } from "./Cards"
import { HorizontalCard } from "./Cards"

function Team () {
    return (
        <section className='w-full bg-black py-12 lg:px-12'>
            <div className='container px-6 flex flex-col'>
                <h1 className="lg:text-4xl text-2xl text-yellow-100 font-redhat">Curious to know who we are? We're TABA, your premier destination for transformative painting solutions.</h1>
                <div className='flex gap-8 my-12 flex-wrap'>
                <CardDefault ButtonText='Read more...' />
                <CardDefault ButtonText='Read more...' />
                </div>
                <div className="w-full">
                    <HorizontalCard />
                </div>
            </div>
        </section>
    )
}

export default Team