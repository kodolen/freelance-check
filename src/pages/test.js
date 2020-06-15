import React, { Component } from 'react'
import Layout from "../components/layout"
import Intro from "../components/intro";
import "survey-react/survey.css"
import * as Survey from "survey-react"

class Test extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
        this.onCompleteComponent = this.onCompleteComponent.bind(this)
    }

    onCompleteComponent = (survey) => {

        let answer1 = [];
        let answer2 = [];
        let answer3 = [];
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
                }
            }
        }

        console.log(answersObj + "da");

        console.log(answer1);
        console.log(answer2);
        console.log(answer3);

        score = (((answer1.length * 10) + (answer2.length * 5) + (answer3.length * 1)) / answers.length) * 10;
        score = score.toFixed(0)
        console.log(score);

        this.setState({
            isCompleted: true,
            points: score
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
                advice: "You did score good on the test, but there are still some things you have to take care of. You have to know to take care of your own administration and know how to find new clients and you definitely can start out as a freelancer!"
            })

            console.log("redelijk")
        }

        if (score > 78 && score < 101) {
            this.setState({
                advice: "goed"
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
                <h2>Result</h2>
                <div id="score">{this.state.points}<span className="perc">%</span></div>
                <p className="flat-text">{this.state.advice}</p>
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

