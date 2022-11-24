import React from "react";
import Dashboard from "./components/dashboard";
import NavBody from './components/Navbar';
import { Grid } from '@mui/material';

function App() {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          {/* <h1>hello</h1> */}
          <NavBody/>
        </Grid>
        <Grid item xs={8}>
          {/* <h1>Dshboard</h1> */}
          <Dashboard/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
