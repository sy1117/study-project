import React, { Component } from 'react'
import {Segment, Grid, Image, Header} from 'semantic-ui-react'
import Radar from '../components/RadarChart';
// import { getMyDrama } from '../actions/drama';

import { connect } from 'react-redux'


class MyPage extends Component {
  constructor ({match}) {
    super()
  }

  render () {

    let {dramaList} = this.props;
    console.log("render" ,dramaList);

    return (
      <div>
        <Segment>
          <Grid centered columns={1}>
            <Grid.Row>
              <Grid.Column centered>
                <Image src='https://react.semantic-ui.com/images/avatar/large/helen.jpg' size='small' circular />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column centered>
                {this.props.name? this.props.name : 'unknown'}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header as='h4'>나의 취향 분석</Header>
          <Radar/>
          <Header as='h4'>내가 본 드라마 목록</Header>

        </Segment>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    // commentSave: state.comment.get('save'),
    // myDrama: state.drama.get('get'),
    // commentDel: state.comment.get('del')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dramaList: (userId)=>{
    //   return dispatch(getMyDrama())
    // }
    // saveCommentClick: (commentObj) => {
    //   return dispatch(saveCommentClick(commentObj))
    // },
    // getCommentClick: (dramaId) => {
    //   return dispatch(getCommentClick(dramaId))
    // },
    // delCommentClick: (commentId) => {
    //   return dispatch(delCommentClick(commentId))
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPage)