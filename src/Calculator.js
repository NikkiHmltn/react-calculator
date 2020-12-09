import React, { Component } from 'react'
import "./calculator.css"
class Calculator extends Component {
 
  state = {
    num1: 0,
    num2: 0,
    total: null, 
    operator: "Select One"
  }
  
  setNum = (e, num) => {
    this.setState({ [num]: parseInt(e.target.value)});
}

  operator = (e) => {
    let type = e.target.value
    this.setState({operator: type})
  }

  // addNums =() => {
  // const newtotal = this.state.num1 + this.state.num2
  //  this.setState({
  //    total: newtotal
  //   })
  // }

  doMath = () => {
    let num1 = this.state.num1
    let num2 = this.state.num2
    let operators = this.state.operator

    if (operators === "+") {
      this.setState({total: num1 + num2})
    }
    if (operators === "-") {
      this.setState({total: num1 - num2})
    }
    if (operators === "*") {
      this.setState({total: num1 * num2})
    }
    if (operators === "/") {
      this.setState({total: num1 / num2})
    }
    if (operators === "Select One") {
      this.setState({total: "Please choose an operator!"})
    }
  }

  render(){
    return(
      <div className="container">
        <h1>React Calculator</h1>
 
        <div className="operations">
          <input type="number" name="num1" value={this.state.num1} onChange={(e)=>this.setNum(e, 'num1')} />
          <select onChange={this.operator}>
            <option>Select One</option>
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
          </select>


          <input type="number" name="num2" value={this.state.num2} onChange={(e)=>this.setNum(e, 'num2')}/>
          <button onClick={this.doMath}>=</button>
          <h3>{this.state.total}</h3>
        </div>
      </div>
    )
  }
}
 

export default Calculator;