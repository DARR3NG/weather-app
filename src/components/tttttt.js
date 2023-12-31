// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import React from 'react';

// const Tttttt = () => {
//   const { data } = useQuery({
//     queryKey: ["Weather"],
//     queryFn: async () => {
//       const response = await axios.get("http://localhost:8888/WEATHER-SERVICE/weather?address=marrakech");
//       const data = await response.data;
//       console.log(data);
//       return data;
//     },
//   });

//   return (
//     <>
//       {data && (
//         <div key={data.weather[0].id}>
//           <h1>{data.weather[0].id}</h1>
//           <p>city: {data.weather[0].address}</p>
//           <p>Temperature: {data.main.temp}</p>
//           {/* Add more information as needed */}
//         </div>
//       )}
//     </>
//   );
// };

// export default Tttttt;



import React from 'react'

export const tttttt = () => {
  // Assuming timestamp is in seconds, multiply by 1000 for milliseconds
const timestamp = 1703862000 * 1000;
const date = new Date(timestamp);

// Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const dayOfWeek = date.getDay();

// Array of week days
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Get the name of the day
const dayName = weekDays[dayOfWeek];

console.log(dayName);

  return (
    <div>tttttt</div>
  )
}
export default tttttt
