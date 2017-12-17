import React from 'react';
import styled, { css } from 'styled-components';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const StyledCard = styled(Card)`
    && {
        margin-top: 3vw;
        margin-bottom: 1vw;
        width: 58%;
        float: left;
    }
`


class DescWindow extends React.Component {
    render() {
        const city = this.props.city;

        function createMarkup() {
            return {__html: city};
        }

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
                <CardText dangerouslySetInnerHTML={createMarkup()}>
                </CardText>
            </StyledCard>
        )
    }
}

export default DescWindow;