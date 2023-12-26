import { useParams } from 'react-router-dom';
import {data} from '../data'
import { Youtube } from '../components/Youtube';

export default function ProjectDetails({match}) {
    const {id} = useParams();
    const cardId = parseInt(id, 10)
    console.log('id',id)
    const filteredData = data.find(filterDatafromdata => filterDatafromdata.id === cardId);
    console.log('filterdData ',filteredData);
    return (
        <section className='w-full py-12 lg:px-12 bg-black'>
        <div className='container px-6 flex'>
        <div className='w-3/5 px-6'>
            <Youtube link={filteredData.youtube}/>
            <div className="font-redhat text-3xl tracking-wide my-4">
                <h1 className="text-white">{filteredData.title}</h1>
            </div>
            <div>
                <p className="text-[#aaaaaa]">
                    {filteredData.infoText}</p>
            </div>
        </div>
            <div className='flex-1 space-y-4'>
                <div className='flex'><img src={'https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/media%2Fprojects%20pictuers%2F1%20(10).webp?alt=media&token=34a4b5f2-7b24-426d-916b-506b811f2d27'} alt="" /></div>
                <div className='flex'><img src={'https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/media%2Fprojects%20pictuers%2F1%20(11).webp?alt=media&token=b94788df-5172-4c54-98ad-8dd873387b78'} alt="" /></div>
                <div className='flex'><img src={'https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/media%2Fprojects%20pictuers%2F1%20(12).webp?alt=media&token=941c2ca6-2db7-4e22-9f7c-52c0fe3e14ec'} alt="" /></div>
                <div className='flex'><img src={'https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/media%2Fprojects%20pictuers%2F1%20(10).webp?alt=media&token=34a4b5f2-7b24-426d-916b-506b811f2d27'} alt="" /></div>
            </div>
        </div>
    </section>
    )
}