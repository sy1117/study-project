import React, { Component } from 'react';
import { Input, Icon, Segment, Button } from 'semantic-ui-react';
import _ from 'lodash';

import "../partial/Comment.css";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    
    let starRate = [];
    _.times(5, () => {
      starRate.push(<Icon name="star" />);
    });

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
        <span className="comment-inline">
        { _.times(5, (idx) => { return <Icon name="star outline" key={idx} style={{"cursor":"pointer"}}/>; }) }
        </span>
        <div style={{"width":"50em", "marginLeft":"10px"}} className="comment-inline">
          <Input placeholder='입력하시오' fluid action={{"color":"teal", "icon":"plus","content":"Add"}}/>
        </div>
      </div>

    </div> 


     );
  }
}
 
export default Comment;
