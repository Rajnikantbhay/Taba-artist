import React, { useEffect } from 'react';
import ZaidPhoto from '../assests/Zaid_photo.webp'
import VikasPhoto from '../assests/Vikas_photo.webp'
import brushIcon from '../assests/brush.svg'
import paintTubbe from '../assests/painttube.svg'
import { FounderComponent } from '../components/FounderComponent';

function About() {
  useEffect(() => {
    const hash = window.location.hash;
    if(hash) {
      const element = document.querySelector(hash);
      if(element) {
        element.scrollIntoView({behavior: 'smooth'})
      }
    }
  })
  return (
    <section className='py-12 lg:px-12'>
    <div class="container px-6">

<div>      
<h1 class="lg:text-4xl text-2xl font-redhat text-yellow-100">About Taba</h1>
<p class="mb-6 text-sm md:text-base text-[#f1f1f1]">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

</div>
      <FounderComponent id={'mohammadzaid'} photo={ZaidPhoto} alt={'Mohammad Zaid'} name={'Mohammad Zaid'} title={'Sculpture dada'} icon={brushIcon} />
      <FounderComponent id={'vikas'} photo={VikasPhoto} alt={'Vikas mandal'} name={'Vikas Mandal'} title={'Designer'} icon={paintTubbe} />
    </div>
    </section>
  );
}

export default About;
 