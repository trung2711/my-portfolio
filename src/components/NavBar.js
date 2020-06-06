import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Scrollchor from 'react-scrollchor'

import Logo from './Logo'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Styles.scss'

const ScrollStyle = {
    offset: 1,
    duration: 350,
}

class NavBar extends Component {
    render () {
        return (
            <Navbar style={this.props.style} fixed="top"  className="My-Nav-Bar" expand="md" variant="dark">
                <Navbar.Brand href="/my-portfolio"><Logo></Logo></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Scrollchor animate={ScrollStyle} to="About" className="nav-link">About</Scrollchor>
                        <Scrollchor animate={ScrollStyle} to="Projects" className="nav-link">Projects</Scrollchor>
                        <Scrollchor animate={ScrollStyle} to="Contact" className="nav-link">Contact</Scrollchor>
                        <a className="nav-link" href={process.env.PUBLIC_URL + "/files/Trung_Nguyen_Resume.pdf"} download="Trung_Nguyen_Resume.pdf">Resume</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar