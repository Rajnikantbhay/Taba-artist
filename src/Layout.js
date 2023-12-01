import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Layout({children}) {
  return (
    <div>
      <div className=''><Navbar/></div>  
      {children}
        <Footer/>
    </div>
  )
}

export default Layout
