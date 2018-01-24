import React from 'react';
import Skycons from 'react-skycons';
import styled, { css } from 'styled-components';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


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

const StyledSummary = styled.p`
    font-size: 2vw;
    margin: 0;
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
                                temperature: Math.round(result.currently.temperature) + "\xB0C",
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