import {data} from '../data'
import { CardDefault } from '../components/Cards'

export default function Work() {
    return (
        <section className="py-12 lg:px-12 bg-black w-full min-h-screen h-full">
            <div className="container px-6">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8'>
                {data.map((item) => {
                   return <CardDefault to={`/ourwork/${item.id}`} key={item.id} id={item.id} ButtonText={item.ButtonText} title={item.title} infoText={item.infoText} />
                })}
                </div>
            </div>
        </section>
    )
}