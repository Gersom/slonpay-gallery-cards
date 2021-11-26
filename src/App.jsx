import React, { Fragment, useState } from "react";

import './App.css';

import { Grid } from './components/Grid'
import { Header } from './components/Header'
import { Filters } from './components/Filters'
import { Footer } from './components/Footer'
import { Title } from './components/Title'
import { SellCard } from './components/SellCard'

export function App() {

  const [activeState, setActiveState] = useState(false);
  const [sellState, setSellState] = useState({
    card:'img/cards/card1.png',
    monster:'img/monsters/monster1.gif',
    energy: 150, life: 50, power: 80,
    color:'yellow',
    name: 'Cryptsoul'
  });

  const disableActive = () => {
    setActiveState(() => false)
  }
  const enableActive = () => {
    setActiveState(() => true)
  }

  const changeSellData = (newData) => {
    setSellState(() => newData)
  }

  return (
    <Fragment>
      <div className={activeState ? 'is--modal-open' : ''}>
        <Header />
        <Title />
        <Filters />

        <Grid 
          enableActive={enableActive}
          changeSellData={changeSellData} />
        
        <Footer />
      </div>
      <SellCard 
        active={activeState} 
        disableActive={disableActive}
        monster={sellState} />

    </Fragment>
  );
}
