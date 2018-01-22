import React from "react"
import BitCoin from "./bitcoin"
import Dollars from "./dollars"

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // aiInvestmentTechs: [],
      // businessAdoptions: [],
      investedDollars: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/invested-dollars").then(response => {
      // console.log(response.json())
      return response.json()
    }).then(json => {
      this.setState({
        dollars: json
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Data visualisation</h1>
        <div className="dollar-container">
          {this.state.investedDollars.map(item => {
            return <Dollars
              name={item.name}
              max={item.max}
              maxlabel={item.maxlabel}
              min={item.min}
              minlabel={item.minlabel} />
          })}

        </div>
        <BitCoin />

      </div>
    )
  }

}
