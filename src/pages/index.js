import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import man from "../images/man-bb.png"



const IndexPage = () => (
  <Layout>
    <div className="home-container">
      <div className="intro">
        <h2>Do you have it in you to become a freelancer?</h2>
        <p>Being a freelancer sounds maybe more beautiful then it is.</p>
      </div>
      <div className="intro-img">
        <img src={man}></img>
      </div>
    </div>
  </Layout>
)

export default IndexPage
