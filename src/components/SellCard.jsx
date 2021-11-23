import React from "react";
import { Card } from "./Card"
import { Owner } from './Owner'
import { Price } from './Price'

export function SellCard() {
  const ele = {
    card:'img/cards/card1.png',
    monster:'img/monsters/monster1.gif',
    energy: 150, life: 50, power: 80,
    color:'yellow',
    name: 'Cryptsoul'
  }
  return (
    <div className='c-sell-card'>
      <div className='c-sell-card__wrapper'>
        <div className='c-sell-card__card'>
          <Card 
            card={ele.card}
            monster={ele.monster}
            energy={ele.energy}
            life={ele.life}
            power={ele.power}
            color={ele.color} />
        </div>
        <div className='c-sell-card__content'>
          <h3 className='c-sell-card__title'>
            Cryptsoul</h3>

          <p className='c-sell-card__description'>
            Un monstruo singular que te dejara sorprendido ante tales atributos. Tiene una energia excelente, no te descepcionará</p>
          
          <div className='c-sell-card__prices'>
            <Price title='Precio inicial' />
            <Price title='Precio actual' />
          </div>
          <Owner />

          <button className='c-sell-card__btn'>
            COMPRAR</button>
        </div>
      </div>
    </div>
  );
}