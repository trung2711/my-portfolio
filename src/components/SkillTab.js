import React, { Component } from 'react'
import '../styles/BgText.scss';
import '../styles/SkillTab.scss';


class SkillTab extends Component {
    render () {
        return (
            <div className="Content-Text Skill-Tab">
                <h1>{this.props.TabTitle}</h1>
                <hr></hr>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default SkillTab;