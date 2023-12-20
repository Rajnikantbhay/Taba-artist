import Gallery from '../components/Gallery'
import TagLine from '../components/TagLine'
import ArtCarousel from '../components/artCarousel'
import Hero from '../components/Hero'
import Catalog from '../components/Project'

function HomePage() {
  return (
    <div>
      <Hero/>
      <Catalog/>
      {/* <TagLine/>
      <Gallery/>
      <ArtCarousel /> */}
    </div>
  )
}

export default HomePage
