import React from 'react';
import styled, { css } from 'styled-components';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


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
        this.getCityDesc = this.getCityDesc.bind(this);

        this.state = {
            error: null,
            isLoaded: false,
            city: {}
        };
    }

    getCityDesc = () => {
        const wikiApiPageId = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&list=search&utf8=&srsearch=" + this.props.address

        return fetch(wikiApiPageId)
            .then(res => res.json())
            .then(
                (result) => {
                    const wikiApiCityDesc = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro=&explaintext=&pageids=" + result.query.search[0].pageid
                    
                    return fetch(wikiApiCityDesc)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                this.setState({
                                    isLoaded: true,
                                    city: {
                                        description: result
                                    }
                                });
                            }
                        )
                }
            );
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.address !== this.props.address) {
            this.getCityDesc()      
        }
    }

    render() {
        const city = this.props.city.description;

        function createMarkup() {
            return {__html: city};
        }

        return (
            <StyledCard>
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                />
                <CardMedia
                    overlay={
                        <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
                    }
                >
                    <img src="https://wallpapercave.com/wp/zNAxsEP.jpg" alt="" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText dangerouslySetInnerHTML={createMarkup()}>
                </CardText>
            </StyledCard>
        )
    }
}

export default DescWindow;