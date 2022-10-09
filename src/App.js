import React from "react";
import Fotter from "./Components/Fotter/Fotter";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./page/home/HomePage";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Fotter />
    </>
  );
};

export default App;
