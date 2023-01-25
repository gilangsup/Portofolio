
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
      <div className="w-full min-h-screen bg-gradient-to-r from-[#0f0c29] to-[#302b63]  ...">
        <Profile/>
      <Projects/>
      <div className="max-w-lg ">
      <Carousel>
        {...slides.map((s) => 
          <img className="flex justify-center" src={s}/>
        )}
      </Carousel>
      </div>
      </div>

  )
}

export default App
