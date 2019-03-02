import React, { Component } from 'react';
import { Segment, Container, Header, Grid, Button, Image } from 'semantic-ui-react';

class ContentSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentWillMount(e){
        //DB에서 내용조회하는 function 필요.
    }

    render() { 
        let {data}= this.props;
        return ( 
            <div>
                <Header as='h3' style={{ fontSize: '2em' }}>
                {data.name}
                </Header>
                <p style={{ fontSize: '1.2em' }}>
                해나의 죽음 이후, 클레이에게 남겨진 의문의 폴라로이드 사진을 둘러싼 진실을 추적하는 미스터리 드라마<br/>
                <br/>
                편성: 넷플릭스 2018.05.18. ~ 2018.05.18.방영종료 13부작<br/>
                <span style={{"textDecoration":"underline", "color":"blue"}}>공식 홈페이지</span>{", "}
                <span style={{"textDecoration":"underline", "color":"blue"}}>트위터</span>{", "}
                <span style={{"textDecoration":"underline", "color":"blue"}}>인스타그램</span>{", "}
                <span style={{"textDecoration":"underline", "color":"blue"}}>페이스북</span>
                </p>
                <p style={{ fontSize: '2em' }}>
                Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                bioengineered.
                </p>
            </div>
         );
    }
}
 
export default ContentSummary;