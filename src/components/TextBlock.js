import React, { Component } from 'react'

import '../styles/TextBlock.scss';

class TextBlock extends Component {
    render () {
        return (
            <div className="Text-Block">
                <h1>{this.props.title}</h1>
                <hr></hr>
                {this.props.children}
            </div>
        )
    }
}

export default TextBlock;