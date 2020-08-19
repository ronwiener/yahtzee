import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ['one', 'two', 'three', 'four', 'five', 'six' ],
  }
  constructor(props){
    super(props);
  }

  handleClick = () => {
    this.props.handleDieClick(this.props.idx)
  }

  render() {
    const { numberWords, val, locked, disabled , dieRoll } = this.props;
    let classes = `Die fas fa-dice-${numberWords[val-1]} fa-5x `;
    if(locked) classes +='Die-locked';
    if(dieRoll) classes += 'Die-rolling';
    return (
      <i
        className={classes}
        disabled = {disabled}
        onClick={this.handleClick}
      
      />
    );
  }
}

export default Die;
