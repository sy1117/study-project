import React, { Component } from 'react';
import { Input, Icon, Segment, Button } from 'semantic-ui-react';
import _ from 'lodash';


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

    const inputStyle={
      "display":"inline-block", 
      "float":"left"
    }

    return ( 

    <div style={{"width":"80%"}} >
      <Segment>
      { _.times(5, (idx) => { return <Icon name="star" key={idx} />; }) }
      재미있음.
      </Segment>
      <Segment>
      { _.times(5, (idx) => { return <Icon name="star" key={idx} />; }) }
      ique senectus.
      </Segment>
      
      { _.times(5, (idx) => { return <Icon name="star" key={idx} style={inputStyle}/>; }) }
      <div style={{"width":"50%", "float":"left"}}>
        <Input placeholder='입력하시오' fluid />
      </div>
      <Button style={inputStyle}>Add</Button> {/* 버튼클릭 시 저장되도록함 */}


    </div> 


     );
  }
}
 
export default Comment;
