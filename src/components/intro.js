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
                    <div className="intro-content">
                        <h2>{this.props.title}</h2>
                        <p className="flat-text">{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro;
