import React, { Component } from 'react';
import { Input, Icon, Segment, Button } from 'semantic-ui-react';
import _ from 'lodash';

import "./Comment.css";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      clickedStar: 0,
      comment: ""
    }

    this.clickStar = this.clickStar.bind(this);
    this.inputComment = this.inputComment.bind(this);
    this.saveComment = this.saveComment.bind(this);
  }

  clickStar(e){
    this.setState({
      clickedStar: (this.state.clickedStar==e.target.getAttribute("data-number")) ? 0 : e.target.getAttribute("data-number") //누른거 또 누를경우 0으로
    })
  }

  inputComment(e){
    this.setState({
      comment: e.target.value
    })
  }

  saveComment(e){
    
    alert(`별 ${this.state.clickedStar}개이고 코멘트 ${this.state.comment} 세이브한다.`)
    //console.log(this.state)
  }


  render() { 
    
    const divStyle={
      "padding":"5px"
    };

    return ( 
      
        <div style={{"display":"flex", "flexDirection":"column"}} >
          <div style={divStyle}>
            <span>{ _.times(5, (idx) => { return <Icon name="star" key={idx} />; }) }</span>
          재미있음.
          </div>
          <div style={divStyle}>
            <span>{ _.times(5, (idx) => { return <Icon name="star" key={idx} />; }) }</span>
          뭔데이거
          </div>
          <div style={divStyle}>
              <Icon name={this.state.clickedStar >= 1 ? "star" : "star outline"} data-number="1" className="pointer-cursor" onClick={this.clickStar}/>
              <Icon name={this.state.clickedStar >= 2 ? "star" : "star outline"} data-number="2" className="pointer-cursor" onClick={this.clickStar}/>
              <Icon name={this.state.clickedStar >= 3 ? "star" : "star outline"} data-number="3" className="pointer-cursor" onClick={this.clickStar}/>
              <Icon name={this.state.clickedStar >= 4 ? "star" : "star outline"} data-number="4" className="pointer-cursor" onClick={this.clickStar}/>
              <Icon name={this.state.clickedStar >= 5 ? "star" : "star outline"} data-number="5" className="pointer-cursor" onClick={this.clickStar}/>
            <div className="comment-inline">
              <Input placeholder='한줄평을 입력하세요' onChange={this.inputComment} style={{"width":"50em"}}/>
              <Button color="teal" onClick={this.saveComment}><Icon name="plus"></Icon>Add</Button>
            </div>
          </div>
        </div> 
     );
  }
}
 
export default Comment;
