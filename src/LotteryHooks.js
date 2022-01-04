import React, { useState } from 'react';
import LotteryBall from './LotteryBall';
import './Lottery.css'

function LotteryHooks(props) {
  let startArray = Array.from({length:props.numBalls})
  const [nums, setNums] = useState(startArray);
  const handleClick = () => {
    generateNumbers()
  }
  const generateNumbers = () => {
    let arr = []
    while (arr.length < props.numBalls) {
      let rando = Math.floor(Math.random() * props.maxNum) + 1;
      if (!arr.includes(rando)) arr.push(rando)
    }
    arr.sort((a, b) => a - b)
    setNums(arr)
  }
  return (
    <div className="Lottery">
      <h3 className="Lottery-Title">{props.title}</h3>
      <div className="Lottery-BallContainer">
        { nums.map(n => <LotteryBall num={n} />) }
      </div>
      <button className="Lottery-Button" onClick={handleClick}>Generate</button>
    </div>
  )
}
LotteryHooks.defaultProps = {
  title: 'Lotto',
  numBalls: 6,
  maxNum: 40
}
export default LotteryHooks;