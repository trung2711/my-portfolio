import React, { Component } from 'react'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import $ from 'jquery'
import siteBg from './img/White-Bg.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './styles/Styles.scss';

class App extends Component{
  constructor(props){
      super(props);
      this.divElement = React.createRef();
      this.updateNav = this.updateNav.bind(this)
      this.setHeaderHeight = this.setHeaderHeight.bind(this)
      this.headerHeight = 0
  }

  state = {
    isTop: true,
  }

  componentDidMount() {
    AOS.init({once: true, duration: 800})
    document.addEventListener('scroll', this.updateNav)
  }
 
  componentWillUnmount() {
    document.removeEventListener('scroll', this.updateNav)
  }
 
  componentDidUpdate() {
    this.updateNav();
  }

  updateNav = () => {
    var s = $(window).scrollTop()
    var h = this.headerHeight
    const isTop = s < h;
    if (isTop !== this.state.isTop) {
        this.setState({ isTop })
    }
  }

  setHeaderHeight = (height) => {
    this.headerHeight = height
  }

  render() {
    return (
      <div style={
        {
          backgroundImage: `url(${siteBg})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100% auto',
          minHeight: '100vh'
        }
      }>
        <NavBar style={this.state.isTop ? preHeader : postHeader}></NavBar>
        <div className="Content-Wrap">
          <Header heightCallBack={this.setHeaderHeight} ></Header>
          <div className="Main-Content">
              <AboutMe></AboutMe>
              <Projects></Projects>
              <Contact></Contact>
          </div>
          <Footer></Footer>
        </div>
      </div>
    )
  } 
}


const preHeader = {
  visibility: 'hidden'
}

const postHeader = {
  visibility: 'visible',
  opacity: '1'
}

export default App