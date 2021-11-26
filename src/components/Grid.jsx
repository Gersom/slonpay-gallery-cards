import React from "react";
import dataCards from '../data'
import { Card } from './Card'
import { Owner } from './Owner'
import { Price } from './Price'

export function Grid({
  enableActive= () => '',
  changeSellData= () => ''
}) {
  
  const buyFunction = (newData) => {
    enableActive()
    changeSellData(newData)
  }

return (
<div className='c-grid'>
  <div className='c-grid__wrapper'>

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

        <div className='c-grid__prices'>
          <Price title='Precio inicial' />
          <Price title='Precio actual' />
        </div>
        <Owner />

        <button 
        className={`c-grid__buy is--${ele.color}`} 
        onClick={() => buyFunction({
          card: ele.card,
          monster: ele.monster,
          energy: ele.energy, life: ele.life, power: ele.power,
          color: ele.color,
          name: ele.name
        })}>
          <span>Comprar</span>
        </button>
      </div>
    </div>
  )}
  </div>
</div>
);
}