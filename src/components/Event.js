import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    && {
        height: 20%;
        cursor: pointer;
    }
`

const StyledImg = styled.img`
    && {
        float: left;
        max-height: 48px;
        max-width: 48px;
        margin: 0.5vw;
    }
`

const StyledTitle = styled.h3`
    && {
    }
`

const StyledVenue = styled.p`
    && {
    }
`

class Event extends React.Component {
    onClickEvent = () => {
        window.open(this.props.details.url);
    }

    render() {
        const imagePlaceholder = "http://icons.iconarchive.com/icons/icons8/windows-8/128/City-No-Camera-icon.png"

        return (
            <StyledDiv onClick={() => {this.onClickEvent()}}>
                <StyledImg src={this.props.details.image ? this.props.details.image.url : imagePlaceholder} />
                <StyledTitle>{this.props.details.title}</StyledTitle>
                <StyledVenue>{this.props.details.venue_name}</StyledVenue>
            </StyledDiv>
        )
    }
}

export default Event;