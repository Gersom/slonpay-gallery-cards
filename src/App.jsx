import React, { Fragment} from "react";

import './App.css';

import { Grid } from './components/Grid'
import { Title } from './components/Title'

export function App() {

  return (
    <Fragment>
      <Title />
      <Grid />
    </Fragment>
  );
}
