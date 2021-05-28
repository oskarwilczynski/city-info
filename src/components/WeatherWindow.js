import Skycons from 'react-skycons';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

import ErrorWindow from './ErrorWindow';

const StyledCard = styled(Card)`
    && {
        margin-top: 3vw;
        width: 40%;
        float: right;
    }
`

const StyledFlebox = styled.div`
    display: flex;
    margin-top: 1vw;
    margin-bottom: 1vw;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
`

const StyledTemp = styled.p`
    font-size: 5vw;
    margin: 0;
`

const StyledSkycons = styled(Skycons)`
    && {
        width: 40% !important;
        height: 40% !important;
    }
`

const WeatherWindow  = ({ weather }) => (
    <StyledCard>
        {weather.error ?
            <ErrorWindow
                component="weather"
                error={weather.error}
            /> :
            <StyledFlebox>
                <StyledTemp>{weather.temperature}</StyledTemp>
                <StyledSkycons 
                    icon={weather.icon}
                />
            </StyledFlebox>
        }
    </StyledCard>
)

export default WeatherWindow;