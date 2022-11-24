import React from "react";
import styled from "styled-components";
// import DonutChart from 'react-donut-chart';
import {
    BarChart, Bar, LineChart,
    Line, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Chart from "react-apexcharts";



const Wrapper = styled.div`
    margin-left:-150px;
    padding:0px;
    .charts {
        background-color: #d5dde8;
        border-radius:10px;
        height:300px;
        width: 300px;
        padding: 20px 10px 10px;
    }
    .donut-chart-heading {
        margin:5px 10px 15px;
        padding:0px;
        text-align: center;

    }


`;

const ChartWrapper = styled.div`

    display:flex;
    justify-content: space-between;
    padding:10px;




`;

const FirstBarChart = styled.div`
    margin-top:30px;
    margin-bottom: 30px;
    width:95%;
    height:300px;
    background-color: #d5dde8;
    border-radius: 20px;
    padding: 20px;

    .chart-heading {
        margin: 0px;
        padding: 0px;
    }
    .chart-dia {
        margin-top:20px;
    }


`;



const Dashboard = () => {
    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ];

    const donutChart =  {
        options: {
            legend: {
                show:true,
                position: 'bottom',
                floating: false,
                verticalAlign: 'bottom',
                align:'center',
                marginTop: '10px'
              },
        },
        series: [44, 55, 41 ],
        labels: ['A', 'B', 'C'],
        
      
    }

    return (
        <Wrapper>
            <h1>Dashboard</h1>
            <ChartWrapper>
                <div className="charts">
                <h3 className="donut-chart-heading">Number of Incidents</h3>
                    <Chart
                        options={donutChart.options}
                        series={donutChart.series}
                        type="donut"
                        width="300"
                        
                    />
                </div>
                <div className="charts">
                <h3 className="donut-chart-heading">Number of Reports</h3>
                    <Chart
                        options={donutChart.options}
                        series={donutChart.series}
                        type="donut"
                        width="300"
                        
                    />
                </div>
                <div className="charts">
                <h3 className="donut-chart-heading">Number of Deaths</h3>
                    <Chart
                        options={donutChart.options}
                        series={donutChart.series} 
                        type="donut"
                        width="300"
                        
                    />
                </div>
            </ChartWrapper>
            <FirstBarChart>
                <h3 className="chart-heading">Number of Deaths</h3>
                <BarChart width={900} height={250} data={data} className="chart-dia">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    {/* <Tooltip />
                    <Legend /> */}
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </FirstBarChart>
            <FirstBarChart>
                <h3 className="chart-heading">Number of incidents</h3>
                <LineChart
                    width={900}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    className="chart-dia"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </FirstBarChart>

        </Wrapper>
    )
}

export default Dashboard;