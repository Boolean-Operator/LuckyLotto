import React from 'react';
import './LotteryBall.css'

function LotteryBall(props) {
  return(
    <div className="LotteryBall-outerCircle">
      <div className="LotteryBall-innerCircle">
        {props.num}
      </div>
    </div>
  )

}

export default LotteryBall;