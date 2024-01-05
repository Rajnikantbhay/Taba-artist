import { CardDefault } from "./Cards"
import { IconButton }from "@material-tailwind/react"
import { Link } from "react-router-dom"

export default function Projects() {
    return (
        <section className='w-full  py-12 lg:px-12'>
            <div className="container px-6 mx-auto">
            <h1 className='text-white text-2xl mt-2 mb-8 lg:text-4xl font-redhat'>Discover our painted stories – where every project transforms spaces into artful masterpieces. Your vision, our canvas.</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <CardDefault title={'AD Cafe'} alt={'AD Cafe Project'} to={'/ourwork/muralarts/1'} imgLink={'https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/media%2Fprojects%20Pics%2FAD-cafe-project%2FIMG-20231229-WA0082.webp?alt=media&token=4a1d5bbf-8dcf-4c25-8b81-574ee3c558db'} ButtonText={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>
} infoText={'hello there are u good i am fine how about you ohh so you have fever no worries heollo paaji'}/>

                <CardDefault title={'Adwait 2.0'} alt={'Adwait project'} to={'/ourwork/muralarts/2'} imgLink={'https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/media%2Fprojects%20Pics%2FAdwait-project2.0%2FIMG-20231229-WA0088.webp?alt=media&token=262eaa11-84ee-42e3-97ed-8155c21e3de3'}  ButtonText={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>

                } infoText={'hello there are u good i am fine how about you ohh so you have fever no worries heollo paaji'} />

                <CardDefault title={'Bharatram'} alt={'Bharatram Project'} imgLink={'https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/media%2Fprojects%20Pics%2FBharatRam-project%2FIMG20230217185917.webp?alt=media&token=72064a67-d8d1-4416-ace9-d454ad852d7d'} to={'/ourwork/muralarts/2'} ButtonText={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>} infoText={'hello there are u good i am fine how about you ohh so you have fever no worries heollo paaji'} /> 
            </div>

            <div className='w-full justify-center flex mt-4'>
            <Link to={'/ourwork'}>
            <IconButton aria-label="Go to our work" variant="outlined" className="rounded-full hover:bg-white text-white hover:text-black border-white border-2 p-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </IconButton>
            </Link>
            </div>

            </div>
        </section>
    )
}