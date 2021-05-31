import styled from 'styled-components';

const StarterDiv = styled.div`
    padding-top: 8vw;
`;

const StarterTitle = styled.h1`
    color: grey;
    font-size: 4vw;
    letter-spacing: 0.3vw;
    text-align: center;
`;

const StarterText = styled.p`
    color: grey;
    font-size: 1.75vw;
    text-align: center;
`;

const StarterScreen = () => (
    <StarterDiv>
        <StarterTitle>Just search for the city...</StarterTitle>
        <StarterText>CityInfo is a simple React web app that lets you see the city information such as basic description, weather or live events.</StarterText>            
    </StarterDiv>
)

export default StarterScreen;