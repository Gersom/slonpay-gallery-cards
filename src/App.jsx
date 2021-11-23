import React, { Fragment} from "react";

import './App.css';

import { Grid } from './components/Grid'
import { Title } from './components/Title'
import { SellCard } from './components/SellCard'

export function App() {

  return (
    <Fragment>
      <Title />
      <SellCard />
      <Grid />
    </Fragment>
  );
}
