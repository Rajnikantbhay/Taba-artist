import React from 'react'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Carousel from '../components/Carousel'

function HomePage() {
  return (
    <div className='' style={{background:"#19345F"}}>
      <Gallery/>
      <Carousel/>
    </div>
  )
}

export default HomePage
