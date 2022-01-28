import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProfileImg from "./components/ProfileImg/ProfileImg";
import Aside from "./components/Aside/Aside";
import Block from "./components/Block/Block";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Aside />
        <ProfileImg />
      </main>
      <section className="blocks-wrapper">
        <Block
          title='articles'
          className='block-yellow'
          imgSrc='https://raw.githubusercontent.com/OlhaHolovina/react-components-assignment-1/main/src/img/block-pics/pic01.jpg'/>
        <Block
          title='inspirations'
          className='block-red'
          imgSrc='https://raw.githubusercontent.com/OlhaHolovina/react-components-assignment-1/main/src/img/block-pics/pic02.jpg'/>
        <Block
          title='fonts'
          className='block-green'
          imgSrc='https://raw.githubusercontent.com/OlhaHolovina/react-components-assignment-1/main/src/img/block-pics/pic03.jpg'/>
        <Block
          title='street-art'
          className='block-purple'
          imgSrc='https://raw.githubusercontent.com/OlhaHolovina/react-components-assignment-1/main/src/img/block-pics/pic04.jpg'/>
      </section>
      <Footer />
    </>
  );
}

export default App;
