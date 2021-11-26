import React from "react";

export function Footer() {
  return (
    <footer className='c-footer'>
      <div className='c-wrapper'>
        <div className='c-footer__logo'>
          <img src="img/logo.png" alt="" />
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
      </div>
    </footer>
  );
}