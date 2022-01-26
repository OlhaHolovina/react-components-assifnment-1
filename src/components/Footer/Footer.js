import React from 'react';
import facebook from '../../img/social-media/facebook-icon.png';
import linkedin from '../../img/social-media/in-icon.png';
import instagram from '../../img/social-media/instagram-icon.png';
import twitter from '../../img/social-media/twitter-icon.png';

class Footer extends React.Component {
  render() {
    return(
      <footer className="social-media">
        <h2 id="footer-contacts">contacts</h2>
        <a href="https://www.facebook.com" target="_blank">
          <img src={facebook} alt="hyperlink to the facebook page" />
        </a>

        <a href="https://www.linkedin.com" target="_blank">
          <img src={linkedin} alt="hyperlink to the linkedin page" />
        </a>

        <a href="https://www.instagram.com" target="_blank">
          <img src={instagram} alt="hyperlink to the instagram page" />
        </a>

        <a href="https://www.twitter.com" target="_blank">
          <img src={twitter} alt="hyperlink to the twitter page" />
        </a>
      </footer>
    )
  }
}
export default Footer;
