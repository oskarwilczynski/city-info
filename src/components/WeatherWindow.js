import React from 'react';
import styled, { css } from 'styled-components';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const StyledCard = styled(Card)`
    && {
        margin-top: 3vw;
        height: 15vw;
        width: 40%;
        float: right;
    }
`


class WeatherWindow extends React.Component {
    render() {
        return (
            <StyledCard>
            </StyledCard>
        )
    }
}

export default WeatherWindow;