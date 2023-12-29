import Main from '../components/Main'
import Services from '../components/Services'
import ContactPage from '../components/ContactPage'
import Team from '../components/Team'
import Review from '../components/Review'
import Projects from '../components/Projects'
import WhatsappButton from '../components/WhatsappButton'
import { Brands } from '../components/Brands'
function HomePage() {
  return (
    <div>
      <WhatsappButton/>
      <Main/>
      <div>
      <Services/>
      <Projects />
      <Brands />
      <ContactPage/>
      <Team/>
      <Review/>
      </div>
    </div>
  )
}

export default HomePage
