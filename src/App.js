import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProfileImg from "./components/ProfileImg/ProfileImg";
import Aside from "./components/Aside/Aside";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Aside />
        <ProfileImg />
      </main>
      <Footer />
    </>
  );
}

export default App;
