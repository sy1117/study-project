import React, { Component } from 'react'
import { Doughnut, Line } from 'react-chartjs-2';

const data = {
    labels: ['루머의 루머의 루머', '나르코스', '바이킹스', '워킹데드', '하우스 오브 카드', '왕좌의 게임', '고담'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        // lineTension: 0.1,
        backgroundColor:  ['red', 'pink', 'orange', 'yellow', 'lightgreen', 'lightblue', 'brown', 'gray'],  // data 개수만큼 노출됨
        // borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        // pointBorderColor: 'rgba(75,192,192,1)',
        // pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        // pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

const drama = {
    labels: ['1월', '2월', '3월', '4월'],
    datasets: [
        {
            label: '나르코스',
            fill: false,
            data: [40, 55, 35, 20],
            borderColor: 'lightgreen'
        },
        {
            label: '루머의 루머의 루머',
            fill: false,
            data: [60, 40, 20, 30],
            borderColor: 'lightblue'
        },
        {
            label: '워킹데드',
            fill: false,
            data: [30, 42, 48, 52],
            borderColor: 'pink'
        }
    ]
};

const options={
  legend: {
    display: true,
    position: 'right'
  },
  scales: {
    yAxes: [{
      ticks: {
         max: 80,
         min: 0,
         stepSize: 20
       }
     }]
    },
   title: {
    display: true,
    text: 'recent drama trend',
    position: 'bottom'
   }
};

  
  export default class Chart extends Component {
    render() {
      return (
        <div>
          <div style={{"width":"50%", "height":"50%"}}>
          <Doughnut ref="chart" data={data}  />
          </div>
          <div style={{"width":"50%", "height":"50%"}}>
              <Line ref="chart" data={drama} options={options}/>
          </div>
        </div>
      );
    }
  
    componentDidMount() {
      const { datasets } = this.refs.chart.chartInstance.data
      console.log(datasets[0].data);
    }
  }