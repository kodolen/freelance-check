import React, { Component } from 'react'
import Layout from "../components/layout"
import Intro from "../components/intro";
import "survey-react/survey.css"
import * as Survey from "survey-react"

class Test extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listOfAdvice: []
        }

    }

    componentDidMount(){
        this.onCompleteComponent = this.onCompleteComponent.bind(this)
    }

    onCompleteComponent = (survey) => {

        let answer1 = [];
        let answer2 = [];
        let answer3 = [];
        let basedAdvise = [];
        let score;
        let advice = "";

        let answersObj = JSON.stringify(survey.getPlainData(), null, 3)
        let answers = JSON.parse(answersObj)

        for (var i = 0; i < answers.length; i++) {
            if ('value' in answers[i]['data'][0]) {
                if (answers[i]['data'][0]['value'].includes("1")) {
                    answer1.push(answers[i]['data'][0]['value'])
                }
                if (answers[i]['data'][0]['value'].includes("2")) {
                    answer2.push(answers[i]['data'][0]['value'])
                }
                if (answers[i]['data'][0]['value'].includes("3")) {
                    answer3.push(answers[i]['data'][0]['value'])

                    switch (answers[i]['name']) {

                        case 'question1':
                            basedAdvise.push("Think about what your core business will be");
                            break;
                        case 'question3':
                            basedAdvise.push("Try to think about the benefits of being your own boss, there is no one breathing down your neck!");
                            break;
                        case 'question7':
                            basedAdvise.push("If you have struggles with not having someone to tell you what to do, try to see the client as your boss. The client will tell you what to do");
                            break;
                        case 'question8':
                            basedAdvise.push("If you feel lonely quickly, try to plan breaks at fixed times. Take a walk, (video) call with friends and family or eat something at a cafe");
                            break;
                        case 'question11':
                            basedAdvise.push("There are a lot of ways to find new clients. Be sure to have an up-to-date portfolio website and Linkedin and try to market it. Attend network drinks and events in your neighbourhood. Look for potential clients and approach them personally. Ask your own clients to mention you by their clients.");
                            break;
                        case 'question12':
                            basedAdvise.push("There is always a possibility that you have to handle angry clients. Be sure you always make agreements, about certain things related to the project, with the client before you start on their project. If they want more or something totally different you can point them to the agreements.");
                            break;
                        case 'question13':
                            basedAdvise.push("Every customer is different, one customer wants to contact in a formal way and the other customer in an informal way.");
                            break;
                        case 'question15':
                            basedAdvise.push("Administration is really important, be sure you take care of it. If you don't start with a good administration then it can lead to a mess and even in paying fines");
                            break;
                        case 'question17':
                            basedAdvise.push("Try to start your day you will normally do if you go to work or school. Maybe go out for a walk now and then and try to eat healthy. Try to have a good place at your own home and design it like a real office. Working from home doesn't mean you have to end up unwashed and in your pyjamas all day!");
                            break;

                    }

                }
            }
        }

        score = (((answer1.length * 10) + (answer2.length * 5) + (answer3.length * 1)) / answers.length) * 10;
        score = score.toFixed(0)

        this.setState({
            isCompleted: true,
            points: score,
            listOfAdvice: basedAdvise
        })

        if (score > 0 && score < 33) {
            this.setState({
                advice: "You didn't score good on the test. If you want to start as a freelancer you have to put in more work"
            })

            console.log('zeer slecht')
        }

        if (score > 34 && score < 49) {
            this.setState({
                advice: "You didn't score good on the test but there is still potential for you to start out as a freelancer"
            })

            console.log('slecht')
        }

        if (score > 50 && score < 77) {
            this.setState({
                advice: "You did score good on the test, but there are still some things you have to take care of."
            })

            console.log("redelijk")
        }

        if (score > 78 && score < 101) {
            this.setState({
                advice: "You scored really good on the test and beginning as a freelancer is definitely something for you!"
            })

            console.log("goed")
        }

    }

    render() {
        var json = {
            surveyId: '98ccdae2-97aa-475e-b9f7-9a6cde833e54',
            surveyPostId: "25a51c2b-2cd7-4ff7-9f3e-33336e275640"
        };
        var surveyRender = !this.state.isCompleted ? (
            <Survey.Survey

                json={json}
                showCompletedPage={false}
                onComplete={this.onCompleteComponent}
                showProgressBar='top'

            />
        ) : null

        var onSurveyCompletion = this.state.isCompleted ? (

            <div className="result-wrapper">
                <h2>Result:</h2>
                <div id="score">{this.state.points}<span className="perc">%</span></div>
                <p className="flat-text">{this.state.advice}</p>
                <ul>
                    {this.state.listOfAdvice.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <a href="/test"><span className="button primary">Guide</span></a>
            </div>

        ) : null
        return (
            <Layout>
                <Intro title="Freelance Check Test" text="This is where you can do the test. At the end of the test you will get a result." />
                <div className="inner">
                    <div className="test-wrapper">
                        {surveyRender}
                    </div>
                    {onSurveyCompletion}
                    <div id="surveyResult"></div>
                </div>
            </Layout>
        )
    }
}

export default Test;

