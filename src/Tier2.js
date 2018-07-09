import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  handleClick = () => {
    this.updateColor(getRandomColor())
  }

  updateColor = (newColor) => {
    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    })
  }

  componentWillReceiveProps = (nextProps) => {
    this.updateColor(nextProps.color)    
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleClick} className="tier2" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier3 color={this.state.childColor} />
        <Tier3 color={this.state.childColor} />
      </div>
    )
  }
}
