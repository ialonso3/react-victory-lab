import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip, VictoryStack } from 'victory';
import { bronx,brooklyn,manhattan,queens,statenisland } from '../Data/PopulationByBorough.js';

function PopulationByBorough() {
  return (
    <div className="visCard"> 
    <VictoryChart 
            domainPadding={5} 
            theme={VictoryTheme.material}
            >
            <VictoryAxis
                tickvalues={bronx.year}
                tickFormat={(t) => (`${t}`)}
                />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x/1000000}M`)}
            />
    <VictoryStack>        
        <VictoryBar
            data={bronx}
            x="year"
            y="population"
          />
        <VictoryBar
            data={brooklyn}
            x="year"
            y="population"
          />
        <VictoryBar
            data={manhattan}
            x="year"
            y="population"
          />
         <VictoryBar
            data={queens}
            x="year"
            y="population"
          />
         <VictoryBar
            data={statenisland}
            x="year"
            y="population"
          />
        {/* <VictoryArea
            bronx={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}]}
        />
        <VictoryArea
            brooklyn={[{x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}]}
        />
        <VictoryArea
            manhattan={[{x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}]}
        />
         <VictoryArea
            queens={[{x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}]}
        />
         <VictoryArea
            statenisland={[{x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}]}
        /> */}
        </VictoryStack>
    </VictoryChart>
    
    </div>
  );
}

export default PopulationByBorough;