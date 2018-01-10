import React from 'react';
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

class WeatherWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            weather: {
                temperature: "",
                summary: ""
            }
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
                                temperature: result.currently.temperature,
                                summary: result.currently.summary
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
                <p>{this.state.weather.temperature}</p>
                <p>{this.state.weather.summary}</p>
            </StyledCard>
        )
    }
}

export default WeatherWindow;