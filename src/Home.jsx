import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Highlights from "./components/Highlights"
const Home = () => {

  return (
    <main className="bg-black min-h-screen w-screen relative">
      <Navbar/>
      <Intro/>
      <Highlights/>
    </main>
    
  )
}

export default Home
