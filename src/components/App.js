import React from 'react'
import SearchBar from './SearchBar'
import carSearch from '../api/carSearch'
import CarList from './CarList'
import place from '../api/location'

export default class App extends React.Component {
    state = { 
        cars: [],
        totalResults: null,
        lat: null,
        long: null,
        start: 0,
        error: '' 
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
            err => this.setState({errorMessage: err.message })
        )
    }

    makeCarRequest(fields) {
        carSearch.get('/v1/search', {
            params: {
                api_key: 'PNPnI9W2697Avxgu4f9zhdJBqZn4xAgs',
                year: fields.year.trim(),
                make: fields.make.trim(),
                model: fields.model.trim(),
                start: this.state.start,
                latitude: this.state.lat,
                longitude: this.state.long,
                radius: fields.radius ? fields.radius.trim() : 100,
                rows: fields.numresults ? fields.numresults.trim() : 10,
                country: 'ALL'
            },
        }).then((response) => {
            this.setState({ cars: response.data.listings, totalResults: response.data.num_found })
        })
    }

    onSearchSubmit = (fields) => {
        if (fields.location) {
            place.get('/geocode/v1/json', {
                params: {
                    key: 'd5e979d7e6bc48c88d452b1aaf8a0ca5',
                    q: fields.location,
                    no_annotations: 1,
                    limit: 1
                },
            }).then((response) => {
                const result = response.data.results[0]
                this.setState({ lat: result.geometry.lat, long: result.geometry.lng })
            }).then(() => this.makeCarRequest(fields))
        } else {
            this.makeCarRequest(fields)
        }
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <CarList cars={this.state.cars} numFound={this.state.totalResults}/>
            </div>
        )
    }
}