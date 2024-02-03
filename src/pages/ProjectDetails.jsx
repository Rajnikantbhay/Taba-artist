import { useParams } from "react-router-dom";
import { data, paintingData, portraitData, sculptureData } from "../data";
import { Youtube } from "../components/Youtube";
import { graphicDesgignData } from "../data";
import { Image, Shimmer } from "react-shimmer";

export default function ProjectDetails() {
  // const[get,setGet] = useState(false)
  const { id } = useParams();
  const cardId = parseInt(id, 10);
  const filteredData = data.find(
    (filterDatafromdata) => filterDatafromdata.id === cardId
  );

  // useEffect(() => {
  //     window.addEventListener('resize' , () => {
  //         window.innerWidth >= 750 && setGet(true)
  //     })
  // })

  return (
    <section className="w-full h-full py-12 lg:px-12 text-white">
      <div className="container px-6 md:flex block">
        <div className="w-full md:w-3/5 md:px-6">
          {filteredData.youtube !== "" ? (
            <Youtube link={filteredData.youtube} />
          ) : (
            <div>
              <Image
                fallback={<Shimmer width={300} height={300} />}
                src={filteredData?.img1}
                alt={filteredData.data + "first paingting"}
              />
            </div>
          )}
          <div className="font-redhat text-3xl tracking-wide my-4">
            <h1 className="text-white">{filteredData.title}</h1>
          </div>
          <>{filteredData.info}</>
        </div>
        <div className="w-full  md:flex-1 space-y-4">
          <div className="flex">
            <Image
              fallback={<Shimmer width={300} height={300} />}
              loading="lazy"
              src={filteredData?.img2}
              alt={filteredData.title + " second painting"}
            />
          </div>

          <div className="flex">
            <Image
              fallback={<Shimmer width={300} height={300} />}
              loading="lazy"
              src={filteredData?.img3}
              alt={filteredData.title + " third painting"}
            />
          </div>

          <div className="flex">
            <Image
              fallback={<Shimmer width={300} height={300} />}
              loading="lazy"
              src={filteredData?.img4}
              alt={filteredData.title + " fourth painting"}
            />
          </div>

          <div className="flex">
            <Image
              fallback={<Shimmer width={300} height={300} />}
              loading="lazy"
              src={filteredData?.img5}
              alt={filteredData.title + " fourth painting"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export const GraphicWorkDetails = () => {
  const { id } = useParams();
  const cardId = parseInt(id, 10);
  const filteredData = graphicDesgignData.find(
    (filterDatafromdata) => filterDatafromdata.id === cardId
  );
  return (
    <section className="w-full h-full py-12 lg:px-12 bg-black text-white">
      <div className="container px-6 md:flex block">
        <div className="w-full lg:w-3/5 md:px-6">
          <div>
            <Image
              fallback={<Shimmer width={300} height={300} />}
              src={filteredData?.img1}
              alt={filteredData.data + "first paingting"}
            />
          </div>
          <div className="font-redhat text-3xl tracking-wide my-4">
            <h1 className="text-white">{filteredData.title}</h1>
          </div>
          {/* <div>
                <p className="text-[#aaaaaa]">
                    {filteredData.infoText}</p>
            </div> */}
        </div>
        <div className="w-full  lg:flex-1 space-y-4">
          <div className="flex">
            <Image
              fallback={<Shimmer width={300} height={300} />}
              loading="lazy"
              src={filteredData?.img2}
              alt={filteredData.title + " second painting"}
            />
          </div>
          <div className="flex">
            <Image
              fallback={<Shimmer width={300} height={300} />}
              loading="lazy"
              src={filteredData?.img3}
              alt={filteredData.title + " third painting"}
            />
          </div>
          <div className="flex">
            <Image
              fallback={<Shimmer width={300} height={300} />}
              loading="lazy"
              src={filteredData?.img4}
              alt={filteredData.title + " fourth painting"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const SculptureWorkDetails = () => {
  const { id } = useParams();
  const cardId = parseInt(id, 10);
  const filteredData = sculptureData.find(
    (filterDatafromdata) => filterDatafromdata.id === cardId
  );
  return (
    <section className="w-full h-full py-12 lg:px-12 bg-black text-white">
      <div className="container px-6 md:flex block">
        <div className="w-full lg:w-3/5 md:px-6">
          <div>
            <Image
              fallback={<Shimmer width={300} height={300} />}
              src={filteredData?.img1}
              alt={filteredData.data + "first paingting"}
            />
          </div>
          <div className="font-redhat text-3xl tracking-wide my-4">
            <h1 className="text-white">{filteredData.title}</h1>
          </div>
          {/* <div>
                <p className="text-[#aaaaaa]">
                    {filteredData.infoText}</p>
            </div> */}
        </div>
        <div className="w-full  lg:flex-1 space-y-4">
          <div className="flex">
            <Image
              fallback={<Shimmer width={300} height={300} />}
              loading="lazy"
              src={filteredData?.img2}
              alt={filteredData.title + " second painting"}
            />
          </div>
          <div className="flex">
            <Image
              fallback={<Shimmer width={300} height={300} />}
              loading="lazy"
              src={filteredData?.img3}
              alt={filteredData.title + " third painting"}
            />
          </div>
          <div className="flex">
            <Image
              fallback={<Shimmer width={300} height={300} />}
              loading="lazy"
              src={filteredData?.img4}
              alt={filteredData.title + " fourth painting"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const PaintingWorkDetails = () => {
  const { id } = useParams();
  const cardId = parseInt(id, 10);
  const filteredData = paintingData.find(
    (filterDatafromdata) => filterDatafromdata.id === cardId
  );
  return (
    <section className="w-full h-full py-12 lg:px-12 bg-black text-white">
      <div className="container px-6 md:flex block">
        <div className="w-full lg:w-3/5 md:px-6">
          <div>
            <Image
              fallback={<Shimmer width={300} height={300} />}
              src={filteredData?.img1}
              alt={filteredData.data + "first paingting"}
            />
          </div>
          <div className="font-redhat text-3xl tracking-wide my-4">
            <h1 className="text-white">{filteredData.title}</h1>
          </div>
          {/* <div>
                <p className="text-[#aaaaaa]">
                    {filteredData.infoText}</p>
            </div> */}
        </div>
        <div className="w-full  lg:flex-1 space-y-4">
          <div className="flex">
            <Image
              fallback={<Shimmer width={300} height={300} />}
              loading="lazy"
              src={filteredData?.img2}
              alt={filteredData.title + " second painting"}
            />
          </div>
          <div className="flex">
            <Image
              fallback={<Shimmer width={300} height={300} />}
              loading="lazy"
              src={filteredData?.img3}
              alt={filteredData.title + " third painting"}
            />
          </div>
          <div className="flex">
            <Image
              fallback={<Shimmer width={300} height={300} />}
              loading="lazy"
              src={filteredData?.img4}
              alt={filteredData.title + " fourth painting"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const PortraitWorkDetails = () => {
  const { id } = useParams();
  const cardId = parseInt(id, 10);
  const filteredData = portraitData.find(
    (filterDatafromdata) => filterDatafromdata.id === cardId
  );
  return (
    <section className="w-full h-full py-12 lg:px-12 bg-black text-white">
      <div className="container px-6 md:flex block">
        <div className="w-full lg:w-3/5 md:px-6">
          <div>
            <Image
              fallback={<Shimmer width={300} height={300} />}
              src={filteredData?.img1}
              alt={filteredData.data + "first paingting"}
            />
          </div>
          <div className="font-redhat text-3xl tracking-wide my-4">
            <h1 className="text-white">{filteredData.title}</h1>
          </div>
          {/* <div>
                <p className="text-[#aaaaaa]">
                    {filteredData.infoText}</p>
            </div> */}
        </div>
        <div className="w-full  lg:flex-1 space-y-4">
          <div className="flex">
            <Image
              fallback={<Shimmer width={300} height={300} />}
              loading="lazy"
              src={filteredData?.img2}
              alt={filteredData.title + " second painting"}
            />
          </div>
          <div className="flex">
            <Image
              fallback={<Shimmer width={300} height={300} />}
              loading="lazy"
              src={filteredData?.img3}
              alt={filteredData.title + " third painting"}
            />
          </div>
          <div className="flex">
            <Image
              fallback={<Shimmer width={300} height={300} />}
              loading="lazy"
              src={filteredData?.img4}
              alt={filteredData.title + " fourth painting"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
