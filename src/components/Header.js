import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Scrollchor from 'react-scrollchor'
import AOS from 'aos'

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
        AOS.refresh()
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
                <Row className="Header-Nav" data-aos="zoom-in">
                    <div className="Border-Div">
                        <Scrollchor animate={ScrollStyle} to="About" className="Left-Edge">About</Scrollchor>
                        <Scrollchor animate={ScrollStyle} to="Projects">Projects</Scrollchor>
                        <Scrollchor animate={ScrollStyle} to="Contact">Contact</Scrollchor>
                        <a className="Right-Edge" href={process.env.PUBLIC_URL + "/files/Trung_Nguyen_Resume.pdf"} download="Trung_Nguyen_Resume.pdf">Resume</a>
                    </div>
                    <Navbar className="My-Header-Nav-Bar" expand="md" variant="dark">
                    <Navbar.Toggle data-toggle="dropdown" aria-controls="header-navbar-nav"/>
                    <Navbar.Collapse id="header-navbar-nav">
                        <Nav>
                        <Scrollchor animate={ScrollStyle} to="About" className="nav-link">About</Scrollchor>
                        <Scrollchor animate={ScrollStyle} to="Projects" className="nav-link">Projects</Scrollchor>
                        <Scrollchor animate={ScrollStyle} to="Contact" className="nav-link">Contact</Scrollchor>
                        <a className="nav-link" href={process.env.PUBLIC_URL + "/files/Trung_Nguyen_Resume.pdf"} download="Trung_Nguyen_Resume.pdf">Resume</a>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </Row>
                <Row className="Header-Content no-gutters" data-aos="zoom-in">
                    <Col id="Header-Photo-Container" lg={12}>
                        <div id="Header-Photo-Border">
                            <img id="Header-Photo" src={HeaderPhoto} alt="Avatar"></img>
                        </div>                        
                    </Col>
                    <Col id="Header-Text-Container" lg={12}>
                        <BgText fontSize="1.2em">Hello, I am</BgText>
                        <BgText fontSize="1.8em">Trung Nguyen</BgText>
                        <BgText fontSize="1em">Software developer with a passion for music</BgText>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header;