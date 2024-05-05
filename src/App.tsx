import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";

const Loader: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        width={100}
        height={100}
        src="https://cdn-icons-gif.flaticon.com/12749/12749979.gif"
        alt="Loading..."
      />
    </div>
  );
};

export const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500); // Simulating loading for 2.5 seconds
  }, []);

  useEffect(() => {
    AOS.init();
  }, []); // Initialize AOS only once

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
};
