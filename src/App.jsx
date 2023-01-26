
import Carousel from "./components/Carousel";
import Profile from "./components/Profile"
import Projects from './components/Projects';

const slides = [
   "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
   "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png"
]

function App() {

  return (
      <div className="max-w-screen min-h-screen bg-gradient-to-r from-[#0f0c29] to-[#302b63] ...">
        <Profile/>
        <Projects/>
        <Carousel/>
      </div>

  )
}

export default App
