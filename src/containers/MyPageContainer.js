import React, { Component } from 'react'
import {Segment, Grid, Image, Header} from 'semantic-ui-react'
import Radar from '../components/RadarChart';
// import { getMyDrama } from '../actions/drama';

import { connect } from 'react-redux'
import { getMyDrama, getData } from '../actions/drama';
import ThumbnailList from '../components/ThumbnailList';


class MyPage extends Component {
  constructor ({match}) {
    super()
  }

  render () {

    let {dramaList} = this.props;

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
          <ThumbnailList list={this.props.dramaList? this.props.dramaList:[]}/>
        </Segment>
      </div>
    )
  }

  componentDidMount(){
    this.props.getMyDrama();
  }
}

const mapStateToProps = (state) => {
  return {
    dramaList : state.drama.toJS().dramaList
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getMyDrama : (id)=>{
        return dispatch(getMyDrama(id));
      }
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