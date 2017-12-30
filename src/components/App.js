import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import styled, { css } from 'styled-components';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';

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

        this.state = {
            error: null,
            isLoaded: false,
            city: [],
            weather: []
        };
    }

    componentDidMount() {
        const darkSky = "https://cors.io/?https://api.darksky.net/forecast/3ebf0a35b462ec06a8299fc803dfe539/53.801277,-1.548567"
        const wikiApi = "https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&exintro&titles=Leeds&format=json"

        fetch(darkSky)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        weather: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

        fetch(wikiApi)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        city: result.query.pages["8262427"].extract
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <SimpleForm/>
                    <StarterScreen/>
                    <WeatherWindow/>
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
