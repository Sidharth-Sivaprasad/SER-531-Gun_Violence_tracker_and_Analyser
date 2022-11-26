import React from "react";
import Dashboard from "./components/dashboard";
import Map from './components/map';
import NavBody from './components/Navbar';
import { Grid } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>

      <Grid container spacing={0}>
        <Grid item xs={4}>
          {/* <h1>hello</h1> */}
          <NavBody />
        </Grid>
        <Grid item xs={8}>
          <Router>
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/map' element={<Map />} />
             
            </Routes>
          </Router>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
