import { useParams } from 'react-router-dom';
import {data} from '../data'
import { Youtube } from '../components/Youtube';
import { graphicDesgignData } from '../data';

export default function ProjectDetails() {
    const {id} = useParams();
    const cardId = parseInt(id, 10)
    const filteredData = data.find(filterDatafromdata => filterDatafromdata.id === cardId);
    return (
        <section className='w-full h-full py-12 lg:px-12 bg-black text-white'>
        <div className='container px-6 md:flex block'>
        <div className='w-full lg:w-3/5 md:px-6'>
            {filteredData.youtube !=='' ? <Youtube link={filteredData.youtube}/> : (<div><img src={filteredData?.img1} alt=''/></div>)}
            <div className="font-redhat text-3xl tracking-wide my-4">
                <h1 className="text-white">{filteredData.title}</h1>
            </div>
            {/* <div>
                <p className="text-[#aaaaaa]">
                    {filteredData.infoText}</p>
            </div> */}
        </div>
            <div className='w-full  lg:flex-1 space-y-4'>
                <div className='flex'><img loading='lazy' src={filteredData?.img2} alt={filteredData.title + ' first painting'} /></div>
                <div className='flex'><img loading='lazy' src={filteredData?.img3} alt={filteredData.title + ' second painting'} /></div>
                <div className='flex'><img loading='lazy' src={filteredData?.img4} alt={filteredData.title + ' third painting'} /></div>
                <div className='flex'><img loading='lazy' src={filteredData?.img5} alt={filteredData.title + ' fourth painting'} /></div>
            </div>
        </div>
    </section>
    )
}

export const GraphicWorkDetails = () => {
    const {id} = useParams();
    const cardId = parseInt(id, 10)
    const filteredData = graphicDesgignData.find(filterDatafromdata => filterDatafromdata.id === cardId);
    return (
        <section className='w-full h-full py-12 lg:px-12 bg-black text-white'>
        <div className='container px-6 md:flex block'>
        <div className='w-full lg:w-3/5 md:px-6'>
           <div><img src={filteredData?.img1} alt=''/></div>
            <div className="font-redhat text-3xl tracking-wide my-4">
                <h1 className="text-white">{filteredData.title}</h1>
            </div>
            {/* <div>
                <p className="text-[#aaaaaa]">
                    {filteredData.infoText}</p>
            </div> */}
        </div>
            <div className='w-full  lg:flex-1 space-y-4'>
                <div className='flex'><img loading='lazy' src={filteredData?.img2} alt={filteredData.title + ' first painting'} /></div>
                <div className='flex'><img loading='lazy' src={filteredData?.img3} alt={filteredData.title + ' second painting'} /></div>
                <div className='flex'><img loading='lazy' src={filteredData?.img4} alt={filteredData.title + ' third painting'} /></div>
            </div>
        </div>
    </section>)
}