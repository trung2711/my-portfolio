import React, { Component } from 'react'
import TextBlock from './TextBlock'
import '../styles/Styles.scss'
import { Row, Col } from 'react-bootstrap'
import GitHubIcon from '../img/GitHub-Light.svg'
import LinkedInIcon from '../img/LinkedIn-Light.svg'

class Contact extends Component{
  
  render() {
    return (
      <div id="Contact">
        <Row className="no-gutters">
          <Col lg={12}>
            <TextBlock title="Connect With Me">
              <h2>Trung Viet Nguyen</h2>
              <p>
                  1133 West Nevada Street, Philadelphia, PA 19133<br/>
                  <a href="mailto:trungnvflss@gmail.com" >trungnvflss@gmail.com</a>  |  (215) 618-6363
              </p>
              <div id="Contact-Icons">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/trung2711"><img src={GitHubIcon} height="25px" width="25px" alt="GitHub"></img></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/trung-nguyen-3b68ba134/"><img src={LinkedInIcon} height="25px" width="25px" alt="LinkedIn"></img></a>
              </div>          
            </TextBlock>
          </Col>
        </Row>
      </div>
    )
  } 
}

export default Contact
