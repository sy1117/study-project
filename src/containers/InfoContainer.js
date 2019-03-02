import React, { Component } from 'react'
import { Segment, Container, Header, Grid, Button, Image } from 'semantic-ui-react';
import Comment from '../components/Comment';
import Thumbnail from '../components/Thumbnail';
import ContentSummary from '../components/ContentSummary';

class DramaInfo extends Component {
    constructor({match}){
        super();
        this.state ={
            id: match.params.id,
            data:{
                url :''
            }
        }
    }
    render() {
        return (
        <div>
            <Segment style={{ padding: '8em 0em'}} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column floated='left' width={4}>
                        <Image width="200px" src={this.state.data.url}></Image>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <ContentSummary data={this.state.data}></ContentSummary>
                        </Grid.Column>

                    </Grid.Row>
                    <Grid.Row>
                        <Comment/>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
        )
    }

    componentDidMount(){
        const that = this;
                
        fetch(`/api/drama/${this.state.id}`)
        .then(function(response, data) {
            console.log(response);
            return response.json();
        })
        .then(function(data){
            console.log(data);
            that.setState({
                data: data
            })
        })
    }
}


export default DramaInfo;