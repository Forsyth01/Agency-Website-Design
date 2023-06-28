import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Pages/Hero'
import WhyWeChooseUs from './Pages/WhyWeChooseUs'
import WhatWeOffer from './Pages/WhatWeOffer'
import AboutUS from './Pages/AboutUS'
import Testimonial from './Pages/Testimonial'
import NewsLetter from './Pages/NewsLetter'
import Footer from './Components/Footer'

function App() {
  return (
    <div className=' text-white'>
      <div className="m-auto w-[85%]">
        <Navbar />
        <Hero />
        <WhyWeChooseUs/>
        <WhatWeOffer/>
        <AboutUS/>
        <Testimonial/>
        <NewsLetter/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
