import React from 'react'
import Layout from '../components/layout';
import Intro from '../components/intro';

const GuidePage = () => (
    <Layout>
        <Intro title="Guide" text="Being a freelancer sounds maybe more beautiful then it is. Being a freelancer sounds maybe more beautiful then it is. Being a freelancer sounds maybe more beautiful then it is." />
        <div className="inner">
            <div className="guide-step">
                <span className="number">1</span>
                <p>Being a freelancer sounds maybe more beautiful then it is. Being a freelancer sounds maybe more beautiful then it is. Being a freelancer sounds maybe more beautiful then it is."</p>
            </div>
            <div className="guide-step">
                <span className="number">2</span>
                <p>Being a freelancer sounds maybe more beautiful then it is. Being a freelancer sounds maybe more beautiful then it is. Being a freelancer sounds maybe more beautiful then it is."</p>
            </div>
            <div className="guide-step">
                <span className="number">3</span>
                <p>Being a freelancer sounds maybe more beautiful then it is. Being a freelancer sounds maybe more beautiful then it is. Being a freelancer sounds maybe more beautiful then it is."</p>
            </div>
        </div>
    </Layout>
)

export default GuidePage;
