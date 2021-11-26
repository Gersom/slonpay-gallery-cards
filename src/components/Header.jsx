import React from "react";

export function Header() {
return (
  <div className='c-header'>
    <div className='c-header__wrapper'>
      <img className='c-header__logo' src="img/logo.png" alt="" />
      <div className='c-header__links'>
        <a href="/">Marketplace</a>
        <a href="/">Feature</a>
        <a href="/">Activity</a>
      </div>
      <button className='c-header__btn'>
        Connect Wallet
      </button>
    </div>
  </div>
);
}