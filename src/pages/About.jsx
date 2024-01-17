import React, { useEffect } from "react";
import ZaidPhoto from "../assests/Zaid_photo.webp";
import VikasPhoto from "../assests/Vikas_photo.webp";
import brushIcon from "../assests/brush.svg";
import paintTubbe from "../assests/painttube.svg";
import { FounderComponent } from "../components/FounderComponent";
import Journey from "../components/Journey";

function About() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <section className="py-12 lg:px-12">
      <div class="container px-6">
        <div>
          <h1 class="lg:text-4xl text-2xl font-redhat text-yellow-100">
            About Taba
          </h1>
          {/* <p class="mb-6 text-sm md:text-base text-[#f1f1f1]">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p> */}
          <Journey/>
        </div>
        <FounderComponent
          about={
            <div>
              <p>
                Meet Mohammed Zaid, an artistic maverick challenging societal
                expectations. Armed with a BFA and MFA in education, Zaid’s
                journey has been a resilient struggle against peer pressure,
                paving the way for his own website.
              </p>
              <br />
              <p>
                In a world constrained by norms, Zaid’s story is a canvas of
                defiance. His educational achievements serve as brushstrokes,
                depicting a battle for artistic freedom. Now, on the brink of
                launching his website, Zaid invites you into a realm where
                conformity is abandoned.
              </p>
              <br />
              <p>
                This isn’t just a website; it’s an act of rebellion. Explore
                Zaid’s life through murals, graphic designs, and other artworks
                that narrate a tale of individuality. Mohammed Zaid’s digital
                platform is a sanctuary where creativity triumphs over
                conformity – a virtual space where each click resonates with the
                echoes of an artist’s unique defiance.
              </p>
            </div>
          }
          id={"mohammadzaid"}
          photo={ZaidPhoto}
          alt={"Mohammad Zaid"}
          name={"Mohammad Zaid"}
          title={"Sculpture dada"}
          icon={brushIcon}
        />

        <FounderComponent
          id={"vikasmandal"}
          photo={VikasPhoto}
          alt={"Vikas mandal"}
          name={"Vikas Mandal"}
          title={"Designer"}
          icon={paintTubbe}
          about={
            <div>
              <p>
                Introducing Vikas Mandal, the co-founder with a unique academic
                journey. A graduate from Delhi University with a BA, Vikas
                pursued his MA through open education. His path in art was far
                from conventional, fueled by a determination to navigate the
                challenges of peer pressure that discouraged an artistic
                education.
              </p>
              <br />
              <p>
                Vikas story is a testament to choosing passion over
                conformity. Despite the pressure steering him away from the
                arts, he embraced his creative spirit. Now, as a co-founder of
                the website, Vikas invites you to witness a narrative where
                education and art converge in unexpected ways.
              </p>
              <br />
              <p>
                Explore his academic chapters, where every qualification is a
                brushstroke defying societal expectations. Vikas Mandal’s
                journey unfolds on this digital canvas, where art becomes a
                powerful declaration against the currents of conformity. Join
                him in celebrating the triumph of individuality and creativity
                on their website.
              </p>
            </div>
          }
        />
      </div>
    </section>
  );
}

export default About;
