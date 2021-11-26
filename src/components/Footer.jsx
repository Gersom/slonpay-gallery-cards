import React from "react";

export function Footer() {
  return (
    <footer className='c-footer'>
      <div className='c-footer__wrapper'>
        <div className='c-footer__left'>
          <img className='c-footer__logo' src="img/logo.png" alt="" />
          <p>Las transacciones de NFTs con 100% seguro y confiable, con una garantia de más de 3 años.</p>
          <div className='c-footer__social'>
            <a href="/">
              <img src="img/fb.png" alt="" />
            </a>
            <a href="/">
              <img src="img/tw.png" alt="" />
            </a>
            <a href="/">
              <img src="img/ig.png" alt="" />
            </a>
          </div>
        </div>

        <div className='c-footer__right'>
          <div className='c-footer__links'>
            <div className='title'>Acerca de</div>
            <a href="/">Servicios</a>
            <a href="/">Compañia</a>
            <a href="/">Precios</a>
          </div>
          <div className='c-footer__links'>
            <div className='title'>Legales</div>
            <a href="/">Politica</a>
            <a href="/">Copyright</a>
            <a href="/">Politica</a>
            <a href="/">Terminos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}