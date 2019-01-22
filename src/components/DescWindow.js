import React from 'react';
import styled from 'styled-components';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const StyledCard = styled(Card)`
    && {
        margin-top: 3vw;
        margin-bottom: 1vw;
        width: 58%;
        float: left;
    }
`

class DescWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: []
        };
    }

    getCityDesc = async (url, id) => {
        try {
            const response = await fetch(url, {signal: this.props.fetchSignal});

            if (!response.ok) {
                throw Error(response.statusText);
            }

            const result = await response.json();

            this.setState({ 
                city: {
                    title: result.query.pages[id].title,
                    description: result.query.pages[id].extract
                }
            });
        } catch(error) {
            this.props.handleError(error);
        }
    }

    getCityImg = async (url, id) => {
        try {
            const response = await fetch(url, {signal: this.props.fetchSignal});

            if (!response.ok) {
                throw Error(response.statusText);
            }

            const result = await response.json();

            this.setState({ 
                city: {
                    ...this.state.city,
                    image: result.query.pages[id].original.source
                }
            });
        } catch(error) {
            this.props.handleError(error);
        }
    }

    getDescData = async () => {
        try {
            const response = await fetch(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&list=search&utf8=&srsearch=${this.props.address}`, {signal: this.fetchSignal});
    
            if (!response.ok) {
                throw Error(response.statusText);
            }
    
            const result = await response.json();
            const id = result.query.search[0].pageid;
    
            await this.getCityDesc(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro=&pageids=${id}`, id);
            this.getCityImg(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=pageimages&&piprop=original&titles=${this.state.city.title}`, id);
        } catch(error) {
            this.props.handleError(error);
        }
    }

    componentDidMount() {
        this.getDescData()
    }

    componentDidUpdate(prevProps) {
        if (this.props.address !== prevProps.address) {
            this.getDescData()
        }
    }

    render() {
        const city = this.state.city.description;

        function createMarkup() {
            return {__html: city};
        }

        return (
            <StyledCard>
                <CardMedia
                    overlay={
                        <CardTitle title={this.state.city.title}/>
                    }
                >
                    <img src={this.state.city.image} alt="" />
                </CardMedia>
                <CardText dangerouslySetInnerHTML={createMarkup()}>
                </CardText>
            </StyledCard>
        )
    }
}

export default DescWindow;