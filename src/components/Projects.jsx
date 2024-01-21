import { CardDefault } from "./Cards"
import { IconButton }from "@material-tailwind/react"
import { Link } from "react-router-dom"
import MovingWorkCarousel from "./MovingWorkCarousel"

export default function Projects() {
    return (
        <section className='w-full  py-12 lg:px-12'>
            <div className="container px-6 mx-auto">
            <h1 className='text-white text-2xl mt-2 mb-8 lg:text-4xl font-redhat'>Discover our painted stories – where every project transforms spaces into artful masterpieces. Your vision, our canvas.</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <MovingWorkCarousel/>
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