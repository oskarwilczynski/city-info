import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import styled, { css } from 'styled-components';

const StyledForm = styled.form`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:row;
    padding:2px;
`

const StyledDiv = styled.div`
    display: block;
    text-align: center;
    width: 100%;
`

const StyledBtn = styled.button`
    
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
        input: {
            flexGrow: '2',
            width: '50vw',
            height: '3vw',
            fontSize: '3vw'
        },
        autocompleteContainer: { },
        autocompleteItem: { },
        autocompleteItemActive: { }
    }

    return (
        <StyledForm onSubmit={this.props.getApis}>
            <PlacesAutocomplete 
                inputProps={inputProps}
                styles={myStyles}
            />
            <button type="submit">Submit</button>
        </StyledForm>
    )
  }
}

export default SimpleForm