import React from 'react'
import StickyNavbar from './components/Navbar'
import Footer from './components/Footer'


function Layout({children}) {
  return (
    <>  
      <StickyNavbar/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
