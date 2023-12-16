import Gallery from '../components/Gallery'
import Carousel from '../components/Carousel'
import TagLine from '../components/TagLine'
import ArtCarousel from '../components/artCarousel'

function HomePage() {
  return (
    <div>
      <Carousel/>
      <TagLine/>
      <Gallery/>
      <ArtCarousel />
    </div>
  )
}

export default HomePage
