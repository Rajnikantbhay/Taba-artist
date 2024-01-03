import React from 'react'
import StickyNavbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton'
function Layout({children}) {
  return (
    <>  
      <StickyNavbar/>
      <WhatsappButton />
      {children}
      <Footer/>
    </>
  )
}

export default Layout
