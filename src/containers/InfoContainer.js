import React, { Component } from 'react'
import { Segment, Container, Header, Grid, Button, Image } from 'semantic-ui-react'
import Comment from '../components/Comment'
import Thumbnail from '../components/Thumbnail'
import ContentSummary from '../components/ContentSummary'
import RadarChart from '../components/RadarChart'

import { connect } from 'react-redux'

import { saveCommentClick, getCommentClick, delCommentClick} from '../actions/comment'
import MyAnalytics from '../components/MyAnalytics';

class DramaInfo extends Component {
  constructor ({match}) {
    super()
    this.state = {
      id: match.params.id,
      data: {
        url: ''
      }

    }

    this.saveComment = this.saveComment.bind(this)
    this.getComment = this.getComment.bind(this)
    this.delComment = this.delComment.bind(this)
  }

  saveComment (commentObj) {
    this.props.saveCommentClick(commentObj).then(
      () => {
        // console.log(this.props.commentSave)
        if (this.props.commentSave.status == 'SAVE_COMMENT_SUCCESS') {
          alert('저장성공')
          this.getComment()
        }
        else alert('저장실패')
      }
    )
  }

  getComment (e) {
    console.log('get 실행')
    this.props.getCommentClick(this.state.id)
  }

  delComment (commentId) {
    console.log('del 실행')
    this.props.delCommentClick(commentId).then(
      () => {
        if (this.props.commentDel.status == 'DEL_COMMENT_SUCCESS') {
          alert('삭제성공')
          this.getComment()
        }
        else alert('삭제실패')
      }
    )
  }

  render () {
    return (
      <div>
        <Segment style={{ padding: '8em 0em'}} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column floated='left' width={4}>
                <Image width='200px' src={this.state.data.url}></Image>
              </Grid.Column>
              <Grid.Column width={10}>
                <ContentSummary data={this.state.data}></ContentSummary>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <div>
                별점 평균:
                {this.props.commentGet.average.toString().indexOf('.') > -1 ? this.props.commentGet.average.toFixed(2) : this.props.commentGet.average} 개
              </div>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column floated='left'  width={4}>
                <Header as='h2'>
                  Analytics
                </Header>
                <RadarChart/>
              </Grid.Column>
              <Grid.Column floated='left'  width={4}>
                <Header as='h2'>
                  Comments
                </Header>
                <Comment
                  saveComment={this.saveComment}
                  getComment={this.getComment}
                  commentData={this.props.commentGet.data}
                  delComment={this.delComment} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
 
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }

  componentDidMount () {
    const that = this
    // redux로 바꺼야할듯?
    fetch(`/api/drama/${this.state.id}`)
      .then(function (response, data) {
        console.log(response)
        return response.json()
      })
      .then(function (data) {
        console.log(data)
        that.setState({
          data: data
        })
      })

    this.getComment()
  }
}

const mapStateToProps = (state) => {
  // console.log(state.comment.get("get"))
  return {
    commentSave: state.comment.get('save'),
    commentGet: state.comment.get('get'),
    commentDel: state.comment.get('del')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveCommentClick: (commentObj) => {
      return dispatch(saveCommentClick(commentObj))
    },
    getCommentClick: (dramaId) => {
      return dispatch(getCommentClick(dramaId))
    },
    delCommentClick: (commentId) => {
      return dispatch(delCommentClick(commentId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DramaInfo)
