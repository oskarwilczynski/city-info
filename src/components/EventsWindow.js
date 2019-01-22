import React from 'react';
import styled from 'styled-components';
import Card from 'material-ui/Card';

import Event from './Event';

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

class EventsWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: {
                event: []
            }
        };
    }

    getEvents = async (url) => {
        try {
            const response = await fetch(url, {signal: this.props.fetchSignal});
            
            if (!response.ok) {
                throw Error(response.statusText);
            }

            const result = await response.json();

            this.setState({ 
                events: result.events 
            });
        } catch(error) {
            this.props.handleError(error);
        }
    }

    componentDidMount() {
        let eventApi = `https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=pMZVPqg7vM3CW3fM&where=${this.props.coords.lat},${this.props.coords.lng}&within=25&page_size=5`

        this.getEvents(eventApi);
    }

    componentDidUpdate(prevProps) {
        if (this.props.coords !== prevProps.coords) {
            let eventApi = `https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=pMZVPqg7vM3CW3fM&where=${this.props.coords.lat},${this.props.coords.lng}&within=25&page_size=5`

            this.getEvents(eventApi);
        }
    }

    render() {
        if (this.state.events === null) {
            return (
                <StyledCard>
                    <ErrorHeader align='center' variant="display2">
                        No events found.
                    </ErrorHeader>
                </StyledCard>
            )
        } else {
            return (
                <StyledCard>
                    {
                        Object
                        .keys(this.state.events.event)
                        .map(key => <Event key={key} details={this.state.events.event[key]}/>)
                    }
                </StyledCard>
            )
        }
    }
}

export default EventsWindow;