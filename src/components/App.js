import React from 'react';
import '../application.scss';
import CarsIndex from '../containers/CarsIndex';
import GarageDetail from '../containers/GarageDetail';

const App = () => {
  return (
    <div className="home">
      <div className="left-scene">
        <GarageDetail />
      </div>
      <div className="right-scene">
        <CarsIndex />
      </div>
    </div>
  );
}

export default App;