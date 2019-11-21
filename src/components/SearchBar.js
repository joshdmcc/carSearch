import React from 'react'
import Header from './Header'

export default class SearchBar extends React.Component {
    state = { 
        make: "",
        model: "",
        year: "",
        radius: "",
        numresults: "",
        location: ""
    }

    toggleAccordion = (event) => {
        event.target.classList.toggle('active')
        event.target.nextSibling.classList.toggle('active')
    }

    onFormSubmit = event => {
        event.preventDefault()

        this.props.onSubmit(this.state)
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="ui segment">
                <Header />
                <form className="ui fluid form">
                    <div className="three fields">
                        <div className="field">
                            <label>Year</label>
                            <input type='text' name='year' value={this.state.year} onChange={this.handleChange} required/>
                        </div>
                        <div className="field">
                            <label>Make</label>
                            <input type='text' name='make' value={this.state.make} onChange={this.handleChange} required/>
                        </div>
                        <div className="field">
                            <label>Model</label>
                            <input type='text' name='model' value={this.state.model} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="ui accordion field">
                        <div className="title" onClick={this.toggleAccordion}>
                            <i className="icon dropdown"></i>
                            Advanced Options
                        </div>
                        <div className="content field">
                            <div className="three fields">
                                <div className="field">
                                    <label className="transition visible">Radius (default: 100mi)</label>
                                    <input type="text" name="radius" value={this.state.radius} onChange={this.handleChange} />
                                </div>
                                <div className="field">
                                    <label className="transition visible">Results to show (default: 10)</label>
                                    <input type="text" name="numresults" value={this.state.numresults} onChange={this.handleChange} />
                                </div>
                                <div className="field">
                                    <label className="transition visible">Location</label>
                                    <input type="text" name="location" value={this.state.location} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <button style={{marginTop: '10px'}} className="ui secondary button" onClick={this.onFormSubmit}>Submit</button>
            </div>
        )
    }
}