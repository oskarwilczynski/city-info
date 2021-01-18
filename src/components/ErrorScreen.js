import React from 'react';
import styled from 'styled-components';

import { ThemeProvider } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

const ErrorCard = styled(Card)`
    && {
        margin: 0 auto;
        padding: 1vw;
        width: 80%;
    }
`

const ErrorTitle = styled.h1`
    font-size: 4vw;
    letter-spacing: 0.3vw;
    text-align: center;
`;

const ErrorText = styled.p`
    font-size: 1.75vw;
    text-align: center;
`;

class ErrorScreen extends React.Component {
    render() {
        return (
            <ThemeProvider>
                <ErrorCard>
                    <ErrorTitle>Error! API fetch failed.</ErrorTitle>
                    <ErrorText>Please try once again or choose other city.</ErrorText>            
                </ErrorCard>
            </ThemeProvider>
        )
    }
}

export default ErrorScreen;