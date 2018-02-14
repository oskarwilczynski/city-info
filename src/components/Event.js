import React from 'react';
import styled, { css } from 'styled-components';

const StyledDiv = styled.div`
    && {
        height: 20%;
    }
`

class Event extends React.Component {
    render() {
        const imagePlaceholder = "https://www.makeupgeek.com/content/wp-content/themes/makeup-geek/images/placeholder-square.svg"

        return (
            <StyledDiv>
                <img src={this.props.details.image ? this.props.details.image.url : imagePlaceholder} />
                <h3>{this.props.details.title}</h3>
                <p>{this.props.details.venue_name}</p>
            </StyledDiv>
        )
    }
}

export default Event;