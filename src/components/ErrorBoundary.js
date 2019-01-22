import React from 'react';
import Card from 'material-ui/Card';
import styled from 'styled-components';

const ErrorHeader = styled.h1`
  && {
    color: #982520;
  }
`

// const StyledCard = styled(Card)`
//     && {
//         width: 40%;
//         float: ${props => props.float};
//     }
// `

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card>
          <ErrorHeader align='center' variant="display2">
            Oops! Something went wrong!
          </ErrorHeader>
        </Card>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;