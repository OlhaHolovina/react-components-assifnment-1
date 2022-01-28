import './style.css'

function Block({imgSrc, className, title}) {
  return (
    <section className={`block ${className}`}>
      <p className="block-header">
        <span className='block-header-line'> </span>
        <span className='block-header-title'>{title}</span>
      </p>
      <img src={imgSrc} alt="typography example"/>
    </section>
  );
}

export default Block;