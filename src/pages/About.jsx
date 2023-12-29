import React from 'react';
import ZaidPhoto from '../assests/Zaid_photo.webp'
import VikasPhoto from '../assests/Vikas_photo.webp'
import brushIcon from '../assests/brush.svg'
import paintTubbe from '../assests/painttube.svg'
import { FounderComponent } from '../components/FounderComponent';

function About() {
  return (
    <section className='py-12 lg:px-12'>
    <div class="container px-6">

<div>      
<h1 class="lg:text-4xl text-2xl font-redhat text-yellow-100">About Taba</h1>
<p class="mb-6 text-sm md:text-base text-[#f1f1f1]">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

</div>
      {/* <section class="lg:px-4 bg-black py-4 px-6 rounded-lg">
        <img src="https://mdbcdn.b-cdn.net/img/new/slides/198.jpg"
          class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
    
        <h1 class="mb-2 text-3xl font-bold text-[#f1f1f1]">
          An intriguing title for an interesting article
        </h1>
    
        <p className='text-[#aaaaaa] lg:text-base text-sm'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          harum tempore cupiditate asperiores provident, itaque, quo ex iusto
          rerum voluptatum delectus corporis quisquam maxime a ipsam nisi
          sapiente qui optio! Dignissimos harum quod culpa officiis suscipit
          soluta labore! Expedita quas, nesciunt similique autem, sunt,
          doloribus pariatur maxime qui sint id enim. Placeat, maxime labore.
          Dolores ex provident ipsa impedit, omnis magni earum. Sed fuga ex
          ducimus consequatur corporis, architecto nesciunt vitae ipsum
          consequuntur perspiciatis nulla esse voluptatem quos dolorum delectus
          similique eum vero in est velit quasi pariatur blanditiis incidunt
          quam.
        </p>
      </section> */}
      <FounderComponent photo={ZaidPhoto} alt={'Mohammad Zaid'} name={'Mohammad Zaid'} title={'Sculpture dada'} icon={brushIcon} />
      <FounderComponent photo={VikasPhoto} alt={'Vikas mandal'} name={'Vikas Mandal'} title={'Designer'} icon={paintTubbe} />
    </div>
    </section>
  );
}

export default About;
 