import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import StarterScreen from './StarterScreen';
import DescWindow from './DescWindow';
import WeatherWindow from './WeatherWindow';
import SimpleForm from './SimpleForm';
import EventsWindow from './EventsWindow';
import ErrorScreen from './ErrorScreen';

class App extends React.Component {
    constructor(props) {
        super(props);

        const AbortController = window.AbortController;

        this.fetchController = new AbortController();
        this.fetchSignal = this.fetchController.signal;

        this.state = {
            isError: false,
            isClicked: false,
            address: '',
            coords: []
        };
    }

    setAddress = (address) => this.setState({ address });
    setCoords = (coords) => this.setState(coords);
    isClicked = (isClicked) => this.setState({ isClicked })

    handleError = (error) => {
        this.setState({ 
            isError: true
        });

        this.fetchController.abort();

        console.error('Error', error);
    }

    render() {
        if (!this.state.isClicked) {
            return (
                <MuiThemeProvider>
                    <div>
                        <SimpleForm
                            setAddress={this.setAddress}
                            setCoords={this.setCoords}
                            isClicked={this.isClicked}
                        />
                        <StarterScreen/>
                    </div>
                </MuiThemeProvider>
            )
        }

        if (this.state.isClicked && this.state.isError) {
            return (
                <MuiThemeProvider>
                    <div>
                        <SimpleForm
                            setAddress={this.setAddress}
                            setCoords={this.setCoords}
                            isClicked={this.isClicked}
                        />
                        <ErrorScreen/>
                    </div>
                </MuiThemeProvider>
            )
        } else {
            return (
                <MuiThemeProvider>
                    <div>
                        <SimpleForm
                            setAddress={this.setAddress}
                            setCoords={this.setCoords}
                            isClicked={this.isClicked}
                        />
                        <WeatherWindow
                            coords={this.state.coords}
                            handleError={this.handleError}
                            fetchSignal={this.fetchSignal}
                        />
                        <DescWindow
                            address={this.state.address}
                            handleError={this.handleError}
                            fetchSignal={this.fetchSignal}
                        />
                        <EventsWindow
                            coords={this.state.coords}
                            handleError={this.handleError}
                            fetchSignal={this.fetchSignal}
                        />
                    </div>
                </MuiThemeProvider>
            );
        }
    }
}

export default App;
