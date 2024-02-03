import Main from '../components/Main'
import Services from '../components/Services'
import ContactPage from '../components/ContactPage'
import Founders from '../components/Founder'
import Review from '../components/Review'
import Projects from '../components/Projects'
import ParnersOfTaba from '../components/PartnersofTaba'

function HomePage() {
  return (
    <div >
      <Main/>
      <div>
      <Projects />
      <Services/>
     
      {/* <MovingWorkCarousel/> */}
      {/* <Testing/> */}
      <ParnersOfTaba/>
      <ContactPage/>
      <Founders/>
      <Review/>
      </div>
    </div>
  )
}

export default HomePage
