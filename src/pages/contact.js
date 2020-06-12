import React, { Component } from 'react'
import Layout from "../components/layout"
import "survey-react/survey.css"
import * as Survey from "survey-react"

class Contact extends Component {

    json = {
        surveyId: '98ccdae2-97aa-475e-b9f7-9a6cde833e54',
        surveyPostId: "25a51c2b-2cd7-4ff7-9f3e-33336e275640"
    };

    //Define a callback methods on survey complete
    onComplete(survey, options) {
        //Write survey results into database
        console.log("Survey results: " + JSON.stringify(survey.data));
    }

    render() {

        var model = new Survey.Model(this.json);
        return (
        <Survey.Survey model={model} onComplete={this.onComplete} />
        )

    }
}

export default Contact;

