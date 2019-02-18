import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
import Main from '../components/content/Main'
import Detail from '../components/content/Detail'
import Rank from '../components/content/Rank'
import Footer from '../components/partial/Footer'
import Heading from '../components/partial/Heading'
import MenuLink from '../components/partial/MenuLink'


const getWidth = () => {
	const isSSR = typeof window === 'undefined';

	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainer extends React.Component {
	
	constructor() {
		super();
		this.state = {};
		this.hideFixedMenu = this.hideFixedMenu.bind(this)
		this.showFixedMenu = this.showFixedMenu.bind(this)
	}

	hideFixedMenu() {
		this.setState({ fixed: false });
	}
	showFixedMenu() {
		this.setState({ fixed: true });
	}

	render() {
		const { children } = this.props
		const { fixed } = this.state

		return (
		<Router>
			<Responsive 	
				getWidth={getWidth}
				minWidth={Responsive.onlyTablet.minWidth}
				>
				<Visibility
					once={false}
					onBottomPassed={this.showFixedMenu}
					onBottomPassedReverse={this.hideFixedMenu}
				>
					<Segment
						inverted
						textAlign='center'
						style={{ minHeight: 400, padding: '1em 0em' }}
						vertical
					>
						<Menu
							fixed={fixed ? 'top' : null}
							inverted={!fixed}
							pointing={!fixed}
							secondary={!fixed}
							size='large'
						>
							<Container>
								<MenuLink to="/" label="Home"/>
								<MenuLink to="/detail" label="Detail"/>
								<MenuLink to="/rank" label="Rank"/>
								<Menu.Item position='right'>
									<Button as='a' inverted={!fixed}>Log in </Button>
									<Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
								</Menu.Item>
							</Container>
						</Menu>
						<Heading />
					</Segment>
				</Visibility>

				<Route exact path="/" component={Main} />
				<Route path="/detail" component={Detail} />
				<Route path="/rank" component={Rank} />

				<Segment inverted vertical style={{ padding: '5em 0em' }}>
					<Footer/>
				</Segment>
			</Responsive>
		</Router>
		)
	}
}

DesktopContainer.propTypes = {
	children: PropTypes.node,
}


class MobileContainer extends React.Component {
	constructor() {
		super();
		this.state = {};
		this.handleSidebarHide = this.handleSidebarHide.bind(this)
		this.handleToggle = this.handleToggle.bind(this)
	}

	handleSidebarHide() {
		this.setState({ sidebarOpened: false })
	}

	handleToggle() {
		this.setState({ sidebarOpened: true })
	}

	render() {
		const { children } = this.props
		const { sidebarOpened } = this.state

		return (
			<Responsive
				as={Sidebar.Pushable}
				getWidth={getWidth}
				maxWidth={Responsive.onlyMobile.maxWidth}
			>
				<Sidebar
					as={Menu}
					animation='push'
					inverted
					onHide={this.handleSidebarHide}
					vertical
					visible={sidebarOpened}
				>
					<Menu.Item as='a' active>Home</Menu.Item>
					<Menu.Item as='a'>Work</Menu.Item>
					<Menu.Item as='a'>Company</Menu.Item>
					<Menu.Item as='a'>Careers</Menu.Item>
					<Menu.Item as='a'>Log in</Menu.Item>
					<Menu.Item as='a'>Sign Up</Menu.Item>
				</Sidebar>

				<Sidebar.Pusher dimmed={sidebarOpened}>
					<Segment
						inverted
						textAlign='center'
						style={{ minHeight: 250, padding: '1em 0em' }}
						vertical
					>
						<Container>
							<Menu inverted pointing secondary size='large'>
								<Menu.Item onClick={this.handleToggle}>
									<Icon name='sidebar' />
								</Menu.Item>
								<Menu.Item position='right'>
									<Button as='a' inverted>Log in</Button>
									<Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
								</Menu.Item>
							</Menu>
						</Container>
						<Heading mobile />
					</Segment>
					{children}
				</Sidebar.Pusher>
			</Responsive>
		)
	}
}

MobileContainer.propTypes = {
	children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
	<div>
		<DesktopContainer>{children}</DesktopContainer>
		{/* <MobileContainer>{children}</MobileContainer> */}
	</div>
)

ResponsiveContainer.propTypes = {
	children: PropTypes.node,
}

export default ResponsiveContainer;