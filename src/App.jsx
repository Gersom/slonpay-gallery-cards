import React, { Fragment, useState } from "react";

import './App.css';

import { Grid } from './components/Grid'
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
      <Title />

      <Grid 
        enableActive={enableActive} />

      <SellCard 
        active={activeState} 
        disableActive={disableActive} />

    </Fragment>
  );
}
