import React, { useState, useEffect } from "react";
import { Task1 } from "./components/Task1";
import AOS from "aos";
import "aos/dist/aos.css";

const Loader: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <img width={100} height={100} src="https://cdn-icons-gif.flaticon.com/12749/12749979.gif" alt="Loading..." />
    </div>
  );
};

export const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setLoading(false);
    }, 2500); // Simulating loading for 3 seconds
  }, []);

  return (
    <>
      {loading ? <Loader /> : <Task1 />}
    </>
  );
};
