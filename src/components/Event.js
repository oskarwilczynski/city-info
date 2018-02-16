import React from 'react';
import styled, { css } from 'styled-components';

const StyledDiv = styled.div`
    && {
        cursor: pointer;
    }
`

const StyledImg = styled.img`
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
                <StyledImg src={this.props.details.image ? this.props.details.image.medium.url : imagePlaceholder} />
                <h3>{this.props.details.title}</h3>
                <p>{this.props.details.venue_name}</p>
            </StyledDiv>
        )
    }
}

export default Event;