import React from 'react'; // Importe o React para usar a sintaxe JSX
import "./Intro.css"

function MyComponent() {
  return (
    <>
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
      <div className="secondary-container">
        <div className="title-shoes">
          <h1>CHOOSE YOUR FAVOURITE</h1>
        </div>
        <div className="shoes">
          <a href="/gazelle" className="shoes-pic">
            <img src="https://izicop.com/cdn/shop/files/snakerstoreAdidas_Gazelle_Indoor_Scarlet_Cloud_White-H06261-0_2048x2048.png?v=1689931454" className="shoespic" alt="" />
            <p className="p-shoes">GAZELLE</p>
          </a>
          <a href="/spezial" className="shoes-pic">
            <img src="https://izicop.com/cdn/shop/files/snakerstoreAdidas_Handball_Spezial_Clear_Pink-IF6561-0_2048x2048.png?v=1690623088" className="shoespic" alt="" />
            <p className="p-shoes">SPEZIAL</p>
          </a>
          <a href="/samba" className="shoes-pic">
            <img src="https://izicop.com/cdn/shop/files/snakerstoreAdidas_Samba_OG_Night_Navy_Cream_White_Gum-ID2056-0_2048x2048.png?v=1694748817" className="shoespic" alt="" />
            <p className="p-shoes">SAMBA</p>
          </a>
          <a href="/campus00s" className="shoes-pic">
            <img src="https://izicop.com/cdn/shop/files/snakerstoreAdidas_Campus_00s_Dark_Green_Cloud_White-H03472-0_2048x2048.png?v=1683277370" className="shoespic" alt="" />
            <p className="p-shoes">CAMPUS 00s</p>
          </a>
        </div>
      </div>
    </>
    // Continue com o restante do seu código aqui...
  );
}

export default MyComponent; // Exporte seu componente para ser usado em outros arquivos
