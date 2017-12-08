import React from 'react';
import styled, { css } from 'styled-components';

const StarterTitle = styled.h1`
    color: grey;
    font-size: 4vw;
    letter-spacing: 0.3vw;
    text-align: center;
`;

const StarterText = styled.p`
	color: grey;
	font-size: 2vw;
	text-align: center;
`;

class StarterScreen extends React.Component {
    render() {
		return (
            <div>
				<StarterTitle>Just search for the city...</StarterTitle>
				<StarterText>CityInfo is a simple React web app that lets you see the basic about your city such as weather or live events.</StarterText>            
			</div>
        )
    }
}

export default StarterScreen;