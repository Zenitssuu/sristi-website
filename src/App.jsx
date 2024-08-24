import Intro from "./components/Intro"
import Navbar from "./components/Navbar"

const App = () => {

  return (
    <main className="bg-black min-h-screen w-screen relative">
      <Navbar/>
      <Intro/>
    </main>
    
  )
}

export default App
