import React from 'react';
import Skycons from 'react-skycons';
import styled from 'styled-components';
import Card from 'material-ui/Card';


const StyledCard = styled(Card)`
    && {
        margin-top: 3vw;
        width: 40%;
        float: right;
    }
`

const StyledFlebox = styled.div`
    display: flex;
    margin-top: 1vw;
    margin-bottom: 1vw;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
`

const StyledTemp = styled.p`
    font-size: 5vw;
    margin: 0;
`

const StyledSkycons = styled(Skycons)`
    && {
        width: 40% !important;
        height: 40% !important;
    }
`

class WeatherWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weather: {}
        };
    }

    getWeather = async (url) => {
        try {
            const response = await fetch(url, {signal: this.props.fetchSignal});

            if (!response.ok) {
                throw Error(response.statusText);
            }

            const result = await response.json();

            this.setState({
                weather: {
                    temperature: Math.round(result.currently.temperature) + "\xB0C",
                    summary: result.currently.summary,
                    icon: result.currently.icon.replace(/-/g, "_").toUpperCase()
                }
            });
        } catch(error) {
            this.props.handleError(error);
        }
    }

    componentDidMount() {
        let darkSky = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3ebf0a35b462ec06a8299fc803dfe539/${this.props.coords.lat},${this.props.coords.lng}?units=si&exclude=minutely,hourly,daily,alerts,flags`

        this.getWeather(darkSky);
    }

    componentDidUpdate(prevProps) {
        if (this.props.coords !== prevProps.coords) {
            let darkSky = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3ebf0a35b462ec06a8299fc803dfe539/${this.props.coords.lat},${this.props.coords.lng}?units=si&exclude=minutely,hourly,daily,alerts,flags`

            this.getWeather(darkSky);
        }
    }

    render() {
        return (
            <StyledCard>
                <StyledFlebox>
                    <StyledTemp>{this.state.weather.temperature}</StyledTemp>
                    <StyledSkycons 
                        icon={this.state.weather.icon}
                    />
                </StyledFlebox>
            </StyledCard>
        )
    }
}

export default WeatherWindow;