import React from 'react'; // Importe o React para usar a sintaxe JSX
import "./Intro.css"

function MyComponent() {
  return (
    <div className="content-container">
      <div className="image-container">
        <img src="https://images.squarespace-cdn.com/content/v1/5cd2555994d71a16b3b6ffc1/c4013b7c-2f74-41f0-a11e-8b28a48b4be0/346898663_145124835115329_5428517613208174571_n.jpg" className="harold" alt="" />
        <div className="slogans">
          <h3 className="slogan-1">Back to the originals with <span className='satellite'>SATELLITE STROMPPERS</span></h3>
          <p>UP TO 60% OFF on the best of three stripes.</p> <br />
          <button className='buy-now-btn'>BUY NOW</button>
        </div>
      </div>
    </div>
    // Continue com o restante do seu código aqui...
  );
}

export default MyComponent; // Exporte seu componente para ser usado em outros arquivos
