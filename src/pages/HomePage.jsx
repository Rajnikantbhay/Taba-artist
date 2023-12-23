import Hero from '../components/Hero'
import Catalog from '../components/Catalog'
import ContactPage from '../components/ContactPage'
import Main from '../components/Main'

function HomePage() {
  return (
    <div>
      {/* <Hero/> */}
      <Main/>
      <Catalog/>
      <ContactPage />
    </div>
  )
}

export default HomePage
