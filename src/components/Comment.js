import React, { Component } from 'react'
import { Input, Icon, Segment, Button, Feed, Rating, Grid } from 'semantic-ui-react'
import _ from 'lodash'

import './Comment.css'

class Comment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dramaId: '',
      clickedStar: 0,
      comment: '',
      hoveredId: ''
    }

    this.clickStar = this.clickStar.bind(this)
    this.inputComment = this.inputComment.bind(this)
    this.saveComment = this.saveComment.bind(this)
    this.resetComment = this.resetComment.bind(this)
    this.hovered = this.hovered.bind(this)
    this.leaved = this.leaved.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
  }

  componentDidMount (e) {
    if (window.location.href)
      this.setState({dramaId: window.location.href.split('info/')[1]})
  }

  clickStar (e, data) {
    this.setState({
      clickedStar: data.rating
    })
  }

  deleteComment (e) {
    this.props.delComment(this.state.hoveredId)
  }

  inputComment (e) {
    this.setState({
      comment: e.target.value
    })
  }


  resetComment (e) {
    this.setState({clickedStar: 0})
    let input = document.getElementById('commentInput')
    input.value = ''
  }

  saveComment (e) {
    if (this.state.comment.length == 0) {
      alert('한줄평을 입력하세요.')
      return
    }
    this.props.saveComment(this.state)
    this.resetComment()
  }

  hovered (e) {
    this.setState({
      hoveredId: e.target.id
    })
  }

  leaved (e) {
    this.setState({
      hoveredId: ''
    })
  }

  render () {
    const divStyle = {
      'padding': '5px'
    }

    const deleteMark = <span className='pointer-cursor' onClick={this.deleteComment}><Icon name='delete'/></span>

    const generateComment = data => {
      return data.map((obj, idx) => {
        return (
          <Feed>
            <Feed.Event>
              <Feed.Content>
                <Feed.Summary>
                  {obj.comment}
                  <Feed.Date>
                    1 Hour Ago
                  </Feed.Date>
                </Feed.Summary>
                <Feed.Extra>
                  <Rating
                    icon='star'
                    defaultRating={obj.star}
                    maxRating={5}
                    disabled/>
                </Feed.Extra>
                {/* <Feed.Meta>
                                                  <Feed.Like>
                                                    <Icon name='like' />
                                                    4 Likes
                                                  </Feed.Like>
                                                </Feed.Meta> */}
              </Feed.Content>
            </Feed.Event>
          </Feed>
        )
      })
    }

    return (
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column>
            <Rating
              icon='star'
              defaultRating={0}
              maxRating={5}
              onRate={this.clickStar} />
            <Input
              type='text'
              style={{width: '20em'}}
              placeholder='한줄평을 입력하세요'
              id='commentInput'
              onChange={this.inputComment}
              action>
            <input/>
            <Button color='teal' onClick={this.saveComment}>
              <Icon name='plus'></Icon>Register
            </Button>
            </Input>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {generateComment(this.props.commentData)}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Comment
