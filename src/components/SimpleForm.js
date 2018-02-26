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

const StyledBtn = styled.button`
    font-size: 4vw;
    color: #D3D3D3;
    z-index: 1100;
    border: none;
    background: white;
    text-align: center;
    &:hover {
      color: #A9A9A9;
      cursor: pointer;
`

class SimpleForm extends React.Component {

  render() {
    const inputProps = {
      value: this.props.address,
      onChange: this.props.onChange,
    }

    const myStyles = {
        root: { 
            zIndex: '1093'
        },
        input: {
            flexGrow: '2',
            width: '107%',
            height: '3vw',
            fontSize: '3vw',
            padding: '2vw'
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
            <StyledBtn type="submit">
                <i className="fas fa-search"></i>
            </StyledBtn>
        </StyledForm>
    )
  }
}

export default SimpleForm