import React from "react";
import { Card } from "./Card"
import { Owner } from './Owner'
import { Price } from './Price'

export function SellCard({
  active= false,
  disableActive= () => '',
  monster= {
    card:'img/cards/card1.png',
    monster:'img/monsters/monster1.gif',
    energy: 150, life: 50, power: 80,
    color:'yellow',
    name: 'Cryptsoul'
  }
}) {
  return (
    <div className={`c-sell-card ${active ? 'is--active' : ''}`}>
      <button 
      className='c-sell-card__cross'
      onClick={disableActive}>
        x</button>
      <button className='c-sell-card__cross-bg'
      onClick={disableActive}></button>
      <div className='c-sell-card__wrapper'>
        <div className='c-sell-card__card'>
          <Card 
            card={monster.card}
            monster={monster.monster}
            energy={monster.energy}
            life={monster.life}
            power={monster.power}
            color={monster.color} />
        </div>
        <div className='c-sell-card__content'>
          <h3 className='c-sell-card__title'>
            {monster.name}</h3>

          <p className='c-sell-card__description'>
            Un monstruo singular que te dejara sorprendido ante tales atributos. Tiene una energia excelente, no te descepcionará</p>
          
          <div className='c-sell-card__prices'>
            <Price title='Precio inicial' />
            <Price title='Precio actual' />
          </div>
          <Owner />

          <button className='c-sell-card__btn'>
            Comprar</button>
        </div>
      </div>
    </div>
  );
}