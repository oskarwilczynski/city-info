import React from 'react';
import Skycons from 'react-skycons';
import styled, { css } from 'styled-components';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const StyledCard = styled(Card)`
    && {
        margin-top: 3vw;
        height: 10vw;
        width: 40%;
        float: right;
    }
`

const StyledTemp = styled.p`
    float: left;
`

const StyledSkycons = styled(Skycons)`
    && {
        width: 50% !important;
        height: 50% !important;
    }
`

const StyledSummary = styled.p`
    float: right;
`

class WeatherWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            weather: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        const darkSky = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3ebf0a35b462ec06a8299fc803dfe539/" + nextProps.coords.lat + "," + nextProps.coords.lng + "?units=si&exclude=minutely,hourly,daily,alerts,flags"

        if (nextProps.coords !== this.props.coords) {
            fetch(darkSky)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            weather: {
                                temperature: Math.round(result.currently.temperature),
                                summary: result.currently.summary,
                                icon: result.currently.icon.replace(/-/g, "_").toUpperCase()
                            }
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
    }

    render() {
        return (
            <StyledCard>
                <StyledTemp>{this.state.weather.temperature}</StyledTemp>
                <StyledSkycons 
                    icon={this.state.weather.icon}
                />
                <StyledSummary>{this.state.weather.summary}</StyledSummary>
            </StyledCard>
        )
    }
}

export default WeatherWindow;