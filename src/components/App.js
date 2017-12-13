import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import styled, { css } from 'styled-components';

import SearchBar from 'material-ui-search-bar';
import StarterScreen from './StarterScreen';
import DescWindow from './DescWindow';
import WeatherWindow from './WeatherWindow';
import EventsWindow from './EventsWindow';

injectTapEventPlugin();

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            city: {}
        };
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <SearchBar
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                        style={{
                            margin: '0 auto',
                            maxWidth: '90%',
                            marginTop: '2vw'
                        }}
                    />
                    <StarterScreen/>
                    <WeatherWindow/>
                    <DescWindow/>
                    <EventsWindow/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
