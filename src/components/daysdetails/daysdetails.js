import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./daysdetails.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const getDayName = (timestamp) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(timestamp * 1000);
  const dayIndex = date.getDay();
  return days[dayIndex];
};

const Forecast = ({ selectedPlace }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  // Fetch the API
  const { data } = useQuery({
    queryKey: ["Weather by day"],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:8888/WEATHER-FORECAST-SERVICE/weather?address=${selectedPlace}`
      );
      const data = await response.data;
      console.log(data);
      return data;
    },
  });

  // Modify your component to group weather data by day and filter for the next 5 days
  const groupedData = {};
  data?.list?.forEach((entry) => {
    const date = new Date(entry.dt * 1000);
    const day = date.toLocaleDateString();

    if (!groupedData[day]) {
      groupedData[day] = entry;
    }
  });

  const nextFiveDays = Object.keys(groupedData).slice(0, 5);

  return (
    <>
  {/* <h3 style={{ margin: 'auto', textAlign: 'center' }}>Next 5 Days</h3>       */}
  <Accordion allowZeroExpanded>
        {nextFiveDays.map((day) => (
          <AccordionItem key={day}>
            <AccordionItemHeading>
              <AccordionItemButton>
                {groupedData[day] && (
                  <div className="daily-item">
                    <label className="day">
                      {getDayName(groupedData[day].dt)}
                    </label>
                    <img
                      src={`https://openweathermap.org/img/wn/${groupedData[day].weather[0].icon}@2x.png`}
                      className="icon-small"
                      alt="weather"
                    />
                    <label className="min-max">
                      {Math.floor(groupedData[day].main.temp)}°C
                    </label>
                    <div className="description">
                      <label>
                        Min: {Math.floor(groupedData[day].main.temp_min)}°C
                      </label>
                      <label>&nbsp;</label> {}
                      <label>
                        Max: {Math.floor(groupedData[day].main.temp_max)}°C
                      </label>
                    </div>
                  </div>
                )}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {groupedData[day] && (
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Pressure:</label>
                    <label>{groupedData[day].main.pressure} hPa</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Humidity:</label>
                    <label>{groupedData[day].main.humidity}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Clouds:</label>
                    <label>{groupedData[day].clouds.all}%</label>
                  </div>
                  
                  <div className="daily-details-grid-item">
                    <label>Sea level:</label>
                    <label>{groupedData[day].main.sea_level}m</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Feels like:</label>
                    <label>{groupedData[day].main.feels_like}°C</label>
                  </div>
                </div>
              )}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;