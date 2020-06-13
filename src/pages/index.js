import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import man from "../images/man-bb.png"



const IndexPage = () => (
  <Layout colorFinal="white">
    <div className="inner">
      <div className="home-container">
        <div className="intro">
          <h1>Do you have it in you to become a <span className="bold">freelancer?</span></h1>
          <p className="flat-text">Being a freelancer sounds maybe more beautiful then it is. Being a freelancer sounds maybe more beautiful then it is. Being a freelancer sounds maybe more beautiful then it is.</p>
          <div className="link-wrapper">
            <a href="/test"><span className="button primary">DOE DE TEST</span></a>
            <a href="/test"><span className="button secondary">STAPPENPLAN</span></a>
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
