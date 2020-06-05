import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import '../styles/Footer.scss'

class Footer extends Component {

    render () {
        return (
            <div className="Footer">
                <Row className="no-gutters">
                    <Col md={7}>
                        <p className="Footer-Left">
                            Header city background by Starder @ <a href="https://freedesignfile.com" target="_blank" rel="noopener noreferrer">freedesignfile.com</a><br />
                            White texture background by Sívio Moura @ <a href="https://www.uihere.com/" target="_blank" rel="noopener noreferrer">uihere.com</a><br />
                            
                        </p>
                    </Col>
                    <Col md={5}>
                        <p className="Footer-Right">
                            @2020 Trung Nguyen. Made with React.
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Footer