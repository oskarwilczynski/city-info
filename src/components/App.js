import React, { useState } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import StarterScreen from './StarterScreen';
import DescWindow from './DescWindow';
import WeatherWindow from './WeatherWindow';
import SimpleForm from './SimpleForm';
import EventsWindow from './EventsWindow';
import ErrorScreen from './ErrorScreen';

const App = () => {
    const [isError, setIsError] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [address, setAddress] = useState('');
    const [coords, setCoords] = useState([]);

    const handleError = (error) => {
        setIsError(true);

        console.error('Error', error);
    }

    if (!isClicked) {
        return (
            <ThemeProvider>
                <div>
                    <SimpleForm
                        setAddress={setAddress}
                        setCoords={setCoords}
                        isClicked={setIsClicked}
                    />
                    <StarterScreen />
                </div>
            </ThemeProvider>
        )
    }

    if (isClicked && isError) {
        return (
            <ThemeProvider>
                <div>
                    <SimpleForm
                        setAddress={setAddress}
                        setCoords={setCoords}
                        isClicked={setIsClicked}
                    />
                    <ErrorScreen/>
                </div>
            </ThemeProvider>
        )
    } else {
        return (
            <ThemeProvider>
                <div>
                    <SimpleForm
                        setAddress={setAddress}
                        setCoords={setCoords}
                        isClicked={setIsClicked}
                    />
                    <WeatherWindow
                        coords={coords}
                        handleError={handleError}
                    />
                    <DescWindow
                        address={address}
                        handleError={handleError}
                    />
                    <EventsWindow
                        coords={coords}
                        handleError={handleError}
                    />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
