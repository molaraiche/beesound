"use client"; // Ensure this is a client-side component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For client-side navigation
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig"; // Import Firebase configuration
import Dashboard from "@/components/Dashboard"; // Your Dashboard component

const BoardPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [authenticated, setAuthenticated] = useState(false); // Authentication status

  useEffect(() => {
    // Firebase authentication listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is authenticated
        setAuthenticated(true);
        setLoading(false); // Stop loading once the user is authenticated
      } else {
        // User is not authenticated, redirect to login
        router.push("/"); // Redirect to the login page
      }
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, [router]);

  if (loading) {
    return <p>Loading...</p>; // Show loading until Firebase resolves
  }

  if (authenticated) {
    return (
      <div>
        <h1>Welcome to the Admin Dashboard</h1>
        <Dashboard /> {/* Your protected dashboard content */}
      </div>
    );
  }

  return null; // Prevent rendering anything if unauthenticated
};

export default BoardPage;
