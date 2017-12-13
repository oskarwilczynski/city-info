import React from 'react';
import styled, { css } from 'styled-components';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const StyledCard = styled(Card)`
    && {
        margin-top: 3vw;
        height: 31.70vw;
        width: 40%;
        float: right;
    }
`


class EventsWindow extends React.Component {
    render() {
        return (
            <StyledCard>
            </StyledCard>
        )
    }
}

export default EventsWindow;