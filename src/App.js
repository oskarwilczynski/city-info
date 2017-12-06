import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SearchBar from 'material-ui-search-bar';
import './App.css';
import styled, { css } from 'styled-components';

injectTapEventPlugin();

const StartTitle = styled.h1`
    color: grey;
    font-size: 4vw;
    letter-spacing: 0.3vw;
    text-align: center;
`;

class App extends Component {
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
                            marginTop: '1%'
                        }}
                    />
                    <StartTitle className="h1-starter">Just search for the city...</StartTitle>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
