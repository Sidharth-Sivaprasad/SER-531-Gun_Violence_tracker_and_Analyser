import React from "react";
import Dashboard from "./components/dashboard";
import Map from './components/map';
import Report from "./components/reports";
import NavBody from './components/Navbar';
import { Grid } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          {/* <h1>hello</h1> */}
          <NavBody />
        </Grid>
        <Grid item xs={8}>
          
            <Routes>
            
              <Route exact path='/' element={<Dashboard />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/map' element={<Map />} />
              <Route path='/report' element={<Report />} />
            </Routes>
          
        </Grid>
      </Grid>
      </Router>
    </div>
  );
}

export default App;
