import AppBarActual from "./components/AppBarActual"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import './App.css'

const App= ()=>{

  return(
    <>
      <AppBarActual/>
      <div>
        <section id='hero'>
        <Hero/>
        </section>

        <section id="features">
        <Features/>
        </section>

        <section id='testimonials'>
        <Testimonials/>
        </section>

        <section id='pricing'>
        <Pricing/>
        </section>
      </div>
    </>
  )
}

export default App
