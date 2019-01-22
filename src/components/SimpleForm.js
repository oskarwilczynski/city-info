import React from 'react';
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';

class SimpleForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          query: ""
        };
    }

    handleSearchSubmit = () =>  {
        let addressObject = this.autocomplete.getPlace();
        let address = addressObject.formatted_address;
        
        this.props.setAddress(address);
        this.props.setCoords({
            coords: {
                lat: addressObject.geometry.location.lat(),
                lng: addressObject.geometry.location.lng()
            }
        });

        if (address) {
            this.setState(
                {
                    query: address
                }
            );
        }

        this.props.isClicked(true);
    }

    handleScriptLoad = () => {
        var options = {
            types: ['(cities)'],
        };

        /*global google*/
        this.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'),
            options,
        );

        this.autocomplete.addListener('place_changed', this.handleSearchSubmit);
    }

  render() {
    return (
        <div>
            <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4S7a-WtPtr7UD7whHwe9nbsq6zpShc_U&libraries=places,geometry&language=en"          
                onLoad={this.handleScriptLoad}
            />        
            <SearchBar 
                id="autocomplete"
                onRequestSearch={() => {return false;}}
                onChange={() => {return false;}}
                placeholder="" 
                hintText="Search City" 
                value={this.state.query}
                style={{
                    margin: '0 auto',
                    marginTop: '2vw',
                    maxWidth: 800
                }}
            />
        </div>
    );
  }
}

export default SimpleForm