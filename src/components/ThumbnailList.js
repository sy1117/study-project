import React from 'react'
import { Button, Card, Icon, Image, Grid, Container, Reveal, Rail, Segment  } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Thumbnail from './Thumbnail';

const src = 'https://react.semantic-ui.com/images/wireframe/image.png'


class ThumbnailList extends React.Component {

    render() {
        const { size, circular, list } = this.props;
		return (
            <Image.Group size={size? size:'tiny'}
                // style={ {
                //     whiteSpace:'nowrap',
                //     overflowY : 'auto'
                // }}
                >
                {list.map(item=>(
                    <Link to={`/info/${item._id}`} key={item._id}>
                        <Image src={item.url} 
                            style={{display:'inline-block'}} 
                            {...(circular? {circular:true} :{})}
                        />
                    </Link>
                ))}
            </Image.Group>
        );
    }
}

export default ThumbnailList;