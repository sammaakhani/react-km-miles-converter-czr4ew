import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Converter() {
  const [km, setKm] = useState(0);

  function targetValue(e) {
    setKm(e.target.value);
    return setKm;
  }

  function convertToMiles() {
    const miles = (km / 1.609).toFixed(2);
    return miles;
  }

  // output
  return (
    <div>
      <input type="text" id="inputbox" value={km} onChange={targetValue} />
      <p id="output">
        {' '}
        <b> {km}</b> Kilometers is <b> {convertToMiles(km)} </b> miles{' '}
      </p>
    </div>
  );
}

const el = <Converter />;
ReactDOM.render(el, document.getElementById('root'));

// function Converter() {
//   const [km, setKm] = useState(0);

//   function handleChange(e) {
//     setKm(e.target.value);
//   }
//   function convert(km) {
//     // return (km/1.609)
//     // taking 2 decimal places
//     return (km / 1.609).toFixed(2);
//   }

//   return (
//     <div>
//       <input type="text" value={km} onChange={handleChange} />
//       <p>
//         {' '}
//         {km} km is {convert(km)} miles{' '}
//       </p>
//     </div>
//   );
// }

// const el = <Converter />;
// ReactDOM.render(el, document.getElementById('root'));
