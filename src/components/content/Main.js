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
import ThumbnailList from '../partial/ThumbnailList'

const data = {
    labels: ['루머의 루머의 루머', '나르코스', '바이킹스', '워킹데드', '하우스 오브 카드', '왕좌의 게임', '고담'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        // lineTension: 0.1,
        backgroundColor:  ['red', 'pink', 'orange', 'yellow', 'lightgreen', 'lightblue', 'brown', 'gray'],  // data 개수만큼 노출됨
        // borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        // pointBorderColor: 'rgba(75,192,192,1)',
        // pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        // pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

const drama = {
    labels: ['1월', '2월', '3월', '4월'],
    datasets: [
        {
            label: '나르코스',
            fill: false,
            data: [40, 55, 35, 20],
            borderColor: 'lightgreen'
        },
        {
            label: '루머의 루머의 루머',
            fill: false,
            data: [60, 40, 20, 30],
            borderColor: 'lightblue'
        },
        {
            label: '워킹데드',
            fill: false,
            data: [30, 42, 48, 52],
            borderColor: 'pink'
        }
    ]
};

const options={
  legend: {
    display: true,
    position: 'right'
  },
  scales: {
    yAxes: [{
      ticks: {
         max: 80,
         min: 0,
         stepSize: 20
       }
     }]
    },
   title: {
    display: true,
    text: 'recent drama trend',
    position: 'bottom'
   }
};

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
            ],
            data : {
                labels: ['루머의 루머의 루머', '나르코스', '바이킹스', '워킹데드', '하우스 오브 카드', '왕좌의 게임', '고담'],
                datasets: [
                  {
                    label: 'My First dataset',
                    fill: false,
                    // lineTension: 0.1,
                    backgroundColor:  ['red', 'pink', 'orange', 'yellow', 'lightgreen', 'lightblue', 'brown', 'gray'],  // data 개수만큼 노출됨
                    // borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    // pointBorderColor: 'rgba(75,192,192,1)',
                    // pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    // pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
                  }
                ]
              },
            drama : {
                labels: ['1월', '2월', '3월', '4월'],
                datasets: [
                    {
                        label: '나르코스',
                        fill: false,
                        data: [40, 55, 35, 20],
                        borderColor: 'lightgreen'
                    },
                    {
                        label: '루머의 루머의 루머',
                        fill: false,
                        data: [60, 40, 20, 30],
                        borderColor: 'lightblue'
                    },
                    {
                        label: '워킹데드',
                        fill: false,
                        data: [30, 42, 48, 52],
                        borderColor: 'pink'
                    }
                ]
            },
            options : {
              legend: {
                display: true,
                position: 'right'
              },
              scales: {
                yAxes: [{
                  ticks: {
                     max: 80,
                     min: 0,
                     stepSize: 20
                   }
                 }]
                },
               title: {
                display: true,
                text: 'recent drama trend',
                position: 'bottom'
               }
            }
        }
    }
    
    render(){
        const {myFavorite, top10} = this.state;
        return (
            <div>
                <Segment style={{ padding: '5em 2em' }} vertical>
                    <Header as='h1'>My Favorite</Header>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <ThumbnailList size={'small'} circular={true} list={myFavorite} />
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <div style={{"width":"50%", "height":"50%"}}>
                                    <Doughnut ref="chart" data={data}  />
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment style={{ padding: '5em 2em' }} vertical>
                    <Header as='h1'>Top 10</Header>
                    <ThumbnailList list={top10} />
                </Segment>
                <Segment style={{ padding: '5em 2em' }} vertical>
                    <Header as='h1'>Recent Trend</Header>
                    <div style={{"width":"50%", "height":"50%"}}>
                        <Line ref="chart" data={drama} options={options}/>
                    </div>
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
