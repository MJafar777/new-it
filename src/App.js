import React from "react";
import { Route, Routes } from "react-router-dom";
import Fotter from "./Components/Fotter/Fotter";
import Navbar from "./Components/Navbar/Navbar";
import Error from "./pages/Error/Error";
import HomePage from "./pages/home/HomePage";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" exact element={<HomePage />} />

          <Route path="/*" exact element={<Error />} />
        </Routes>
      </main>
      <Fotter />
    </>
  );
};

export default App;
