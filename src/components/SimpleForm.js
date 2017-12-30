import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import styled, { css } from 'styled-components';

const StyledForm = styled.form`
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
`

const StyledDiv = styled.div`
    display: block;
    text-align: center;
    width: 100%;
`

class SimpleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: 'San Francisco, CA' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    const myStyles = {
        root: { 
            zIndex: '1093',
        },
        input: { 
            display: 'inline',
            width: '75%',
        },
        autocompleteContainer: { 
            backgroundColor: 'green',
        },
        autocompleteItem: { },
        autocompleteItemActive: { }
    }

    return (
        <StyledDiv>
            <StyledForm onSubmit={this.handleFormSubmit}>
                <PlacesAutocomplete 
                    inputProps={inputProps}
                    styles={myStyles}
                />
                <button style={{verticalAlign: 'middle'}} type="submit">Submit</button>
            </StyledForm>
        </StyledDiv>
    )
  }
}

export default SimpleForm