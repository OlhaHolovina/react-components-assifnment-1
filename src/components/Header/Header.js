import React from 'react';
import logotype from '../../img/o_h_logo.png';
import humberLogo from '../../img/humber_logo.png';
import './style.css'

class Header extends React.Component {
  render() {
    return(
      <header className="container">
        <section className="header-section">
          <img className="logotype" src={logotype} alt="icon of logotype Olha Holovina" />
          <section id="name-block">
            <p className="name">olha holovina</p>
            <p className="occupation">graphic design</p>
            <p className="specification">student</p>
          </section>
          <img id="humber-logo" src={humberLogo} alt="Humber logo" />
        </section>
      </header>
    )
  }
}
export default Header;