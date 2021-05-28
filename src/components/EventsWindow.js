import styled from 'styled-components';
import Card from '@material-ui/core/Card';

import Event from './Event';
import ErrorWindow from './ErrorWindow';

const StyledCard = styled(Card)`
    && {
        margin-top: 3vw;
        width: 40%;
        float: right;
    }
`

const ErrorHeader = styled.h1`
  && {
    color: #982520;
    text-align: center;
  }
`

const EventsWindow = ({ events }) => (
    <StyledCard>
        {events.error ? 
            <ErrorWindow
                component="events"
                error={events.error}
            /> :
            !events.eventsArr.length ?
                <ErrorHeader align='center' variant="display2">
                    No events found.
                </ErrorHeader> :
                <>
                    {events.eventsArr.map(event => <Event key={event.id} details={event} />)}
                </>
        }
    </StyledCard>
)

export default EventsWindow;