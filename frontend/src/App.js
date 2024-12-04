import Navbar from "./components/Navbar";
import Home from './components/Home'
import AboutUs from "./components/Aboutus";
import Service from "./components/Serveice";
import Login from './pages/Login'
import Market from "./pages/Market";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import SignUp from "./pages/Signup";
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <Router className="w-full h-screen bg-[#dadcdd] mt-0"> 
      
      <Routes>
        <Route path="/" element={<>
        <Navbar />
      <Home/>
      <AboutUs/>
      <Service/>
      <Footer/>
        </>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/market" element={<Market/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>

      <Toaster />
    </Router>
  );
}

export default App;
