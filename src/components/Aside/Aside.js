import helloImg from '../../img/hello_img.png';
import './style.css'

function Aside() {
  return (
    <section className="content">
      <section>
        <img id="hello-img" src={helloImg} alt="Hello word and introduction" />
      </section>

      <p className="about-me">
        I have been working in the graphic design industry for many years. My path in graphic design has started
        about 14 years ago, and from the very beginning I have realized that this is what I love and what I want to
        do.
        The graphic design is my job and my passion.
      </p>
    </section>
  );
}

export default Aside;