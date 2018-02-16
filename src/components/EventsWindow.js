import React from 'react';
import styled, { css } from 'styled-components';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const StyledCard = styled(Card)`
    && {
        margin-top: 3vw;
        width: 40%;
        float: right;
    }
`


class EventsWindow extends React.Component {
    render() {
        return (
            <StyledCard>
                {
                    Object
                    .keys(this.props.events.event)
                    .map(key => <div key={key}>{key}</div>)
                }
            </StyledCard>
        )
    }
}

export default EventsWindow;