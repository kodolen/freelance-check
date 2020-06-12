import React, { Component } from 'react'
import Layout from "../components/layout"
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

        let answersObj = JSON.stringify(survey.getPlainData(), null, 3)
        let answers = JSON.parse(answersObj)

        for (var i = 0; i < answers.length; i++) {
            console.log(answers[i]['data'][0]['value']);
            if(answers[i]['data'][0]['value'].includes("1")) {
                answer1.push(answers[i]['data'][0]['value'])
            }
            if(answers[i]['data'][0]['value'].includes("2")) {
                answer2.push(answers[i]['data'][0]['value'])
            }
            if(answers[i]['data'][0]['value'].includes("3")) {
                answer3.push(answers[i]['data'][0]['value'])
            }
        }

        console.log(answer1);
        console.log(answer2);
        console.log(answer3);

        score = (((answer1.length * 10) + (answer2.length * 1) + (answer3.length * 5)) / answers.length).toFixed(0);
        console.log(score);

        this.setState({
            isCompleted: true,
            points: score
        })


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

            />
        ) : null

        var onSurveyCompletion = this.state.isCompleted ? (
            
            <div>
                <div id="score">{this.state.points}</div>
            </div>

        ) : null
        return (
            <Layout>
                <h1>Test2</h1>
                {surveyRender}
                {onSurveyCompletion}
                <div id="surveyResult"></div>
            </Layout>
        )
    }
}

export default Test;

