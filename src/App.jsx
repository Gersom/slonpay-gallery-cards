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

  const disableActive = () => {
    setActiveState(() => false)
  }
  const enableActive = () => {
    setActiveState(() => true)
  }

  return (
    <Fragment>
      <Header />
      <Title />
      <Filters />

      <Grid 
        enableActive={enableActive} />

      <SellCard 
        active={activeState} 
        disableActive={disableActive} />
      
      <Footer />

    </Fragment>
  );
}
