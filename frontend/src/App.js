import Navbar from "./components/Navbar";
import Home from './components/Home'
import AboutUs from "./components/Aboutus";
import Service from "./components/Serveice";
import Login from './pages/Login'
import Market from "./pages/Market";
import Footer from "./components/Footer";
import DetailProduct from './pages/DetailProduct'
import Cart from "./pages/Cart";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import SignUp from "./pages/Signup";
import CheckoutForm from './pages/CheckoutForm'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import toast, { Toaster } from 'react-hot-toast';
function App() {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
  
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
        <Route path="signup" element={<SignUp/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="market" element={<Market/>}/>
        <Route path="market/:ProductId" element={<DetailProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
       
        <Route path="/checkoutfrom" element={
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          }/>

      </Routes>

      <Toaster />
    </Router>
  );
}

export default App;
