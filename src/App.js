import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProfileImg from "./components/ProfileImg/ProfileImg";
import Aside from "./components/Aside/Aside";
import Block1 from "./components/blocks/Block1";
import Block2 from "./components/blocks/Block2";
import Block3 from "./components/blocks/Block3";
import Block4 from "./components/blocks/Block4";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Aside />
        <ProfileImg />
      </main>
      <section className="blocks-wrapper">
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
      </section>
      <Footer />
    </>
  );
}

export default App;
