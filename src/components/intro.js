import React, { Component } from 'react'

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="intro-wrapper">
                <div className="inner">
                    <h2>{this.props.title}</h2>
                    <p className="intro-text">{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Intro;
