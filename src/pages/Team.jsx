import { CardDefault } from "../components/Cards";
import { teamData } from "../data";

const Team = () => {
    return (
        <section className="py-12 lg:px-12 flex lg:flex-row flex-col-reverse">
            <div className="container px-6">
            <h1 className="font-redhat text-yellow-100 lg:text-4xl text-2xl">Meet our wonderful Team</h1>
        <p className="text-[#aaaaaa]">"Empowered by passion, driven by innovation – our team transforms challenges into opportunities with collaborative excellence.</p>
            <div className="my-8 flex flex-wrap gap-4 justify-start items-center">
                {teamData.map(team => {
                    return <CardDefault title={team.name} imgLink={team.img} ButtonText={''} alt={team.name} name={team.title} />
                })}
            </div>
            </div>
        </section>
    )
}

export default Team;