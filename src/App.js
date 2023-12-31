import React, { useState, useRef } from "react";
import Search from "./components/search/Search";
import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Maps from "./components/maps/Maps";
import Forecast from "./components/daysdetails/daysdetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  const [selectedPlace, setSelectedPlace] = useState("");
  const searchInputRef = useRef(null);
  const Wdetails = null;

  const handlePlaceChanged = (place) => {
    setSelectedPlace(place);
  };

  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <Search
          onPlaceChangedCallback={handlePlaceChanged}
          searchInputRef={searchInputRef}
        />
       
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: "100px",
            marginBottom: "40px",
          }}
        >
          <CurrentWeather selectedPlace={selectedPlace} />
          {selectedPlace && (
            <div className="map-container">
              <iframe
                title={`Map of ${Wdetails}`}
                width="100%"
                height="400"
                frameBorder="0"
                src={`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=30&lon=-20&=5&${
                  Wdetails ? `q=${Wdetails}` : ""
                }`}
              />
            </div>
          )}
        </div>
        <Forecast selectedPlace={selectedPlace} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
