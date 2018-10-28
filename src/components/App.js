import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import Card from 'material-ui/Card';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import StarterScreen from './StarterScreen';
import DescWindow from './DescWindow';
import WeatherWindow from './WeatherWindow';
import SimpleForm from './SimpleForm';
import Event from './Event';

const EventsWindow = styled(Card)`
    && {
        margin-top: 3vw;
        height: 35svw;
        width: 40%;
        float: right;
    }
`

class App extends React.Component {
    constructor(props) {
        super(props);
        this.getApis = this.getApis.bind(this);
        this.onChange = (address) => this.setState({ address })

        this.state = {
            isError: false,
            isClicked: false,
            isLoaded: false,
            city: [],
            address: 'Leeds, UK',
            coords: [],
            events: {
                event: []
            }
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

                    this.getEvents();
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

    getEvents = () => {
        return fetch("https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=pMZVPqg7vM3CW3fM&q=music&where=" + this.state.coords.lat + "," + this.state.coords.lng + "&within=25&page_size=5")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        events: result.events
                    })
                }
            )
    }

    getApis = (event) => {
        event.preventDefault()

        this.setState({
            isClicked: true
        })

        this.handleFormSubmit();
        this.getCityDesc();
    }

    render() {
        if (!this.state.isClicked) {
            return (
                <MuiThemeProvider>
                    <div>
                        <SimpleForm
                            address={this.state.address}
                            getApis={this.getApis}
                            onChange={this.onChange}
                        />
                        <p style={{display: this.state.isError ? 'block' : 'none'}}>City not found!</p>
                        <StarterScreen/>
                    </div>
                </MuiThemeProvider>
            )
        }

        if (this.state.isClicked) {
            return (
                <MuiThemeProvider>
                    <div>
                        <SimpleForm
                            address={this.state.address}
                            getApis={this.getApis}
                            onChange={this.onChange}
                        />
                        <p style={{display: this.state.isError ? 'block' : 'none'}}>City not found!</p>
                        <WeatherWindow
                            coords={this.state.coords}
                        />
                        <DescWindow
                            city={this.state.city}
                        />
                        <EventsWindow>
                            {
                                Object
                                .keys(this.state.events.event)
                                .map(key => <Event key={key} details={this.state.events.event[key]}/>)
                            }
                        </EventsWindow>
                    </div>
                </MuiThemeProvider>
            );
        }
    }
}

export default App;
