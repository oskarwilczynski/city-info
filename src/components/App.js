import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import styled, { css } from 'styled-components';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import SearchBar from 'material-ui-search-bar';
import StarterScreen from './StarterScreen';
import DescWindow from './DescWindow';
import WeatherWindow from './WeatherWindow';
import EventsWindow from './EventsWindow';
import SimpleForm from './SimpleForm';

injectTapEventPlugin();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.getApis = this.getApis.bind(this);
        this.onChange = (address) => this.setState({ address })

        this.state = {
            error: null,
            isLoaded: false,
            city: [],
            address: 'San Francisco, CA',
            coords: [],
            events: []
        };
    }

    handleFormSubmit = (event) => {
        geocodeByAddress(this.state.address)
          .then(results => getLatLng(results[0]))
          .then(
                (latLng) => {
                    this.setState({
                        coords: latLng
                    });
                }
            )
          .catch(error => console.error('Error', error))
    }

    getCityDesc = () => {
        const wikiApiPageId = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&list=search&utf8=&srsearch=" + this.state.address

        return fetch(wikiApiPageId)
            .then(res => res.json())
            .then(
                (result) => {
                    const wikiApiCityDescPageId = result.query.search[0].pageid
                    const wikiApiCityDesc = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro=&pageids=" + result.query.search[0].pageid
                    
                    return fetch(wikiApiCityDesc)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                this.setState({
                                    isLoaded: true,
                                    city: {
                                        title: result.query.pages[wikiApiCityDescPageId].title,
                                        description: result.query.pages[wikiApiCityDescPageId].extract
                                    }
                                });
                                
                                return fetch("https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=pageimages&&piprop=original&titles=" + this.state.city.title)
                                    .then(res => res.json())
                                    .then(
                                        (result) => {
                                            this.setState({
                                                city: {
                                                    ...this.state.city,
                                                    image: result.query.pages[wikiApiCityDescPageId].original.source
                                                }
                                            })
                                        }


                                    )
                            }
                        )
                }
            );
    }

    getApis = (event) => {
        event.preventDefault()

        this.handleFormSubmit();
        this.getCityDesc();
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <SimpleForm
                        address={this.state.address}
                        getApis={this.getApis}
                        onChange={this.onChange}
                    />
                    <StarterScreen/>
                    <WeatherWindow
                        coords={this.state.coords}
                    />
                    <DescWindow
                        city={this.state.city}
                    />
                    <EventsWindow/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
