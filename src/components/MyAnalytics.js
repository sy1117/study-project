import React, { Component } from 'react'
import { Icon, Rating } from 'semantic-ui-react'
// 
class MyAnalytics extends Component {

  render () {
    return (
      <div>
        Comedy : <Rating icon='smile' defaultRating={1} maxRating={3} />
        Romance : <Rating icon='heart' defaultRating={1} maxRating={3} />
        <Rating defaultRating={1} maxRating={3} >
          <Rating.Icon name='users'/>
          <Rating.Icon name='users'/>
          <Rating.Icon name='users'/>
        </Rating>

      </div>
    )
  }
}

export default MyAnalytics
