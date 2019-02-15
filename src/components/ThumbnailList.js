import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Thumbnail from './Thumbnail';

class ThumbnailList extends React.Component {
    render() {

		return (
            <Card.Group>
                <Thumbnail/><Thumbnail/>
            </Card.Group>
        );
    }
}

export default ThumbnailList;