import React from 'react'
import StickyNavbar from './components/Navbar'
import Footer from './components/Footer'

function Layout({children}) {
  return (
    <div>
      <StickyNavbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
