import React from 'react'
import { Button, Card, Icon, Image, Grid, Container, Reveal, Rail, Segment  } from 'semantic-ui-react'
import Thumbnail from './Thumbnail';

const src = 'https://react.semantic-ui.com/images/wireframe/image.png'


class ThumbnailList extends React.Component {

    render() {
        const { size, circular, list } = this.props;
        let sampleData = [
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
        ]

		return (
            // <Grid container stackable verticalAlign='middle'>
            //     <Grid.Row>
            //         <Grid.Column >
            //             <Image.Group size='small'>
            //                 <Image src={src} />
            //                 <Image src={src} />
            //                 <Image src={src} />
            //                 <Image src={src} />
            //             </Image.Group>
            //         </Grid.Column>
            //     </Grid.Row>
            // </Grid>
            <Image.Group size={size? size:'medium'}
                style={ {
                    whiteSpace:'nowrap',
                    overflowY : 'auto'
                }}
                >
                
                {list.map(item=>(
                    <Image src={item.src} style={{display:'inline-block'}} {...(circular? {circular:true} :{})}/>
                ))}
                {/* <Image src={src} style={{display:'inline-block'}}/>
                <Image src={src} style={{display:'inline-block'}}/>
                <Image src={src} style={{display:'inline-block'}}/>
                <Image src={src} style={{display:'inline-block'}}/>
                <Image src={src} style={{display:'inline-block'}}/>
                <Image src={src} style={{display:'inline-block'}}/>
                <Image src={src} style={{display:'inline-block'}}/>
                <Image src={src} style={{display:'inline-block'}}/>
                <Image src={src} style={{display:'inline-block'}}/>
                <Image src={src} style={{display:'inline-block'}}/> */}
                {/* <Button>Next</Button> */}
            </Image.Group>
        );
    }
}

export default ThumbnailList;