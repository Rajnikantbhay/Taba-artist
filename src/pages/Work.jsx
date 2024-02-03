import { data } from "../data";
import { CardDefault } from "../components/Cards";
import { graphicDesgignData } from "../data";
import { useEffect } from "react";
import { sculptureData } from "../data";
import { paintingData } from "../data";

export default function Work() {
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
    <section className="py-12 lg:px-12 w-full min-h-screen h-full">
      <div id="muralart" className="container px-6">
        <>
          <h1 className="text-yellow-100 lg:text-4xl text-2xl font-redhat">
            Mural Arts
          </h1>
          <p className="text-white font-inter mb-4">
            Immerse yourself in a symphony of colors and creativity as our mural
            arts transform spaces into vibrant stories
            <br /> that resonate with the pulse of imagination.
          </p>
        </>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
          {data.map((item) => {
            return (
              <CardDefault
                alt={item.title}
                scale={"sm:hover:scale-110"}
                to={`/ourwork/muralarts/${item.id}`}
                key={item.id}
                id={item.id}
                ButtonText={item.ButtonText}
                title={item.title}
                infoText={item.cardtext}
                imgLink={item?.img1}
              />
            );
          })}
        </div>
        <div id="graphicwork">
          <h1 className="text-yellow-100 lg:text-4xl text-2xl font-redhat mt-8">
            Graphic work
          </h1>
          <p className="text-white font-inter mb-4">
            Bring your ideas to life with our graphic design magic – where every
            image tells a story and makes your <br />
            brand stand out with a pop of creativity
          </p>
          <div>
            {graphicDesgignData.map((graphic) => {
              return (
                <CardDefault
                  title={graphic.title}
                  scale={"sm:hover:scale-110"}
                  to={`/ourwork/graphicwork/${graphic.id}`}
                  ButtonText={graphic.ButtonText}
                  id={graphic.id}
                  key={graphic.id}
                  imgLink={graphic?.img4}
                />
              );
            })}
          </div>
        </div>
        <div id="sculpturework">
          <h1 className="text-yellow-100 lg:text-4xl text-2xl font-redhat mt-8">
            Sculpture work
          </h1>
          <p className="text-white font-inter mb-4">
            Bring your ideas to life with our graphic design magic – where every
            image tells a story and makes your <br />
            brand stand out with a pop of creativity
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
            {sculptureData.map((sculpture) => {
              return (
                <CardDefault
                  title={sculpture.title}
                  scale={"sm:hover:scale-110"}
                  to={`/ourwork/sculpturework/${sculpture.id}`}
                  ButtonText={sculpture.ButtonText}
                  id={sculpture.id}
                  key={sculpture.id}
                  imgLink={sculpture?.img1}
                />
              );
            })}
          </div>
        </div>

        <div id="paintingwork">
          <h1 className="text-yellow-100 lg:text-4xl text-2xl font-redhat mt-8">
            Painting work
          </h1>
          <p className="text-white font-inter mb-4">
            Bring your ideas to life with our graphic design magic – where every
            image tells a story and makes your <br />
            brand stand out with a pop of creativity
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
            {paintingData.map((painting) => {
              return (
                <CardDefault
                  title={painting.title}
                  scale={"sm:hover:scale-110"}
                  to={`/ourwork/paintingwork/${painting.id}`}
                  ButtonText={painting.ButtonText}
                  id={painting.id}
                  key={painting.id}
                  imgLink={painting?.img1}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
