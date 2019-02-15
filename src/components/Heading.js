import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Header,
    Icon,
    Sidebar,
} from 'semantic-ui-react'

const Heading = ({ mobile }) => (
    <Container text>
        <Header
            as='h1'
            content='Drama-Inside'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <Header
            as='h2'
            content='Do whatever you want when you want to.'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
    </Container>
)

Heading.propTypes = {
    mobile: PropTypes.bool,
}

export default Heading;
