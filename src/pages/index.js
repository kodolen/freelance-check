import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import man from "../images/man-bb.png"



const IndexPage = () => (
  <Layout colorFinal="white">
    <div className="inner">
      <div className="home-container">
        <div className="intro">
          <h1>Have you ever thought about beginning as a <span className="bold">freelancer?</span></h1>
          <p className="flat-text">As a freelancer you can work whenever you want, no boss is telling you what to do and work from your own safe place called home.
          Sounds great? Doesn’t it?
</p>
          <div className="link-wrapper">
            <a href="/test"><span className="button primary">TEST</span></a>
            <a href="/about"><span className="button secondary">READ MORE</span></a>

          </div>
        </div>
        <div className="intro-img">
          <img src={man}></img>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
