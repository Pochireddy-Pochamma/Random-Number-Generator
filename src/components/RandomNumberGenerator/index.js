// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {initialValue: 0}

  onGenNum = () => {
    this.setState(prevState => ({
      initialValue: Math.ceil(Math.random(prevState.initialValue) * 100),
    }))
  }

  render() {
    const {initialValue} = this.state
    return (
      <div className="app-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onGenNum}>
            Generate
          </button>
          <p className="num">{initialValue}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
