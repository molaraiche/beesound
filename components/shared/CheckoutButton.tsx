"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

interface CheckoutButtonProps {
  total: number; // Pass the total cart value as a prop
}

export default function CheckoutButton({ total }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      // Create a checkout session using your API endpoint
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total * 100 }), // Convert total to cents for Stripe
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session.");
      }

      const session = await response.json();

      const stripe = await stripePromise;
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: session.id });
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={`bg-primary rounded-[10px] text-white py-2 px-10 font-medium ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={handleCheckout}
      disabled={loading}>
      {loading ? "Processing..." : `Pay $${total.toFixed(2)}`}
    </button>
  );
}
