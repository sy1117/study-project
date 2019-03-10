import React, { Component } from 'react';
import { Input, Icon, Segment, Button } from 'semantic-ui-react';
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
        return <div style={divStyle} key={obj._id} id={obj._id} onMouseEnter={this.hovered} onMouseLeave={this.leaved} >
                <span>{ _.times(obj.star, (i) => { return <Icon name="star" key={i} />; }) }</span>
                <span>{ _.times(5-obj.star, (i) => { return <Icon name="star outline" key={i} />; }) }</span>
                {obj.comment}
                { this.state.hoveredId == obj._id ? deleteMark : undefined }
                {/* <span style={{"float":"right"}}><Icon name="delete"></Icon></span> */}
                {/* <span style={{"fontSize":"9pt", "color":"gray", "float":"right"}}>{`  (${obj.created.substring(0,10)})`}</span> */}
              </div>
      })
    }

    return ( 
      
        <div style={{"display":"flex", "flexDirection":"column"}} >
          { generateComment(this.props.commentData) }
          <div style={divStyle}>
              <Icon name={this.state.clickedStar >= 1 ? "star" : "star outline"} data-number="1" className="pointer-cursor" onClick={this.clickStar}/>
              <Icon name={this.state.clickedStar >= 2 ? "star" : "star outline"} data-number="2" className="pointer-cursor" onClick={this.clickStar}/>
              <Icon name={this.state.clickedStar >= 3 ? "star" : "star outline"} data-number="3" className="pointer-cursor" onClick={this.clickStar}/>
              <Icon name={this.state.clickedStar >= 4 ? "star" : "star outline"} data-number="4" className="pointer-cursor" onClick={this.clickStar}/>
              <Icon name={this.state.clickedStar >= 5 ? "star" : "star outline"} data-number="5" className="pointer-cursor" onClick={this.clickStar}/>
            <div className="comment-inline">
              <Input placeholder='한줄평을 입력하세요' id="commentInput" onChange={this.inputComment} style={{"width":"50em"}}/>
              <Button color="teal" onClick={this.saveComment}><Icon name="plus"></Icon>Add</Button>
            </div>
          </div>
        </div> 
     );
  }
}
 
export default Comment;
