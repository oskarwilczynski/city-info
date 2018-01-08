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
    componentWillReceiveProps(nextProps) {
        const darkSky = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3ebf0a35b462ec06a8299fc803dfe539/" + nextProps.coords.lat + "," + nextProps.coords.lng

        if( nextProps.coords !== this.props.coords ) {
            fetch(darkSky)
                .then(res => res.json())
        }
    }

    render() {
        return (
            <StyledCard>
            </StyledCard>
        )
    }
}

export default WeatherWindow;