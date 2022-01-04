import React, { Component } from 'react';
import LotteryBall from './LotteryBall';
import './Lottery.css'

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum : 40
  }
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls }) };
    this.handleClick = this.handleClick.bind(this);
  }
  generate() {
    let arr = []
    while( arr.length < this.props.numBalls) {
      let rando = Math.floor(Math.random() * this.props.maxNum)+1;
      if(!arr.includes(rando)) arr.push(rando)
    }
    arr.sort((a,b) => a-b)
    this.setState({nums: arr })
  }
  handleClick(){
    this.generate()
  }
  render() {
    return (
      <section className="Lottery">
        <h1 className="Lottery-Title">{this.props.title}</h1>
        <div className="Lottery-BallContainer">
          {this.state.nums.map(n => <LotteryBall num={n} />)}
        </div>
        <button className="Lottery-Button" onClick={this.handleClick}>Generate</button>
      </section>
    )
  }

}

export default Lottery;