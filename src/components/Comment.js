import React, { Component } from 'react';
import { Input, Icon, Segment, Button, Feed, Rating } from 'semantic-ui-react';
import _ from 'lodash';

import "./Comment.css";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dramaId:"",
      clickedStar: 0,
      comment: "",
      hoveredId:""
    }

    this.clickStar = this.clickStar.bind(this);
    this.inputComment = this.inputComment.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.resetComment = this.resetComment.bind(this);
    this.hovered = this.hovered.bind(this);
    this.leaved = this.leaved.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    
  }

  componentDidMount(e){
    if(window.location.href)
      this.setState({dramaId:window.location.href.split("info/")[1]});
    //console.log(window.location.href)
  }

  clickStar(e){
    this.setState({
      clickedStar: (this.state.clickedStar==e.target.getAttribute("data-number")) ? 0 : e.target.getAttribute("data-number") //누른거 또 누를경우 0으로
    })
  }


  deleteComment(e){
    console.log(this.state.hoveredId)
    this.props.delComment(this.state.hoveredId);
  }

  inputComment(e){
    this.setState({
      comment: e.target.value
    })
  }

  
  resetComment(e){
    this.setState({clickedStar:0});
    let input = document.getElementById("commentInput");
    input.value = "";
  }

  saveComment(e){
    if(this.state.comment.length == 0) {
      alert("한줄평을 입력하세요.");
      return;
    }
    this.props.saveComment(this.state);
    this.resetComment();
  }


  hovered(e){
    //console.log("호버",e.target.id)
    this.setState({
         hoveredId: e.target.id
    })
  }

  leaved(e){
      this.setState({
          hoveredId:""
      })
  }



  render() { 
    
    const divStyle={
      "padding":"5px"
    };

    const deleteMark = <span className="pointer-cursor" onClick={this.deleteComment}><Icon name="delete"/></span>;

    const generateComment = data => {
      return data.map((obj, idx)=>{
        return (
          <Feed>
            <Feed.Event>
              <Feed.Content>
                <Feed.Summary>
                  {obj.comment}
                  <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra>
                  <Rating icon='star' defaultRating={obj.star} maxRating={5} disabled/>
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
      
        <div style={{"display":"flex", "flexDirection":"column"}} >
          { generateComment(this.props.commentData) }
          <div style={divStyle}>
            <Rating icon='star' defaultRating={0} maxRating={5}/>
            <div className="comment-inline">
              <Input type="text" placeholder='한줄평을 입력하세요' id="commentInput" onChange={this.inputComment} action>
                <input style={{width:'30em'}}/>
                <Button color="teal" onClick={this.saveComment}><Icon name="plus"></Icon>Register</Button>
              </Input>
            </div>
          </div>
        </div> 
     );
  }
}
 
export default Comment;
