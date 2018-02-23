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
    position: relative;
`

const StyledBtn = styled.button`
    position: absolute;
    font-size: 4vw;
    right: 0.25vw;
    top: 0.5vw;
    z-index: 1100;
    border: none;
    background: white;

    &:hover {
      background-color: #37C88D;
      color: #fff;
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
            zIndex: '1093',
        },
        input: {
            flexGrow: '2',
            width: '100%',
            height: '3vw',
            fontSize: '3vw',
            padding: '15px'
        },
        autocompleteContainer: { },
        autocompleteItem: { },
        autocompleteItemActive: { }
    }

    return (
        <StyledForm onSubmit={this.props.getApis}>
            <StyledDiv>
                <PlacesAutocomplete 
                    inputProps={inputProps}
                    styles={myStyles}
                />
                <StyledBtn type="submit">
                    <i className="fas fa-search"></i>
                </StyledBtn>
            </StyledDiv>
        </StyledForm>
    )
  }
}

export default SimpleForm