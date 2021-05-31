import styled from 'styled-components';
import sanitizeHtml from 'sanitize-html';
import { Card, CardMedia, CardHeader, CardContent } from '@material-ui/core';

import ErrorWindow from './ErrorWindow';

const StyledCard = styled(Card)`
    && {
        margin-top: 3vw;
        margin-bottom: 1vw;
        width: 58%;
        float: left;
        img {
            width: 100%;
        }
    }
`

const DescWindow = ({ city }) => {
    const createMarkup = () => {
        return { __html: sanitizeHtml(city.description) };
    }

    return (
        <StyledCard>
            {city.error ?
                <ErrorWindow
                    component="city description"
                    error={city.error}
                /> :
                <>
                    <CardMedia
                        overlay={
                            <CardHeader title={city.title}/>
                        }
                    >
                        <img src={city.image} alt={city.title} />
                    </CardMedia>
                    <CardContent dangerouslySetInnerHTML={createMarkup()} />
                </>
            }
        </StyledCard>
    )
}

export default DescWindow;