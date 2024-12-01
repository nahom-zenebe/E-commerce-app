import Navbar from "./components/Navbar";
import Home from './components/Home'
import AboutUs from "./components/Aboutus";
import Service from "./components/Serveice";
import Footer from "./components/Footer";
import SignUp from "./pages/Signup";
function App() {
  return (
    <div className="w-full h-screen bg-[#dadcdd] mt-0"> 
      <Navbar />
      <Home/>
      <AboutUs/>
      <Service/>
      <Footer/>
    
    </div>
  );
}

export default App;
