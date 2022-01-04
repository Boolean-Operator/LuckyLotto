import React from 'react';
import Lottery from './Lottery';
import LotteryHooks from './LotteryHooks';
import './App.css';

function App() {
  return (
    <div className="App">
        <Lottery />
        <Lottery title="Daily Pick Four" numBalls={4}/>
        <LotteryHooks/>
        <LotteryHooks title="Daily Pick Four" numBalls={4}/>
    </div>
  );
}

export default App;
