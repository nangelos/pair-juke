'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Goats from './Main';

console.log('Hello React');

// function App() {
//   return (
//     <div>
//       <h1>HELLO WORLD</h1>
//     </div>
//   );
// }

ReactDOM.render(
  <Goats />,
  document.getElementById('app')
);
