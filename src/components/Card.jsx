import React from "react";

export function Card({
  card= 'img/cards/card1.png',
  monster='img/monsters/monster1.gif',
  energy= 130,
  life= 90,
  power= 215,
  color='yellow'
}) {
  return (
    <div className='c-card'>
      <img className='c-card__frame'
      src={card} alt="Marco" />
      <img className='c-card__monster'
      src={monster} alt="Mounstro" />
      
      <div className={`c-card__numbers is--${color}`}>
        <span>{energy}</span>
        <span>{life}</span>
        <span>{power}</span>
      </div>

      <div className='c-card__statistics'>
        <img src="img/statistics/power.png" alt="Poder" />
        <img src="img/statistics/energy.png" alt="Energia" />
        <img src="img/statistics/life.png" alt="Vida" />
      </div>
    </div>
  );
}