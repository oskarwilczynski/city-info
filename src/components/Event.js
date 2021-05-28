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

const Event = () => {
    const imagePlaceholder = "http://icons.iconarchive.com/icons/icons8/windows-8/128/City-No-Camera-icon.png"

    const onClickEvent = () => {
        window.open(details.url);
    }

    return (
        <StyledDiv onClick={() => onClickEvent()}>
            <StyledImg src={details.image ? details.image.url : imagePlaceholder} />
            <StyledTitle>{details.title}</StyledTitle>
            <StyledVenue>{details.venue_name}</StyledVenue>
        </StyledDiv>
    )
}

export default Event;