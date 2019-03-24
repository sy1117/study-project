import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment, Sidebar, Visibility} from 'semantic-ui-react'

import MainContainer from './MainContainer'
import RankContainer from './RankContainer'
import InfoContainer from './InfoContainer'
import MyPageContainer from './MyPageContainer'

import LoginForm from './LoginContainer'

import Heading from '../components/Heading'
import Footer from '../components/Footer'
import MenuLink from '../components/MenuLink'
import Chart from '../components/Chart'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainer extends React.Component {

  constructor () {
    super()
    this.state = {
      sidebarOpened: false
    }
    this.handleSidebarHide = this.handleSidebarHide.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleSidebarHide () {
    this.setState({ sidebarOpened: false })
  }
  handleToggle () {
    this.setState({ sidebarOpened: true })
  }

  render () {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Router>
          <Responsive as={Sidebar.Pushable}>
            <Sidebar
              as={Menu}
              animation='push'
              inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={sidebarOpened}>
              <Menu.Item as='a' active>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item as='a'>
                <Link to="/mypage">My Page</Link>
              </Menu.Item>
              <Menu.Item as='a'>
                Company
              </Menu.Item>
              <Menu.Item as='a'>
                Careers
              </Menu.Item>
              <Menu.Item as='a'>
                Log in
              </Menu.Item>
              <Menu.Item as='a'>
                Sign Up
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher dimmed={sidebarOpened}>
              <Segment
                inverted
                textAlign='center'
                style={{ padding: '1em 0em' }}
                vertical>
                <Container>
                  <Menu
                    inverted
                    pointing
                    secondary
                    size='large'>
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name='sidebar' />
                    </Menu.Item>
                    {/* <Menu.Item position='right'>
                      <Button as='a' inverted>
                        Log in
                      </Button>
                      <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                        Sign Up
                      </Button>
                    </Menu.Item> */}
                  </Menu>
                </Container>
                {/* <Heading mobile /> */}
              </Segment>
              {children}
            </Sidebar.Pusher>
          <Route exact path='/' component={LoginForm} />
          <Route path='/main' component={MainContainer} />
          <Route path='/info/:id' component={InfoContainer} />
          <Route path='/mypage' component={MyPageContainer} />
          </Responsive>

      </Router>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
}

// class MobileContainer extends React.Component {
// 	constructor() {
// 		super()
// 		this.state = {}
// 		this.handleSidebarHide = this.handleSidebarHide.bind(this)
// 		this.handleToggle = this.handleToggle.bind(this)
// 	}

// 	handleSidebarHide() {
// 		this.setState({ sidebarOpened: false })
// 	}

// 	handleToggle() {
// 		this.setState({ sidebarOpened: true })
// }	

// 	render() {
// 		const { children } = this.props
// 		const { sidebarOpened } = this.state

// 		return (
// 			<Responsive
// 				as={Sidebar.Pushable}
// 				getWidth={getWidth}
// 				maxWidth={Responsive.onlyMobile.maxWidth}
// 			>
// 				<Sidebar
// 					as={Menu}
// 					animation='push'
// 					inverted
// 					onHide={this.handleSidebarHide}
// 					vertical
// 					visible={sidebarOpened}
// 				>
// 					<Menu.Item as='a' active>Home</Menu.Item>
// 					<Menu.Item as='a'>Work</Menu.Item>
// 					<Menu.Item as='a'>Company</Menu.Item>
// 					<Menu.Item as='a'>Careers</Menu.Item>
// 					<Menu.Item as='a'>Log in</Menu.Item>
// 					<Menu.Item as='a'>Sign Up</Menu.Item>
// 				</Sidebar>

// 				<Sidebar.Pusher dimmed={sidebarOpened}>
// 					<Segment
// 						inverted
// 						textAlign='center'
// 						style={{ minHeight: 250, padding: '1em 0em' }}
// 						vertical
// 					>
// 						<Container>
// 							<Menu inverted pointing secondary size='large'>
// 								<Menu.Item onClick={this.handleToggle}>
// 									<Icon name='sidebar' />
// 								</Menu.Item>
// 								<Menu.Item position='right'>
// 									<Button as='a' inverted>Log in</Button>
// 									<Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
// 								</Menu.Item>
// 							</Menu>
// 						</Container>
// 						<Heading mobile />
// 					</Segment>
// 					{children}
// 				</Sidebar.Pusher>
// 			</Responsive>
// 		)
// 	}
// }

// MobileContainer.propTypes = {
// 	children: PropTypes.node,
// }

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>
      {children}
    </DesktopContainer>
    {/* <MobileContainer>{children}</MobileContainer> */}
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node
}

export default ResponsiveContainer
