import React, { Component } from 'react'
import { Segment, Container, Header, Grid, Button, Image } from 'semantic-ui-react';
import Comment from '../components/Comment';
import Thumbnail from '../components/Thumbnail';
import ContentSummary from '../components/ContentSummary';

class DramaInfo extends Component {
    render() {
        return (
        <div>

            <Segment style={{ padding: '8em 0em'}} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column floated='left' width={4}>
                        <Image width="200px" src="https://search.pstatic.net/common?type=o&size=120x172&quality=90&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F57%2F86%2F28%2F74%2F57_5862874_poster_image_1525917635523.jpg"></Image>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <ContentSummary></ContentSummary>
                        </Grid.Column>

                    </Grid.Row>

                </Grid>
            </Segment>

            <Comment></Comment>

        </div>
        )
    }
}


export default DramaInfo;