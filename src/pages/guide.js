import React from 'react'
import Layout from '../components/layout';
import Intro from '../components/intro';

const GuidePage = () => (
    <Layout>
        <Intro title="Guide" text="This guide will help you kick start that career of yours as a freelancer." />
        <div className="inner">
            <div className="guide-step">
                <span className="number">Think about your core business</span>
                <p>Your core business is what you are good in and what generates money for you. Make a business plan about what you are selling and what you can promise to your clients. Don’t try to sell something you can not achieve, be honest. You also need to know what your hourly rate will be. Setting an hourly rate can be difficult but it depends on what your desires are and what seems fair. If you’re still a student and not have a lot of experience yet you can ask around €30-€50 an hour. If you are more experienced you maybe can ask around €50-€100 an hour. In some cases you can also agree on a fixed price before starting the project. But keep in mind that you have to make agreements about what will be coming in the end product before starting the project. </p>
            </div>
            <div className="guide-step">
                <span className="number">Do you need any money to start?</span>
                <p>Make a budget of everything that costs money to get you started. If you don’t do this you could have overlooked things when you were already in the process. Starting as a freelancer, finding new clients and earning money is already hard so you don’t want to face unexpected expenses.</p>
            </div>
            <div className="guide-step">
                <span className="number">Is there any competition?</span>
                <p>Investigate your competition and see what they do. If there is any competition try to be more creative and more unique. </p>
            </div>
            <div className="guide-step">
                <span className="number">Get registered</span>
                <p>Think about a name for your company and how you want to present yourself. Not all countries are the same about registering your company but almost every country has a register. In most cases those registers are kept by a commercial court or agency of a ministry.</p>
            </div>
            <div className="guide-step">
                <span className="number">Do your administration</span>
                <p>Administration is really important, be sure you take care of it. If you don't start with a good administration then it can lead to a mess and even in paying fines. There will be no shame at all if you let someone else do this for you but keep in mind that it will maybe cost you extra money.</p>
            </div>
            <div className="guide-step">
                <span className="number">Find your clients</span>
                <p>There are a lot of ways to find new clients. Be sure to have an up-to-date portfolio website and Linkedin and try to market it. Attend network drinks and events in your neighbourhood. Look for potential clients and approach them personally. Ask your own clients to mention you by their clients. </p>
            </div>
            <div className="guide-step">
                <span className="number">Make yourself a office and take care of yourself</span>
                <p>Because you are working from home you can choose to work from your couch, with the TV on and wearing your pyjamas all day. But try to have the same routines as normally if you got to work or school. Make yourself an office in a separate room in your house that only will function as an office. Try to get breaks at fixed times and maybe take a walk, (video) call with your friends or family or lunch at a cafe. </p>
            </div>
        </div>
    </Layout>
)

export default GuidePage;
