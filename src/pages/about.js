import React from 'react'
import Layout from '../components/layout';
import Intro from '../components/intro';
import TestImg from '../images/test-fc.png'

const AboutPage = (props) => {
    return (
        <Layout>
            <Intro title="About" text="Read more about what FreelanceCheck is and how it can helps you to create awareness." />
            <div className="inner">
                <div className="about-wrapper">
                    <div className="left">
                        <h2>Have you ever thought about beginning as a freelancer?</h2>

                        <p className="intro-text">As a freelancer you can work whenever you want, no boss is telling you what to do and work from your own safe place called home.
                        Sounds great? Doesn’t it?
</p>

                        <p>But there is also a downside that a lot of people don’t know about.
                        This is where FreelanceCheck comes into place and makes you aware of what is to be a freelancer.

                        FreelanceCheck is a website for people who are thinking about becoming a freelancer. There are multiple things to do on this website and one of the main goals is to test if being a freelancer is something for you. There is a comprehensive test that contains various questions that are created based on research.

                        Imagine that you had a high score at the end of the test and you are capable of starting out as a freelancer. There will be a roadmap available that guides you to kick start that career of yours as a freelancer. 
</p>

                
                        <a href="/test"><span className="button primary">TEST</span></a>
                    </div>
                    <div className="right">
                        <img src={TestImg}></img>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage;
