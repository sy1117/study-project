import React, {  Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import { userCheckClick } from '../actions/user';

class loginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:"",
            pw:""
         }
        this.loginClick = this.loginClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    loginClick(e){
        this.props.userCheckClick(this.state.id, this.state.pw).then(
            ()=>{
                if(this.props.userGet.result){
                    alert("login 성공")
                    sessionStorage.setItem("loginId",this.state.id);

                    this.props.history.push('/main');
                } else {
                    alert("login 실패")
                }
            }
        )
    }

    inputChange(e){
        let changeVal = {};
        changeVal[e.target.name] = e.target.value;
        //console.log(changeVal)
        this.setState(changeVal);
    }

    render() { 
        return ( 
            <div style={{"marginTop":"100px"}}>

      
            <Grid textAlign='center' style={{ }} verticalAlign='middle'>
               <Grid.Column style={{ maxWidth: 450 }}>
                 <Header as='h2' color='teal' textAlign='center'>
                   
                 </Header>
                 <Form size='large'>
                   <Segment>
                     <Form.Input fluid icon='user' iconPosition='left' name="id" placeholder='ID' onChange={this.inputChange} />
                     <Form.Input name="pw" onChange={this.inputChange} 
                       fluid
                       icon='lock'
                       iconPosition='left'
                       placeholder='Password'
                       type='password'
                     />
        
                     <Button color='teal' fluid size='large' onClick={this.loginClick}>
                       Login
                     </Button>
                   </Segment>
                 </Form>
                 
               </Grid.Column>
             </Grid>
      


            </div>            

          


         );
    }
}



const mapStateToProps = (state) => {
    // console.log(state.comment.get("get"))
    return {
      userGet: state.user.get('get')
    
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        userCheckClick: (id, pw) => {
        return dispatch(userCheckClick(id, pw))
      },

    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(loginForm);