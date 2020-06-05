import React, { Component } from 'react'
import Logo from './Logo'
import styled, { keyframes } from'styled-components'

const transformLeft = keyframes`
  from { transform: rotate(0deg) scale(1) translate(0, 0); }
  33% { transform: rotate(0deg) scale(1) translate(0, 0); }
  66% { transform: rotate(45deg); }
  to { transform: rotate(45deg) scale(2.8, 1.3) translate(10px, 0); }
`

const transformRight = keyframes`
  from { transform: rotate(0deg) scale(1) translate(0, 0); }
  33% { transform: rotate(0deg) scale(1) translate(0, 0); }
  66% { transform: rotate(-45deg); }
  to { transform: rotate(-45deg) scale(2.8, 1.3) translate(-10px, 0); }
`


const disappear = keyframes`
  0% {opacity: 1}
  33% { opacity: 1 }
  66% {opacity: 0.5}
  100% {opacity: 0}
`

const StyledSVG = styled(Logo)`
  #logo-vertical-line {
      animation: ${disappear} 1 1.2s ease forwards;
  }
  #logo-left-line {
      transform-origin: 31px 28px;
      animation: ${transformLeft} 1 1.7s ease-in forwards;
  }
  #logo-right-line {
    transform-origin: 69px 28px;
    animation: ${transformRight} 1 1.7s ease-in forwards;
  }
`

class CloseButton extends Component {
    render () {
        const CloseButtonStyle = {
          width: '2em',
          height: '2em',
        }
        return (
            <StyledSVG style={CloseButtonStyle}></StyledSVG>
        )
    }
}

export default CloseButton