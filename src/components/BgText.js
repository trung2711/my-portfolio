import React, { Component } from 'react'
import '../styles/BgText.scss'

class Header extends Component {

    render () {
        const fontStyle = {
            fontSize: this.props.fontSize,
            fontWeight: 'bolder'
        }
        return (
        <div className="Header-Text-Container"><span className="Header-Text" style={fontStyle}>{this.props.children}</span></div>
        )
    }
}

export default Header;