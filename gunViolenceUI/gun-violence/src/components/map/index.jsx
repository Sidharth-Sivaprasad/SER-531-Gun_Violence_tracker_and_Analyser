import React from "react";
import USAMap from "react-usa-map";
import styled from "styled-components";

const Map = () => {

    const Wrapper = styled.div`
        margin-left:-150px;
        padding:0px;
    

`;

    const statesCustomConfig = () => {
        return {
          "NJ": {
            fill: "navy",
            clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
          },
          "NY": {
            fill: "#CC0000"
          }
        };
      };

    return (
        <Wrapper>
            <h1>Maps</h1>
            <div className="App">
                <USAMap customize={statesCustomConfig()}/>
            </div>
        </Wrapper>

    )
}

export default Map;