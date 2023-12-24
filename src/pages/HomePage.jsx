import Main from '../components/Main'
import Services from '../components/Services'
import ContactPage from '../components/ContactPage'
import Team from '../components/Team'
import { Review } from '../components/Cards'

function HomePage() {
  return (
    <div>
      <Main/>
      <div>
      <Services/>
      <ContactPage/>
      <Team/>
      {/* <Review /> */}
      </div>
    </div>
  )
}

export default HomePage
