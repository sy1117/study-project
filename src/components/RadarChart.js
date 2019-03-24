import React, {Component} from 'react';
import RC2 from 'react-chartjs-2';

const data = {
  labels: ['드라마', '로맨스', '코미디', '판타지', '액션', '시대극', '범죄'],
  datasets: [
    {
      label: '내가 본 드라마',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: '평점이 높은 드라마',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};

class Radar extends Component {
  render() {
    return (
      <RC2 data={data} type='radar' />
    );
  }
}

export default Radar;