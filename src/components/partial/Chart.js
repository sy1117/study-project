import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: ['루머의 루머의 루머', '나르코스', '바이킹스', '워킹데드', '하우스 오브 카드', '왕좌의 게임', '고담'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        // lineTension: 0.1,
        backgroundColor:  ['#FF6384', '#36A2EB', '#FFCE56'],  // 색을 지정하는 만큼만 칠해짐...
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
  
  export default class Chart extends Component {
    render() {
      return (
        <div>
          <h2>Chart of American Drama</h2>
          <Doughnut ref="chart" data={data} />
        </div>
      );
    }
  
    componentDidMount() {
      const { datasets } = this.refs.chart.chartInstance.data
      console.log(datasets[0].data);
    }
  }