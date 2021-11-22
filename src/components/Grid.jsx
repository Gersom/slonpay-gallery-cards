import React from "react";
import dataCards from '../data'
import { Card } from './Card'
import { Owner } from './Owner'

export function Grid() {
  
  return (
  <div className='c-grid'>
    { dataCards.map((ele) =>
      <div className='c-grid__content'>
        <div className='c-grid__item'>
          <Card 
            card={ele.card}
            monster={ele.monster}
            energy={ele.energy}
            life={ele.life}
            power={ele.power}
            color={ele.color} />
          
          <div className='c-grid__data'>
            <h3 className='c-grid__title'>
              {ele.name}</h3>
          </div>

          <Owner />

          <button className={`c-grid__buy is--${ele.color}`}>
            <span>COMPRAR</span>
          </button>
        </div>
      </div>
    )}
  </div>
  );
}