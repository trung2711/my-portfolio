import React, { Component } from 'react'
import TextBlock from './TextBlock'
import '../styles/Styles.scss';
import { Row, Col } from 'react-bootstrap';
import SkillTab from './SkillTab';

class AboutMe extends Component{
  
  render() {
    return (
      <div id="About">
        <Row className="no-gutters">
          <Col md={8}>
            <TextBlock title="About Me">
              <p>I am a recent graduate at Temple University with a bachelor's degree in computer science and an aspiration to become a full stack software developer. 
                Through my academic efforts, I graduated <i>summa cum laude</i> and am now a member of the prestigious Phi Beta Kappa Society, 
                ready to contribute my skills and knowledge to the software industry. Prior to graduating, 
                I worked as a peer tutor at Temple's College of Science and Technology to help undergraduate students with computer science coursework, 
                and as a web developer at the Fox School of Business.</p>
              <p>I have a great passion for music and has received a minor in music along with my degree at Temple University, focusing on instrument playing and music technology. 
                Having experience in audio recording and editing, I plan to make music production my long-term hobby and (hopefully) a secondary job.</p>
              <p>I am also a travel enthusiast who have had experience living and studying as an in different countries - Vietnam, Italy, and the United States. I always strive to further expand my cultural knowledge and see what the world has to offer.</p> 
            </TextBlock>
          </Col>
          <Col md={4}>
            <Row className="no-gutters">
              <Col lg={12}><SkillTab TabTitle="My Toolkit">JAVA C JavaScript HTML CSS Sass MySQL MongoDB</SkillTab></Col>
              <Col lg={12}><SkillTab TabTitle="Interests">Coding Photography Audio-Engineering Music Gaming Traveling</SkillTab></Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  } 
}

export default AboutMe
