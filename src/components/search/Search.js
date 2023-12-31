import React, { useRef, useEffect } from 'react';

const Search = ({ onPlaceChangedCallback, searchInputRef }) => {
  const autocompleteRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA9l9LOLQEsjKAS2fnMHCZA6bvTZgb3jSI&libraries=places&callback=initAutocomplete`;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      initAutocomplete();
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [onPlaceChangedCallback]);

  const initAutocomplete = () => {
    autocompleteRef.current = new window.google.maps.places.Autocomplete(
      searchInputRef.current,
      {
        types: ['geocode', 'establishment'],
      }
    );

    autocompleteRef.current.addListener('place_changed', onPlaceChanged);
  };

  const onPlaceChanged = () => {
    const inputElement = searchInputRef.current;
    const place = autocompleteRef.current.getPlace();

    if (!place.geometry) {
      if (inputElement) {
        inputElement.placeholder = 'Enter place';
      }
    } else {
      onPlaceChangedCallback(place.name);
      if (inputElement) {
        inputElement.value = place.name;
      }
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <input
        type="text"
        id="autocomplete"
        placeholder="Enter a place"
        style={{
          padding: '15px',
          width: '700px',
          marginBottom: '15px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
        }}
        ref={searchInputRef}
      />
    </div>
  );
};

export default Search;
