import React, { Component } from 'react'
import TextBlock from './TextBlock'
import '../styles/Styles.scss'
import { Row, Col, Carousel } from 'react-bootstrap'
import ModalItem from './ModalItem'
import SlidePuzzle from '../img/SlidePuzzle.svg'
import LinguaBox from '../img/LinguaBox.svg'
import TournamentPortal from '../img/TournamentPortal.svg'
import PrevButton from '../img/PrevButton.svg'
import NextButton from '../img/NextButton.svg'
import Chatbot from '../img/Chatbot.gif'
import ImageTranslate from '../img/Image-Translate.gif'
import ChatProfile from '../img/Profile.png'
import SlidePuzzleDemo from '../img/SlidePuzzle.gif'
import ImageSelection from '../img/ImageSelection.png'
import Statistics from '../img/Statistics.png'
import styled from'styled-components'

const StyledCarousel = styled(Carousel)`
  .carousel-control-prev-icon {
    background-image: url(${PrevButton});
  }
  .carousel-control-next-icon {
    background-image: url(${NextButton});
  }
  .carousel-control-prev-icon, .carousel-control-next-icon {
    width: 2em;
    height: 2em;
  }
  .carousel-control-next, .carousel-control-prev {
    top: 40%;
    bottom: auto;
    z-index: 20;
  }
`

