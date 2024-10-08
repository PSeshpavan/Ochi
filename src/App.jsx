import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import AboutUs from './components/AboutUs'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navbar />
      <LandingPage />
      <Marquee />
      <AboutUs />
      <Eyes />
      <Featured />
      <Footer />
    </>
  )
}

export default App
