import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import styled, { css } from 'styled-components';

import SearchBar from 'material-ui-search-bar';
import StarterScreen from './StarterScreen';



injectTapEventPlugin();

const StarterTitle = styled.h1`
    color: grey;
    font-size: 4vw;
    letter-spacing: 0.3vw;
    text-align: center;
`;

class App extends React.Component {
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
                    <StarterScreen/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
