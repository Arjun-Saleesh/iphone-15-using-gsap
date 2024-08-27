import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Highlights from "./Components/Highlights"
import Howitworks from "./Components/Howitworks"
import Footer from "./Components/Footer"
const App=() =>{
  

  return (
    <>
     <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Howitworks/>
      <Footer/>
     </main>
    </>
  )
}

export default App
