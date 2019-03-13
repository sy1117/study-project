import React, { Component } from 'react'
import { Input, Icon, Segment, Button, Header } from 'semantic-ui-react'
import _ from 'lodash'
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
// 
class Radar extends Component {

  render () {
    const data = [
      {
        data: {
          battery: 0.7,
          design: .8,
          useful: 0.9,
          speed: 0.67,
          weight: 0.8
        },
        meta: { color: 'blue' }
      },
      {
        data: {
          battery: 0.6,
          design: .85,
          useful: 0.5,
          speed: 0.6,
          weight: 0.7
        },
        meta: { color: 'red' }
      }
    ]

    const captions = {
      // columns
      battery: 'Battery Capacity',
      design: 'Design',
      useful: 'Usefulness',
      speed: 'Speed',
      weight: 'Weight'
    }

    return (
      <div>
        <RadarChart 
          captions={{ 
            // columns 
            comedy: 'comedy', 
            romance: 'romance', 
            thriller: 'thriller', 
            mystery: 'mystery', 
            action: 'action' 
          }} 
          data={[ 
            // data 
            { 
              data: { comedy: 0.7, romance: 0.8, thriller: 0.9, mystery: 0.67, action: 0.8 }, 
              meta: { color: '#58FCEC' } 
            },
            { 
              data: { comedy: 0.0, romance: 0.1, thriller: 0.2, mystery: 0.37, action: 0.2 }, 
              meta: { color: 'red' } 
            },
          ]} 
          size={400} 
        />
      </div>
    )
  }
}

export default Radar;
