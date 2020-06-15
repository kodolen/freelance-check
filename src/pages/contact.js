import React from 'react'
import Layout from '../components/layout';
import Intro from '../components/intro';

const ContactPage = (props) => {
    return (
        <Layout>
            <Intro title="Contact" text="Feel free to ask anything." />
            <div className="inner">
                <form id="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Email address</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </Layout>
    )
}

export default ContactPage;