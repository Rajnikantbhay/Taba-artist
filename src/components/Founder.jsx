import { CardDefault } from "./Cards"

function Founders () {
    return (
        <section className='w-full py-12 lg:px-12'>
            <div className='container px-6 flex flex-col mx-auto'>
                <h1 className="lg:text-4xl text-2xl text-white font-redhat">Curious to know who we are? We're TABA, your premier destination for transformative painting solutions.</h1>
                <div className='flex gap-8 my-12 flex-wrap'>

                <CardDefault to={`/about/#vikasmandal`} ButtonText={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>} infoText={'Introducing Vikas Mandal, the co-founder with a unique academic journey. A graduate from Delhi University with a BA, Vikas pursued his MA through open education. His path in art was far from conventional, fueled by a determination to navigate the challenges of peer pressure that discouraged an artistic education. Vikas’s story is a testament to choosing passion over conformity. Despite the pressure steering him away from the arts, he embraced his creative spirit. Now, as a co-founder of the website, Vikas invites you to witness a narrative where education and art converge in unexpected ways. Explore his academic chapters, where every qualification is a brushstroke defying societal expectations. Vikas Mandal’s journey unfolds on this digital canvas, where art becomes a powerful declaration against the currents of conformity. Join him in celebrating the triumph of individuality and creativity on their website.'} imgLink={'https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/media%2FFounder%20photos%2FVikas_photo.webp?alt=media&token=18f97f3b-2ff4-49b7-9195-8952436695ec'} alt={'Vikas Mandal founder of TABA'} />


                <CardDefault to={`/about/#mohammadzaid`} ButtonText={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>} infoText={'Meet Mohammed Zaid, an artistic maverick challenging societal expectations. Armed with a BFA and MFA in education, Zaid’s journey has been a resilient struggle against peer pressure, paving the way for his own website. In a world constrained by norms, Zaid’s story is a canvas of defiance. His educational achievements serve as brushstrokes, depicting a battle for artistic freedom. Now, on the brink of launching his website, Zaid invites you into a realm where conformity is abandoned. This isn’t just a website; it’s an act of rebellion. Explore Zaid’s life through murals, graphic designs, and other artworks that narrate a tale of individuality. Mohammed Zaid’s digital platform is a sanctuary where creativity triumphs over conformity – a virtual space where each click resonates with the echoes of an artist’s unique defiance.'} imgLink={'https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/media%2FFounder%20photos%2FZaid_photo.webp?alt=media&token=c539e729-fa6d-4af5-ac11-9ac908902d3e'} alt={'Mohammad Zaid founder of TABA'}/>


                </div>
                {/* <div className="w-full">
                    <HorizontalCard />
                </div> */}
            </div>
        </section>
    )
}

export default Founders