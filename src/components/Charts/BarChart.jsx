import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart =()=>{
    const [BarChartData, setBarChartData] = useState({});

    const barchart=()=>{
        setBarChartData({
            labels:['Course 1', 'Course 2', 'Course 3'],
            datasets:[
                {
                    label: 'mark stats',
                    data: [80, 78, 85],
                    backgroundColor:[
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderwidth: 1
                }
            ]
        })
    }
    useEffect(()=>{
        barchart();
    },[])
    return(
        <Bar data={BarChartData}   options={
            {
                maintainAspectRatio:false,
                responsive:true,
                title: {
                    display: true,
                    text: 'My course results',
                    fontSize: 25
                },
                legend: {
                    display: true,
                    position: 'top'
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                },
                
            }
        }></Bar>
    );

}
export default BarChart;