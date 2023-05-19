import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import FormContact from "../../components/FormContact";
import Profile from "../../components/Profile";
import Projects from "../../components/Projects";

function Home() {
    return (
      <div className="max-w-screen min-h-screen text-white bg-gradient-to-r from-[#000000] to-[#434343] ...">
        <Profile />
        <Projects />
        <Carousel />
        <FormContact />
        <Footer />
      </div>
    );
  }

  export default Home;