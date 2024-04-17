import React from 'react';

const Gazelle = () => {
  return (
    <div>
      <div className="container-gazelle">
        <div className="gazelle-text">
          <h1 className="gazelle-h1">GAZELLE</h1>
          <p className="gazelle-p1">Adidas Gazelle is a line of shoes released by Adidas in 1966.<br /> The original use of the shoe was for
            training but then later redesigned to an indoor version for handball.</p> <br />
          <button className='gazelle-btn'>GET YOUR GAZELLE</button>
        </div>
        <div className="image-container-gazelle">
          <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1aa15035f97a4115b4d440e093c0efbc_9366/Tenis_Gazelle_Verde_IG0671_HM3_hover.jpg" className="gazelle" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gazelle;
