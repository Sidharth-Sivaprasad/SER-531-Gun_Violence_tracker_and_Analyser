import React from "react";
import Dashboard from "./components/dashboard";
import NavBody from './components/Navbar';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <NavBody/>
        </Grid>
        <Grid>
          <Dashboard/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
