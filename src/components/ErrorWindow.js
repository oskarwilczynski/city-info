import React from 'react';
import styled from 'styled-components';

import { ThemeProvider } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

// const ErrorCard = styled(Card)`
//     margin: 0 auto;
//     padding: 1vw;
//     width: 80%;
// `

const ErrorTitle = styled.h1`
    font-size: 4vw;
    letter-spacing: 0.3vw;
    text-align: center;
`;

const ErrorText = styled.p`
    font-size: 1.75vw;
    text-align: center;
`;

const ErrorWindow = ({ component, error }) => (
    <div>
        <ErrorTitle>Error! API fetch failed for {component}.</ErrorTitle>
        <ErrorText>{error}</ErrorText>            
    </div>
)

export default ErrorWindow;