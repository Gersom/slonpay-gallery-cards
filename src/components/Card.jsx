import React from "react";

export function Card() {
  return (
    <div className='c-card'>
      <div className='c-card__content'>
        <img className='c-card__frame'
        src="img/cards/card1.png" alt="Marco" />
        <img className='c-card__monster'
        src="img/monsters/monster1.gif" alt="Mounstro" />
        <div className='c-card__statistics'>
          <img src="img/statistics/power.png" alt="Poder" />
          <img src="img/statistics/energy.png" alt="Energia" />
          <img src="img/statistics/life.png" alt="Vida" />
        </div>
      </div>
      
      <h3 className='c-card__name'>
        Vexbrute</h3>
      
    </div>
  );
}