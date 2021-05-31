import { useState } from 'react';
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';

const SearchField = ({ setAddress, setCoords }) => {
    let autocomplete;
    const [query, setQuery] = useState("");

    const handleSearchSubmit = () =>  {
        let addressObject = autocomplete.getPlace();
        let address = addressObject.formatted_address;
        
        setAddress(address);
        setCoords(prevState => ({
            ...prevState,
            lat: addressObject.geometry.location.lat(),
            lng: addressObject.geometry.location.lng()
        }));

        if (address) {
            setQuery(address);
        }
    }

    const handleScriptLoad = () => {
        const options = {
            types: ['(cities)'],
        };

        /*global google*/
        autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'),
            options,
        );

        autocomplete.addListener('place_changed', handleSearchSubmit);
    }

    return (
        <div>
            <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4S7a-WtPtr7UD7whHwe9nbsq6zpShc_U&libraries=places,geometry&language=en"          
                onLoad={handleScriptLoad}
            />        
            <SearchBar
                id="autocomplete"
                onRequestSearch={() => false}
                onChange={() => false}
                placeholder="" 
                hintText="Search City" 
                value={query}
                style={{
                    margin: '0 auto',
                    marginTop: '2vw',
                    maxWidth: 800,
                }}
            />
        </div>
    );
}

export default SearchField;