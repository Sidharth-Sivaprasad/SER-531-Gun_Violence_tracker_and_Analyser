import React, { useState, useEffect } from "react";
import USAMap from "react-usa-map";
import styled from "styled-components";
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Map = () => {
  const Wrapper = styled.div`
  margin-left:-150px;
  padding:0px;
  .Dropdown-root{
    width:20%;
}


`;
  const [statesData, setStatesData] = useState({});
  const [yearValue,setYearValue] = useState('2021');

  const getMapData = (year)=>{
    axios.get(`http://localhost:8080/countIncidentsByState?year=${year}`)
    .then(res => {
      setStatesData(res.data)
    })
  }

  const onChangeDropdown = (val)=>{
      getMapData(val.value)
      setYearValue(val.value)
  }
  useEffect(() => {
    getMapData('21');
  }, [])

  const statesCustomConfig = () => {
    return {
      // "NJ": {
      //   fill: "navy",
      //   clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      // },
      // "NY": {
      //   fill: "#CC0000"
      // },

      "AK": {
        fill: statesData.Arkansas && statesData.Arkansas < 5 ? "#fcbbb6" : statesData.Arkansas < 10 ? '#f09089' : statesData.Arkansas < 20 ? '#f55a4e' : '#CC0000',
        abbreviation: "AK",
        name: "Alaska"
      },
      "HI": {
        fill: statesData.Hawaii && statesData.Hawaii < 5 ? "#fcbbb6" : statesData.Hawaii < 10 ? '#f09089' : statesData.Arkansas < 20 ? '#f55a4e' : '#CC0000'
      },
      "AL": {
        fill: statesData.Alabama && statesData.Alabama < 5 ? "#fcbbb6" : statesData.Alabama < 10 ? '#f09089' : statesData.Alabama < 20 ? '#f55a4e' : '#CC0000'
      },
      "AR": {
        fill: statesData.Arkansas && statesData.Arkansas < 5 ? "#fcbbb6" : statesData.Arkansas < 10 ? '#f09089' : statesData.Arkansas < 20 ? '#f55a4e' : '#CC0000'
      },
      "AZ": {
        fill: statesData.Arizona && statesData.Arizona < 5 ? "#fcbbb6" : statesData.Arizona < 10 ? '#f09089' : statesData.Arkansas < 20 ? '#f55a4e' : '#CC0000'
      },
      "CA": {
        fill: statesData.California && statesData.California < 5 ? "#fcbbb6" : statesData.California < 10 ? '#f09089' : statesData.California < 20 ? '#f55a4e' : '#CC0000'
      },
      "CO": {
        fill: statesData.Colorado && statesData.Colorado < 5 ? "#fcbbb6" : statesData.Colorado < 10 ? '#f09089' : statesData.Colorado < 20 ? '#f55a4e' : '#CC0000'
      },
      "CT": {
        fill: statesData.Connecticut && statesData.Connecticut < 5 ? "#fcbbb6" : statesData.Connecticut < 10 ? '#f09089' : statesData.Connecticut < 20 ? '#f55a4e' : '#CC0000'
      },
      "DE": {
        fill: statesData.Delaware && statesData.Delaware < 5 ? "#fcbbb6" : statesData.Delaware < 10 ? '#f09089' : statesData.Delaware < 20 ? '#f55a4e' : '#CC0000'
      },
      "FL": {
        fill: statesData.Florida && statesData.Florida < 5 ? "#fcbbb6" : statesData.Florida < 10 ? '#f09089' : statesData.Florida < 20 ? '#f55a4e' : '#CC0000'
      },
      "GA": {
        fill: statesData.Georgia && statesData.Georgia < 5 ? "#fcbbb6" : statesData.Georgia < 10 ? '#f09089' : statesData.Georgia < 20 ? '#f55a4e' : '#CC0000'
      },
      "IA": {
        fill: statesData.Iowa && statesData.Iowa < 5 ? "#fcbbb6" : statesData.Iowa < 10 ? '#f09089' : statesData.Iowa < 20 ? '#f55a4e' : '#CC0000'
      },
      "ID": {
        fill: statesData.Idaho && statesData.Idaho < 5 ? "#fcbbb6" : statesData.Idaho < 10 ? '#f09089' : statesData.Idaho < 20 ? '#f55a4e' : '#CC0000'
      },
      "IL": {
        fill: statesData.Illinois && statesData.Illinois < 5 ? "#fcbbb6" : statesData.Illinois < 10 ? '#f09089' : statesData.Illinois < 20 ? '#f55a4e' : '#CC0000'
      },
      "IN": {
        fill: statesData.Indiana && statesData.Indiana < 5 ? "#fcbbb6" : statesData.Indiana < 10 ? '#f09089' : statesData.Indiana < 20 ? '#f55a4e' : '#CC0000'
      },
      "KS": {
        fill: statesData.Kansas && statesData.Kansas < 5 ? "#fcbbb6" : statesData.Kansas < 10 ? '#f09089' : statesData.Kansas < 20 ? '#f55a4e' : '#CC0000'
      },
      "KY": {
        fill: statesData.Kentucky && statesData.Kentucky < 5 ? "#fcbbb6" : statesData.Kentucky < 10 ? '#f09089' : statesData.Kentucky < 20 ? '#f55a4e' : '#CC0000'
      },
      "LA": {
        fill: statesData.Louisiana && statesData.Louisiana < 5 ? "#fcbbb6" : statesData.Louisiana < 10 ? '#f09089' : statesData.Louisiana < 20 ? '#f55a4e' : '#CC0000'
      },
      "MA": {
        fill: statesData.Massachusetts && statesData.Massachusetts < 5 ? "#fcbbb6" : statesData.Massachusetts < 10 ? '#f09089' : statesData.Massachusetts < 20 ? '#f55a4e' : '#CC0000'
      },
      "MD": {
        fill: statesData.Maryland && statesData.Maryland < 5 ? "#fcbbb6" : statesData.Maryland < 10 ? '#f09089' : statesData.Maryland < 20 ? '#f55a4e' : '#CC0000'
      },
      "ME": {
        fill: statesData.Maine && statesData.Maine < 5 ? "#fcbbb6" : statesData.Maine < 10 ? '#f09089' : statesData.Maine < 20 ? '#f55a4e' : '#CC0000'
      },
      "MI": {
        fill: statesData.Michigan && statesData.Michigan < 5 ? "#fcbbb6" : statesData.Michigan < 10 ? '#f09089' : statesData.Michigan < 20 ? '#f55a4e' : '#CC0000'
      },
      "MN": {
        fill: statesData.Minnesota && statesData.Minnesota < 5 ? "#fcbbb6" : statesData.Minnesota < 10 ? '#f09089' : statesData.Minnesota < 20 ? '#f55a4e' : '#CC0000'
      },
      "MO": {
        fill: statesData.Missouri && statesData.Missouri < 5 ? "#fcbbb6" : statesData.Missouri < 10 ? '#f09089' : statesData.Missouri < 20 ? '#f55a4e' : '#CC0000'
      },
      "MS": {
        fill: statesData.Mississippi && statesData.Mississippi < 5 ? "#fcbbb6" : statesData.Mississippi < 10 ? '#f09089' : statesData.Mississippi < 20 ? '#f55a4e' : '#CC0000'
      },
      "MT": {
        fill: statesData.Montana && statesData.Montana < 5 ? "#fcbbb6" : statesData.Montana < 10 ? '#f09089' : statesData.Montana < 20 ? '#f55a4e' : '#CC0000'
      },
      "NC": {
        fill: statesData.NorthCarolina && statesData.NorthCarolina < 5 ? "#fcbbb6" : statesData.NorthCarolina < 10 ? '#f09089' : statesData.NorthCarolina < 20 ? '#f55a4e' : '#CC0000'
      },
      "ND": {
        fill: statesData.NorthDakota && statesData.NorthDakota < 5 ? "#fcbbb6" : statesData.NorthDakota < 10 ? '#f09089' : statesData.NorthDakota < 20 ? '#f55a4e' : '#CC0000'
      },
      "NE": {
        fill: statesData.Nebraska && statesData.Nebraska < 5 ? "#fcbbb6" : statesData.Nebraska < 10 ? '#f09089' : statesData.Nebraska < 20 ? '#f55a4e' : '#CC0000'
      },
      "NH": {
        fill: statesData.NewHampshire && statesData.NewHampshire < 5 ? "#fcbbb6" : statesData.NewHampshire < 10 ? '#f09089' : statesData.NewHampshire < 20 ? '#f55a4e' : '#CC0000'
      },
      "NJ": {
        fill: statesData.NewJersey && statesData.NewJersey < 5 ? "#fcbbb6" : statesData.NewJersey < 10 ? '#f09089' : statesData.NewJersey < 20 ? '#f55a4e' : '#CC0000'
      },
      "NM": {
        fill: statesData.NewMexico && statesData.NewMexico < 5 ? "#fcbbb6" : statesData.NewMexico < 10 ? '#f09089' : statesData.NewMexico < 20 ? '#f55a4e' : '#CC0000'
      },
      "NV": {
        fill: statesData.Nevada && statesData.Nevada < 5 ? "#fcbbb6" : statesData.Nevada < 10 ? '#f09089' : statesData.Nevada < 20 ? '#f55a4e' : '#CC0000'
      },
      "NY": {
        fill: statesData.NewYork && statesData.NewYork < 5 ? "#fcbbb6" : statesData.NewYork < 10 ? '#f09089' : statesData.NewYork < 20 ? '#f55a4e' : '#CC0000'
      },
      "OH": {
        fill: statesData.Ohio && statesData.Ohio < 5 ? "#fcbbb6" : statesData.Ohio < 10 ? '#f09089' : statesData.Ohio < 20 ? '#f55a4e' : '#CC0000'
      },
      "OK": {
        fill: statesData.Oklahoma && statesData.Oklahoma < 5 ? "#fcbbb6" : statesData.Oklahoma < 10 ? '#f09089' : statesData.Oklahoma < 20 ? '#f55a4e' : '#CC0000'
      },
      "OR": {
        fill: statesData.Oregon && statesData.Oregon < 5 ? "#fcbbb6" : statesData.Oregon < 10 ? '#f09089' : statesData.Oregon < 20 ? '#f55a4e' : '#CC0000'
      },
      "PA": {
        fill: statesData.Pennsylvania && statesData.Pennsylvania < 5 ? "#fcbbb6" : statesData.Pennsylvania < 10 ? '#f09089' : statesData.Pennsylvania < 20 ? '#f55a4e' : '#CC0000'
      },
      "RI": {
        fill: statesData.RhodeIsland && statesData.RhodeIsland < 5 ? "#fcbbb6" : statesData.RhodeIsland < 10 ? '#f09089' : statesData.RhodeIsland < 20 ? '#f55a4e' : '#CC0000'
      },
      "SC": {
        fill: statesData.SouthCarolina && statesData.SouthCarolina < 5 ? "#fcbbb6" : statesData.SouthCarolina < 10 ? '#f09089' : statesData.SouthCarolina < 20 ? '#f55a4e' : '#CC0000'
      },
      "SD": {
        fill: statesData.SouthDakota && statesData.SouthDakota < 5 ? "#fcbbb6" : statesData.SouthDakota < 10 ? '#f09089' : statesData.SouthDakota < 20 ? '#f55a4e' : '#CC0000'
      },
      "TN": {
        fill: statesData.Tennessee && statesData.Tennessee < 5 ? "#fcbbb6" : statesData.Tennessee < 10 ? '#f09089' : statesData.Tennessee < 20 ? '#f55a4e' : '#CC0000'
      },
      "TX": {
        fill: statesData.Texas && statesData.Texas < 5 ? "#fcbbb6" : statesData.Texas < 10 ? '#f09089' : statesData.Texas < 20 ? '#f55a4e' : '#CC0000'
      },
      "UT": {
        fill: statesData.Utah && statesData.Utah < 5 ? "#fcbbb6" : statesData.Utah < 10 ? '#f09089' : statesData.Utah < 20 ? '#f55a4e' : '#CC0000'
      },
      "VA": {
        fill: statesData.Virginia && statesData.Virginia < 5 ? "#fcbbb6" : statesData.Virginia < 10 ? '#f09089' : statesData.Virginia < 20 ? '#f55a4e' : '#CC0000'
      },
      "VT": {
        fill: statesData.Vermont && statesData.Vermont < 5 ? "#fcbbb6" : statesData.Vermont < 10 ? '#f09089' : statesData.Vermont < 20 ? '#f55a4e' : '#CC0000'
      },
      "WA": {
        fill: statesData.Washington && statesData.Washington < 5 ? "#fcbbb6" : statesData.Washington < 10 ? '#f09089' : statesData.Washington < 20 ? '#f55a4e' : '#CC0000'
      },
      "WI": {
        fill: statesData.Wisconsin && statesData.Wisconsin < 5 ? "#fcbbb6" : statesData.Wisconsin < 10 ? '#f09089' : statesData.Wisconsin < 20 ? '#f55a4e' : '#CC0000'
      },
      "WV": {
        fill: statesData.WestVirginia && statesData.WestVirginia < 5 ? "#fcbbb6" : statesData.WestVirginia < 10 ? '#f09089' : statesData.WestVirginia < 20 ? '#f55a4e' : '#CC0000'
      },
      "WY": {
        fill: statesData.Wyoming && statesData.Wyoming < 5 ? "#fcbbb6" : statesData.Wyoming < 10 ? '#f09089' : statesData.Wyoming < 20 ? '#f55a4e' : '#CC0000'
      }
    }

  };
  const options = [
        { value: '16', label: '2016' },
        { value: '17', label: '2017' },
        { value: '18', label: '2018' },
        { value: '19', label: '2019' },
        { value: '20', label: '2020' },
        { value: '21', label: '2021' }    
    ];  
    return (
    <Wrapper>
      <h1>Maps</h1>
      <Dropdown
        options={options}
        onChange={onChangeDropdown} 
        value={yearValue} 
        className="dropdown-head"
        placeholder="Select year" />
      <div className="App">
        <USAMap customize={statesCustomConfig()} />
      </div>
    </Wrapper>

  )
}

export default Map;