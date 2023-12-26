import Main from '../components/Main'
import Services from '../components/Services'
import ContactPage from '../components/ContactPage'
import Team from '../components/Team'
import Review from '../components/Review'
import Projects from '../components/Projects'

function HomePage() {
  return (
    <div>
      <Main/>
      <div>
      <Services/>
      <Projects />
      <ContactPage/>
      <Team/>
      <Review/>
      </div>
    </div>
  )
}

export default HomePage
