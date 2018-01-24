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
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.onChange = (address) => this.setState({ address })

        this.state = {
            error: null,
            isLoaded: false,
            address: 'San Francisco, CA',
            coords: []
        };
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

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

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <SimpleForm
                        address={this.state.address}
                        handleFormSubmit={this.handleFormSubmit}
                        onChange={this.onChange}
                    />
                    <StarterScreen/>
                    <WeatherWindow
                        coords={this.state.coords}
                    />
                    <DescWindow
                        address={this.state.address}
                    />
                    <EventsWindow/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
