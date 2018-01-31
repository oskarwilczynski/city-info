import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import styled, { css } from 'styled-components';

const StyledForm = styled.form`
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
`

const StyledDiv = styled.div`
    display: block;
    text-align: center;
    width: 100%;
`

class SimpleForm extends React.Component {

  render() {
    const inputProps = {
      value: this.props.address,
      onChange: this.props.onChange,
    }

    const myStyles = {
        root: { 
            zIndex: '1093',
        },
        input: { },
        autocompleteContainer: { },
        autocompleteItem: { },
        autocompleteItemActive: { }
    }

    return (
        <StyledDiv>
            <StyledForm onSubmit={this.props.getApis}>
                <PlacesAutocomplete 
                    inputProps={inputProps}
                    styles={myStyles}
                />
                <button style={{}} type="submit">Submit</button>
            </StyledForm>
        </StyledDiv>
    )
  }
}

export default SimpleForm