import React, { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "", card: "" });

  useEffect(() => {
    const fetchClientSecret = async () => {
      const response = await fetch(
        "http://localhost:5001/payment/create-payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: 5000, currency: "usd" }),
        }
      );
      const { clientSecret } = await response.json();
      setClientSecret(clientSecret);
    };

    fetchClientSecret();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateFields = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    if (!stripe || !elements) {
      setPaymentStatus("Stripe is not ready.");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: formData.name,
            email: formData.email,
          },
        },
      }
    );

    if (error) {
      setErrors({ card: error.message });
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setPaymentStatus("Payment successful!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto p-6 border rounded-lg bg-gray-50 shadow-md mt-56 mb-40">
        <h2 className="text-center text-2xl font-bold text-blue-600 mb-6">
          Checkout
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Card Details */}
          <div className="mb-4">
            <label
              htmlFor="card-element"
              className="block text-gray-700 font-medium mb-2"
            >
              Card Details
            </label>
            <div
              className={`p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.card ? "border-red-500" : "border-gray-300"
              }`}
            >
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#333",
                      "::placeholder": { color: "#aab7c4" },
                    },
                    invalid: { color: "#fa755a" },
                  },
                }}
              />
            </div>
            {errors.card && (
              <p className="text-red-500 text-sm mt-1">{errors.card}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          >
            Pay $50
          </button>
        </form>

        {paymentStatus && (
          <div
            className={`mt-4 p-3 rounded-lg ${
              paymentStatus.includes("successful")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {paymentStatus}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CheckoutForm;
