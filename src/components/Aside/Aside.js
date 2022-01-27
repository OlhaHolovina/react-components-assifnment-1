import helloImg from '../../img/hello_img.png';
import './style.css'

function Aside() {
  return (
    <section className="content">
      <section>
        <img id="hello-img" src={helloImg} alt="Hello word and introduction" />
      </section>

      <p className="about-me">
        I’m a graphic designer with more than 10 years of experience in branding, packaging, publication design,
        UI/UX and web design. I specialise as a conceptual designer and worked with numerous small and large
        businesses and projects. I’ve a vibrant and bold approach to design.
        I like to create brands and web solutions filled with individuality and personality,
        with expressive typography, composition and confident colour palettes.
      </p>
    </section>
  );
}

export default Aside;