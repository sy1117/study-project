import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Header,
    Icon,
    List,
    Image,
    Sidebar,
    Segment,
    Grid
} from 'semantic-ui-react'

import { Doughnut, Line } from 'react-chartjs-2';
import ThumbnailList from '../components/ThumbnailList'


class Main extends React.Component{

    constructor(){
        super();

        this.state = {
            myFavorite : [],
            top10: []
        }
    }
    
    render(){
        const {myFavorite, top10} = this.state;
        return (
            <div>
                {/* <Segment style={{ padding: '5em 2em' }} vertical>
                    <Header as='h1'>My Favorite</Header>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <ThumbnailList size={'small'} circular={true} list={myFavorite} />
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment> */}
                <Segment style={{ padding: '5em 2em' }} vertical>
                    <Header as='h1'>Top 10</Header>
                    <ThumbnailList list={top10} size="small"/>
                </Segment>
                {/* <Segment style={{ padding: '5em 2em' }} vertical>
                    <Header as='h1'>Recent Trend</Header>
                 </Segment> */}
            </div>
        )
    }

    componentDidMount(){
        const that = this;
                
        fetch(`/api/drama`)
        .then(function(response, data) {
            return response.json();
        })
        .then(function(data){
            that.setState({
                top10: data
            })
        })
    }
}

Main.propTypes = {
    mobile: PropTypes.bool,
}

export default Main;
