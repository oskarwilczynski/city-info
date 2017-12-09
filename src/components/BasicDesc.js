import React from 'react';
import styled, { css } from 'styled-components';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const StyledCard = styled(Card)`
    margin-top: 3vw;
    width: 60%;
`


class BasicDesc extends React.Component {
    render() {
        return (
            <StyledCard>
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                />
                <CardMedia
                    overlay={
                        <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
                    }
                >
                    <img src="https://wallpapercave.com/wp/zNAxsEP.jpg" alt="" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </StyledCard>
        )
    }
}

export default BasicDesc;