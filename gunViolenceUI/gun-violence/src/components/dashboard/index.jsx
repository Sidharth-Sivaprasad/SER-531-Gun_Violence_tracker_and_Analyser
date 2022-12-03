import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import DonutChart from 'react-donut-chart';
import {
    BarChart, Bar, LineChart,
    Line, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Chart from "react-apexcharts";
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';





const Wrapper = styled.div`
    margin-left:-150px;
    padding:0px;
    .Dropdown-root{
        width:20%;
    }
    .dropdown-head{
        // position:absolute;
        // margin-bottom:40px;
        // right:0px;
    }
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
    margin-top:20px;
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

    const [incidentData, setIncidentData] = useState([]);
    const [incidentTotal, setIncidentTotal] = useState('')
    const [victimAgeGroup, setVictimAgeGroup] = useState({
        children: '',
        adult: '',
        teenagers: ''

    });
    const [suspectAgeGroup, setSuspectAgeGroup] = useState({
        children: '',
        adult: '',
        teenagers: ''

    });

    const getData = (year) => {
        axios.get(`http://localhost:8080/incident?year=${year}`)
            .then(res => {
                setIncidentTotal((res.data).length);
                console.log(res.data, 'api data')
            })
    }

    const getVictimAgeGroup = (year) => {
        axios.get(`http://localhost:8080/victimAgeStats?year=${year}`)
            .then(res => {
                setVictimAgeGroup({
                    children: res.data.children,
                    adult: res.data.adults,
                    teenagers: res.data.teens

                });
                console.log(res.data, 'api data')
            })
    }
    const getSuspectAgeGroup = (year) => {
        axios.get(`http://localhost:8080/suspectAgeStats?year=${year}`)
            .then(res => {
                setSuspectAgeGroup({
                    children: res.data.children,
                    adult: res.data.adults,
                    teenagers: res.data.teens

                });
                console.log(res.data, 'api data')
            })
    }

    const [victimGenderStats, setVictimGenderStats] = useState({
        year16: {
            males: '',
            females: ''
        },
        year17: {
            males: '',
            females: ''
        },
        year18: {
            males: '',
            females: ''
        },
        year19: {
            males: '',
            females: ''
        },
        year20: {
            males: '',
            females: ''
        },
        year21: {
            males: '',
            females: ''
        }
    });

    const getVictimGenderStats = () => {
        axios.get('http://localhost:8080/victimGenderStats?year=16')
            .then(year16Data => {
                axios.get('http://localhost:8080/victimGenderStats?year=17')
                    .then(year17Data => {
                        axios.get('http://localhost:8080/victimGenderStats?year=18')
                            .then(year18Data => {
                                axios.get('http://localhost:8080/victimGenderStats?year=19')
                                    .then(year19Data => {
                                        axios.get('http://localhost:8080/victimGenderStats?year=20')
                                            .then(year20Data => {
                                                axios.get('http://localhost:8080/victimGenderStats?year=21')
                                                    .then(year21Data => {
                                                        console.log(year16Data, '16 check')
                                                        const finalData = {
                                                            year16: year16Data.data,
                                                            year17: year17Data.data,
                                                            year18: year18Data.data,
                                                            year19: year19Data.data,
                                                            year20: year20Data.data,
                                                            year21: year21Data.data,
                                                        }
                                                        setVictimGenderStats({ ...finalData })
                                                       
                                                    })
                                            })
                                    })
                            })
                    })
            })
    }

    const dashboardData = (year)=>{
        getData(year)
        getVictimAgeGroup(year);
        getSuspectAgeGroup(year);
        getVictimGenderStats();
    }

    useEffect(() => {
        dashboardData('21')
    }, [])


    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 100
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 200
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 300
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 400
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 500
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 600
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 700
        }
    ];

    var maleFemaleVictimStatOptions = {
        series: [{
            name: 'Male',
            // data:[67,23,45,42,15],
            data: [victimGenderStats.year16.males, victimGenderStats.year17.males,
            victimGenderStats.year18.males, victimGenderStats.year19.males,
            victimGenderStats.year20.males, victimGenderStats.year21.males
        ]
        }, {
            name: 'Female',
            data: [victimGenderStats.year16.females, victimGenderStats.year17.females,
            victimGenderStats.year18.females, victimGenderStats.year19.females,
            victimGenderStats.year20.females, victimGenderStats.year21.females
           ]
        }],
        chart: {
            type: 'bar',
            height: 450,
            width: 100
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
        },
        yaxis: {
            title: {
                text: '% (Male/Female Victims)'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (value, opts) {
                    let percent = opts.w.globals.seriesPercent[opts.seriesIndex][opts.dataPointIndex];
                    return percent.toFixed(0) + '%'
                }
            }
        }
    };

    const donutChart = {
        options: {
            legend: {
                show: true,
                position: 'bottom',
                floating: false,
                verticalAlign: 'bottom',
                align: 'center',
                marginTop: '10px'
            },
            labels: ['Total number of Incidents'],
            dataLabels: {
                formatter: function (val, opts) {
                    return opts.w.config.series[opts.seriesIndex]
                },
            },
        },
        series: [parseInt(incidentTotal)]
    }

    const donutChartAgeGroup = {
        options: {
            legend: {
                show: true,
                position: 'bottom',
                floating: false,
                verticalAlign: 'bottom',
                align: 'center',
                marginTop: '10px'
            },
            labels: ['Children', 'Adult', 'Teenagers'],

        },
        series: [parseInt(victimAgeGroup.children), parseInt(victimAgeGroup.adult), parseInt(victimAgeGroup.teenagers)]
    }

    const donutChartSuspectAgeGroup = {
        options: {
            legend: {
                show: true,
                position: 'bottom',
                floating: false,
                verticalAlign: 'bottom',
                align: 'center',
                marginTop: '10px'
            },
            labels: ['Children', 'Adult', 'Teenagers'],

        },
        series: [parseInt(suspectAgeGroup.children), parseInt(suspectAgeGroup.adult), parseInt(suspectAgeGroup.teenagers)]
    }

    const options = [
        { value: '16', label: '2016' },
        { value: '17', label: '2017' },
        { value: '18', label: '2018' },
        { value: '19', label: '2019' },
        { value: '20', label: '2020' },
        { value: '21', label: '2021' }    
    ];

    const [yearValue,setYearValue] = useState('2021')
    const onChangeDropdown = (val)=>{
        dashboardData(val.value)
        setYearValue(val.value)
    }

    return (
        <Wrapper>
                    <h1>Dashboard</h1>
                    <Dropdown
                        options={options}
                        onChange={onChangeDropdown} 
                        value={yearValue} 
                        className="dropdown-head"
                        placeholder="Select year" />
            {console.log(victimGenderStats, 'gender data')}
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
                    <h3 className="donut-chart-heading">Total Victims by age group</h3>
                    <Chart
                        options={donutChartAgeGroup.options}
                        series={donutChartAgeGroup.series}
                        type="donut"
                        width="300"

                    />
                </div>
                <div className="charts">
                    <h3 className="donut-chart-heading">Total Suspects by age group</h3>
                    <Chart
                        options={donutChartSuspectAgeGroup.options}
                        series={donutChartSuspectAgeGroup.series}
                        type="donut"
                        width="300"

                    />
                </div>
            </ChartWrapper>
            <FirstBarChart>
                <h3 className="chart-heading">Number of Deaths</h3>
                <Chart
                    options={maleFemaleVictimStatOptions}
                    series={maleFemaleVictimStatOptions.series}
                    type="bar"
                    width="900"
                    height="250"
                    className="chart-dia"

                />
                {/* <BarChart width={900} height={250} data={data} className="chart-dia">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis /> */}
                {/* <Tooltip />
                    <Legend /> */}
                {/* <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart> */}
            </FirstBarChart>
            {/* <FirstBarChart>
                <h3 className="chart-heading">Number of incidents based on state</h3>
                <Chart
                    options={maleFemaleVictimStatOptions}
                    series={maleFemaleVictimStatOptions.series}
                    type="bar"
                    width="900"
                    height="250"
                    className="chart-dia"

                />
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
            </FirstBarChart> */}

        </Wrapper>
    )
}

export default Dashboard;