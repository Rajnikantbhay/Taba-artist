import { CardDefault } from "./Cards"
import { IconButton }from "@material-tailwind/react"
import { Link } from "react-router-dom"

export default function Projects() {
    return (
        <section className='w-full  py-12 lg:px-12'>
            <div className="container px-6 mx-auto">
            <h1 className='text-white text-2xl mt-2 mb-8 lg:text-4xl font-redhat'>Discover our painted stories – where every project transforms spaces into artful masterpieces. Your vision, our canvas.</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <CardDefault ButtonText={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>
} infoText={'hello there are u good i am fine how about you ohh so you have fever no worries heollo paaji'}/>

                <CardDefault  ButtonText={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>

                } infoText={'hello there are u good i am fine how about you ohh so you have fever no worries heollo paaji'} />

                <CardDefault ButtonText={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>} infoText={'hello there are u good i am fine how about you ohh so you have fever no worries heollo paaji'} /> 
            </div>

            <div className='w-full justify-center flex mt-4'>
            <Link to={'/ourwork'}>
            <IconButton variant="outlined" className="rounded-full hover:bg-white text-white hover:text-black border-white border-2 p-6">
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