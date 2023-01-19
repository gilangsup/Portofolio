import Navbar from "./components/Navbar"
import Profile from "./components/Profile"

function App() {

  return (
    <div>
      <div className="w-screen h-screen bg-gradient-to-r from-[#642B73] to-[#3A6186] ...">
        <Navbar />
        <Profile/>
      </div>
    </div>
  )
}

export default App
