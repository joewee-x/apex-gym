import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Practice from '../Components/Practice'
import OurApproach from '../Components/OurApproach'
import Membership from '../Components/Membership'
import WeeklyRythm from '../Components/WeeklyRythm'
import Testimonials from '../Components/Testimonials'
import Contact from '../Components/Contact'
import { useState } from 'react'
const Home = () => {
  const [bookingMessage, setBookingMessage] = useState('')

  const onBook = (className) => {
    setBookingMessage(`Hello i want to book ${className} session`)
  }
  return (
    <div>
        <Nav />
        <Hero />
        <Practice />
        <OurApproach />
        <Membership />
        <WeeklyRythm  onBook = {onBook}/>
        <Testimonials />
        <Contact bookingMessage = {bookingMessage} setBookingMessage ={setBookingMessage} />
      
    </div>
  )
}

export default Home