class Projects extends Component{
  state = {
    modals: [
      {
        id: 1,
        open: false
      },
      {
        id: 2,
        open: false
      },
      {
        id: 3,
        open: false
      }
    ]
  }
  onOpenModal = (id) => {
    this.setState({ modals: this.state.modals.map(item => {
      if(item.id===id) {
        item.open = true;
      }
      return item
    }) });
  }
  onCloseModal = (id) => {
    this.setState({ modals: this.state.modals.map(item => {
      if(item.id===id) {
        item.open = false;
      }
      return item
    }) });
  }
  getOpen = (id) => {
    const open = this.state.modals
    return open[id-1].open
  }
  render() {
    return (
      <div id="Projects" className="Projects">
        <Row className="no-gutters" data-aos="fade-up" data-aos-delay="100">
          <Col lg={12}>
            <TextBlock title="My Projects">
            <div style={{paddingTop: '0.5em'}}>
              <StyledCarousel>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={LinguaBox}
                    width="70%"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>LinguaBox</h3>
                    <p>
                      A useful Android application for traveling and language learning<br/>
                      <button className="Styled-Button" onClick={()=>{this.onOpenModal(1)}}>Details</button>
                      <a className="Styled-Button" href="https://github.com/lucatran97/LinguaBox" target="_blank" rel="noopener noreferrer">Code</a>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={SlidePuzzle}
                    width="70%"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Slide Puzzle</h3>
                    <p>
                      Bringing new features to the classic slide puzzle game<br/>
                      <button className="Styled-Button" onClick={()=>{this.onOpenModal(2)}}>Details</button>
                      <a className="Styled-Button" href="https://github.com/adamwberck/SlidePuzzleProj" target="_blank" rel="noopener noreferrer">Code</a>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={TournamentPortal}
                    width="70%"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Tournament Portal</h3>
                    <p>
                      My first web application project<br/>
                      <a className="Styled-Button" href="http://cis-linux2.temple.edu:8080/SP19_3308_tug57907/index.html" target="_blank" rel="noopener noreferrer">Live</a>
                      <a className="Styled-Button" href="https://github.com/trung2711/Coding-Portfolio/tree/master/ClassProject_WebApplication" target="_blank" rel="noopener noreferrer">Code</a>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </StyledCarousel>
              <ModalItem isOpen={this.getOpen(1)} onClose={() => {this.onCloseModal(1)}}>
                <TextBlock title="LinguaBox">
                  <Row className="no-gutters">
                    <Col md={7}>
                      <p>LinguaBox allows users to quickly translate texts, speeches, and images, and practice having conversations in foreign language with a travel guide chatbot. 
                        Using the app, users can quickly understand street signs, restaurant menus, etc. in a foreign country by
                        capturing images with the phone’s camera or by typing in the app’s translator; they can have the texts
                        spoken to them by the app (in supported languages) to learn the pronunciations; they can also have
                        conversations with foreigners and understand their responses through the app speech-to-translation feature. 
                        When helping users with conversational skills, LinguaBox’s chatbot accelerates the
                        learning process by increasing the difficulty of its responses according to the users’ “level”, which
                        progresses using the number of messages sent and the number of consecutive days of app usage.</p>
                    </Col>
                    <Col md={5}>
                      <figure style={{maxWidth: '280px', textAlign: 'center'}}>
                        <img src={Chatbot} alt="Chatbot demo" style={{maxWidth: '100%', height:'auto'}}></img>
                        <figcaption style={{textAlign: 'center'}}><i>LinguaBox's chatbot feature</i></figcaption>
                      </figure>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2><b>Features:</b></h2>
                      <ul style={{paddingLeft: '1.1em', textAlign: 'left'}}>
                        <li>Text translation in over 60 languages, along with speech-to-text and text-to-speech functionalities in supported languages.</li>
                        <li>Image-to-text-to-translation: a combination of text recognition with the app's translation feature.</li>
                        <li>Travel guide chatbot in 10 different languages with 3 levels of difficulty; difficulty increases by users' chatting daily and frequently.</li>
                        <li>Google Sign In integration for ease of recording users' app usage</li>
                      </ul>
                      <h2><b>Technologies used:</b></h2>
                      <p>Microsoft Azure Cloud App Service, Android Studio, Microsoft Translator, Microsoft Speech, Google Sign In, Firebase OCR, Google Dialogflow, MongoDB</p>
                      <p><em>Special thanks to my collaborators: Cuong Ho, Luca Tran, and Curtis Kieser from Temple University's Class of 2020!</em></p>
                    </Col>
                  </Row>
                  <Row className="no-gutters">
                    <Col md={6}>
                      <figure>
                        <img src={ImageTranslate} alt="Feature demo"></img>
                        <figcaption style={{textAlign: 'center'}}><i>Image to text to translation</i></figcaption>
                      </figure>
                    </Col>
                    <Col md={6}>
                      <figure>
                        <img src={ChatProfile} alt="User's profile demo"></img>
                        <figcaption style={{textAlign: 'center'}}><i>User's profile</i></figcaption>
                      </figure>
                    </Col>
                  </Row>
                </TextBlock>
              </ModalItem>
              <ModalItem isOpen={this.getOpen(2)} onClose={() => {this.onCloseModal(2)}}>
                <TextBlock title="Slide Puzzle">
                  <Row>
                    <Col md={7}>
                      <p>Slide Puzzle is a simple brain teaser where players must "slide" the pieces of a scrambled image to its original position. 
                        This version of the game is designed with a simple idea in mind - to scramble and unscramble as many images as possible! 
                        It supports 3 different methods of selecting images to play: using the phone's gallery, taking a photo with the camera, 
                        using an online (public) photo from Flickr. After completing (or failing) a puzzle, 
                        players can share the same puzzle (same image, game mode, and dimensions) to another app user, using the app's inbox feature. 
                        In-depth statistics are provided for each puzzle dimension, along with the option to erase everything and start over!</p>
                        <p><em>Special thanks to my collaborators: Adam Berck, Dan Tran, and Mike Lauw from Temple University's Class of 2020!</em></p>
                    </Col>
                    <Col md={5}>
                      <figure>
                        <img src={SlidePuzzleDemo} alt="Slide puzzle demo"></img>
                        <figcaption style={{textAlign: 'center'}}><i>Gameplay features: moving, undoing, hints, and preview</i></figcaption>
                      </figure>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2><b>Features:</b></h2>
                      <ul style={{paddingLeft: '1.1em', textAlign: 'left'}}>
                        <li>2 game modes: Classic and Timed.</li>
                        <li>Basic gameplay features with move undo, hints (for dimensions up to 4x4), and image completion preview.</li>
                        <li>3 different methods of selecting images.</li>
                        <li>In-depth gameplay statistics for each puzzle dimension.</li>
                        <li>Personal inbox for sending/receiving challenges to/from other players.</li>
                      </ul>
                      <h2><b>Technologies used:</b></h2>
                      <p>Flickr API, Cloudinary Service, Android Studio, MongoDB</p>
                    </Col>
                  </Row>
                  <Row className="no-gutters">
                    <Col md={6}>
                      <figure>
                        <img src={ImageSelection} alt="Selection methods"></img>
                        <figcaption style={{textAlign: 'center'}}><i>Methods of image selection</i></figcaption>
                      </figure>
                    </Col>
                    <Col md={6}>
                      <figure>
                        <img src={Statistics} alt="User's statistics"></img>
                        <figcaption style={{textAlign: 'center'}}><i>Example statistics for 3x3 puzzles</i></figcaption>
                      </figure>
                    </Col>
                  </Row>
                </TextBlock>
              </ModalItem>
            </div>
            </TextBlock>
          </Col>
        </Row>
      </div>
    )
  } 
}

export default Projects
