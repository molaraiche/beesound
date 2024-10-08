"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);


    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 1000 }), 
    });

    const session = await response.json();

    const stripe = await stripePromise;
    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: session.id });
    }

    setLoading(false);
  };

  return (
    <button
      className={`bg-primary rounded-[10px] text-white py-2 px-10 font-medium ${
        loading ? "opacity-50" : ""
      }`}
      onClick={handleCheckout}
      disabled={loading}>
      {loading ? "Processing..." : "Pay $10"}
    </button>
  );
}
