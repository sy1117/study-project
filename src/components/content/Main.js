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
import ThumbnailList from '../partial/ThumbnailList'


class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            myFavorite : [
                {
                    id:'01', 
                    src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBgZQGXZu_-oul0dSXwQEiwUUlvIeTqVKA1DxC6SY2dex0spL'
                },
                {
                    id:'02', 
                    src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4D0c8Q6J1VdIe5lkgtE9lnZnPRqCou_umHtbwDKYnfAatf5r9A'
                },
                {
                    id:'03',
                    src :'http://photo.newsen.com/news_photo/2018/01/11/201801111855564110_1.jpg'
                }
            ],
            top10: [
                {
                    id:'01', 
                    src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBgZQGXZu_-oul0dSXwQEiwUUlvIeTqVKA1DxC6SY2dex0spL'
                },
                {
                    id:'02', 
                    src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4D0c8Q6J1VdIe5lkgtE9lnZnPRqCou_umHtbwDKYnfAatf5r9A'
                },
                {
                    id:'03',
                    src :'http://photo.newsen.com/news_photo/2018/01/11/201801111855564110_1.jpg'
                },
                {
                    id:'04',
                    src :'https://cdn1.l-nutra.com/wp-content/uploads/2018/07/placeholder.png'
                },
                {
                    id:'05',
                    src :'https://cdn1.l-nutra.com/wp-content/uploads/2018/07/placeholder.png'
                },
                {
                    id:'06',
                    src :'https://cdn1.l-nutra.com/wp-content/uploads/2018/07/placeholder.png'
                },
                {
                    id:'07',
                    src :'https://cdn1.l-nutra.com/wp-content/uploads/2018/07/placeholder.png'
                },
                {
                    id:'08',
                    src :'https://cdn1.l-nutra.com/wp-content/uploads/2018/07/placeholder.png'
                },
                {
                    id:'09',
                    src :'https://cdn1.l-nutra.com/wp-content/uploads/2018/07/placeholder.png'
                },
                {
                    id:'10',
                    src :'https://cdn1.l-nutra.com/wp-content/uploads/2018/07/placeholder.png'
                },
            ]
        }
    }
    
    render(){
        const {myFavorite, top10} = this.state;
        return (
            <div>
                <Segment style={{ padding: '5em 2em' }} vertical>
                    <Header as='h1'>My Favorite</Header>
                    <ThumbnailList size={'tiny'} circular={true} list={myFavorite} />
                </Segment>
                <Segment style={{ padding: '5em 2em' }} vertical>
                    <Header as='h1'>Top 10</Header>
                    <ThumbnailList list={top10} />
                </Segment>
                <Segment style={{ padding: '5em 2em' }} vertical>
                    <Header as='h1'>Trending Now</Header>
                    <ThumbnailList list={top10} />
                </Segment>
                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    "What a Company"
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    "I shouldn't have gone with their competitor."
                                 </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    <Image avatar src='/images/avatar/large/nan.jpg' />
                                    <b>Nan</b> Chief Fun Officer Acme Toys
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Container text>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Breaking The Grid, Grabs Your Attention
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Instead of focusing on content creation and hard work, we have learned how to master the
                            art of doing nothing by providing massive amounts of whitespace and generic content that
                            can seem massive, monolithic and worth your attention.
                        </p>
                        <Button as='a' size='large'> Read More</Button>
                        <Divider
                            as='h4'
                            className='header'
                            horizontal
                            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                        >
                            <a href='#'>Case Studies</a>
                        </Divider>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Did We Tell You About Our Bananas?
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                            it's really true. It took years of gene splicing and combinatory DNA research, but our
                            bananas can really dance.
                        </p>
                        <Button as='a' size='large'> I'm Still Quite Interested</Button>
                    </Container>
                </Segment>
            </div>
        )
    }
}
// const Main = ({ mobile }) => (
//     <div>
//         <Segment style={{ padding: '5em 2em' }} vertical>
//             <Header as='h1'>My Favorite</Header>
//             <ThumbnailList size={'tiny'} circular={true} list />
//         </Segment>
//         <Segment style={{ padding: '5em 2em' }} vertical>
//             <Header as='h1'>Top 10</Header>
//             <ThumbnailList/>
//         </Segment>
//         <Segment style={{ padding: '5em 2em' }} vertical>
//             <Header as='h1'>Trending Now</Header>
//             <ThumbnailList/>
//         </Segment>
//         <Segment style={{ padding: '0em' }} vertical>
//             <Grid celled='internally' columns='equal' stackable>
//                 <Grid.Row textAlign='center'>
//                     <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
//                         <Header as='h3' style={{ fontSize: '2em' }}>
//                             "What a Company"
//                         </Header>
//                         <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
//                     </Grid.Column>
//                     <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
//                         <Header as='h3' style={{ fontSize: '2em' }}>
//                             "I shouldn't have gone with their competitor."
//                          </Header>
//                         <p style={{ fontSize: '1.33em' }}>
//                             <Image avatar src='/images/avatar/large/nan.jpg' />
//                             <b>Nan</b> Chief Fun Officer Acme Toys
//                         </p>
//                     </Grid.Column>
//                 </Grid.Row>
//             </Grid>
//         </Segment>
//         <Segment style={{ padding: '8em 0em' }} vertical>
//             <Container text>
//                 <Header as='h3' style={{ fontSize: '2em' }}>
//                     Breaking The Grid, Grabs Your Attention
//                 </Header>
//                 <p style={{ fontSize: '1.33em' }}>
//                     Instead of focusing on content creation and hard work, we have learned how to master the
//                     art of doing nothing by providing massive amounts of whitespace and generic content that
//                     can seem massive, monolithic and worth your attention.
//                 </p>
//                 <Button as='a' size='large'> Read More</Button>
//                 <Divider
//                     as='h4'
//                     className='header'
//                     horizontal
//                     style={{ margin: '3em 0em', textTransform: 'uppercase' }}
//                 >
//                     <a href='#'>Case Studies</a>
//                 </Divider>
//                 <Header as='h3' style={{ fontSize: '2em' }}>
//                     Did We Tell You About Our Bananas?
//                 </Header>
//                 <p style={{ fontSize: '1.33em' }}>
//                     Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
//                     it's really true. It took years of gene splicing and combinatory DNA research, but our
//                     bananas can really dance.
//                 </p>
//                 <Button as='a' size='large'> I'm Still Quite Interested</Button>
//             </Container>
//         </Segment>
//     </div>
// )

Main.propTypes = {
    mobile: PropTypes.bool,
}

export default Main;
