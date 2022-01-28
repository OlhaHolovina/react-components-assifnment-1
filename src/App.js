import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProfileImg from "./components/ProfileImg/ProfileImg";
import Aside from "./components/Aside/Aside";
import Block from "./components/blocks/Block";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Aside />
        <ProfileImg />
      </main>
      <section className="blocks-wrapper">
        <Block className='block-yellow'/>
        <Block className='block-yellow'/>
        <Block className='block-yellow'/>
        <Block className='block-yellow'/>
      </section>
      <Footer />
    </>
  );
}

export default App;
