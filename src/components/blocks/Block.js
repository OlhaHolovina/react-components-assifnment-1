import './style.css'

function Block({imgSrc, className}) {
  return (
    <section className={`block ${className}`}>
      <p className="block-header">
        <span className='block-header-line'> </span>
        <span className='block-header-title'>articles</span>
      </p>
      <img src={imgSrc} alt="typography example"/>
    </section>
  );
}

export default Block;