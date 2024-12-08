// CheckoutForm.js
import React, { useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CardElement from '../components/CardElement'
import toast from "react-hot-toast";
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState("");





useEffect(()=>{
  useEffect(() => {
    const fetchClientSecret = async () => {
      const response = await fetch("http://localhost:5001/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 1000, currency: "usd" }),
      });
      const { clientSecret } = await response.json();
      setClientSecret(clientSecret); // Save this to pass to confirmCardPayment
    };
  
    fetchClientSecret();
  }, []);
})







  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      "client-secret-from-backend", 
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );


    if (error) {
      setPaymentStatus(`Error: ${error.message}`);
      toast.success(`Error: ${error.message}`)
    } else if (paymentIntent.status === "succeeded") {
      setPaymentStatus("Payment succeeded!");
      toast.success("Payment succeeded!")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </form>
  );
};

export default CheckoutForm;
