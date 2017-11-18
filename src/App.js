import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SearchBar from 'material-ui-search-bar';
import logo from './logo.svg';
import './App.css';

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
                    <h1 className="h1-starter">Just search for the city!</h1>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
