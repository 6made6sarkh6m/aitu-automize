import React, {useState, useEffect} from 'react';
import {Doughnut} from 'react-chartjs-2';

const DoughnutChart=()=>{
    const [DoughnutChartData, setDoughnutChartData] = useState({});

    const doughnut=()=>{
        setDoughnutChartData({
            labels:[
                'Course 1',
                'Course 2',
                'Course 3'
            ],
            datasets:[{
                data: [80, 78, 85],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        })
    }
    useEffect(()=>{
        doughnut();
    },[])
    return(
        <Doughnut data={DoughnutChartData} options={
            {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: true,
                    text: 'My course results',
                    fontSize: 25
                },
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }></Doughnut>
    )
}
export default DoughnutChart;
