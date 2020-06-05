import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Scrollchor from 'react-scrollchor'

import HeaderPhoto from '../img/Header-Photo.jpg'
import BgText from './BgText'
import { Navbar, Nav } from 'react-bootstrap'
import HeaderBg from "../img/Dark-Header.svg"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Headers.scss'
import '../styles/Styles.scss'

const ScrollStyle = {
    offset: 1,
    duration: 350,
}

class Header extends Component {
    
    constructor(props){
        super(props)
        this.headerContainer = React.createRef()
        this.updateHeight = this.updateHeight.bind(this)
    }

    updateHeight(e){
        this.props.heightCallBack(this.headerContainer.current.clientHeight);
    }

    componentDidMount() {
        this.updateHeight()
        window.addEventListener("resize", this.updateHeight)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateHeight)
    }

    componentDidUpdate() {
        this.updateHeight()
    }

    getStyle = () => {
        return (
            {
                minHeight: '25em',
                objectFit: 'cover',
                backgroundImage: `url(${HeaderBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'  
            }
        )
    }


    render () {
        return (
            <div className="Header" ref={ this.headerContainer } style={this.getStyle()}>
                <Row className="Header-Nav">
                    <div className="Border-Div">
                        <Scrollchor animate={ScrollStyle} to="About" className="Left-Edge">About</Scrollchor>
                        <Scrollchor animate={ScrollStyle} to="Projects">Projects</Scrollchor>
                        <Scrollchor animate={ScrollStyle} to="Contact">Contact</Scrollchor>
                        <Scrollchor animate={ScrollStyle} to="Resume" className="Right-Edge">Resume</Scrollchor>
                    </div>
                    <Navbar className="My-Header-Nav-Bar" expand="md" variant="dark">
                    <Navbar.Toggle data-toggle="dropdown" aria-controls="header-navbar-nav"/>
                    <Navbar.Collapse id="header-navbar-nav">
                        <Nav>
                        <Scrollchor animate={ScrollStyle} to="About" className="nav-link">About</Scrollchor>
                        <Scrollchor animate={ScrollStyle} to="Projects" className="nav-link">Projects</Scrollchor>
                        <Scrollchor animate={ScrollStyle} to="Contact" className="nav-link">Contact</Scrollchor>
                        <Scrollchor animate={ScrollStyle} to="Resume" className="nav-link">Resume</Scrollchor>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </Row>
                <Row className="Header-Content no-gutters">
                    <Col id="Header-Photo-Container" lg={12}>
                        <div id="Header-Photo-Border">
                            <img id="Header-Photo" src={HeaderPhoto} alt="Avatar"></img>
                        </div>                        
                    </Col>
                    <Col id="Header-Text-Container" lg={12}>
                        <BgText fontSize="1.2em">Hello, I am</BgText>
                        <BgText fontSize="1.8em">Trung Nguyen</BgText>
                        <BgText fontSize="1em">Software engineer with a passion for music</BgText>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header;