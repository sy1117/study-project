import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

import ResponsiveContainer from './ResponsiveContainer';
import ThumbnailList from './ThumbnailList';
import Thumbnail from './Thumbnail';
import Main from './Main'

import DramaInfo from '../containers/DramaInfo';

const HomepageLayout = () => (
     <ResponsiveContainer>
         <Main/>
    </ResponsiveContainer>
    //<DramaInfo></DramaInfo>
)
export default HomepageLayout