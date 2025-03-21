import React from 'react'
import HeroSection from "../components/HeroSection"
import Features from '../components/Features'
import Testimonial from '../components/Testimonial'
import HomeComponent from '../components/HomeComponent'

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <Features/>
      <HomeComponent/>
      <Testimonial/>
    </>
  )
}

export default HomePage
