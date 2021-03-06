import React from "react"
import BitCoin from "./bitcoin"
import Dollars from "./aidollars"
import AiTechs from "./aitechs"
import AiAdoption from "./aiadoption"
import Pie from "./piechart"

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      aiInvestmentTechs: [],
      businessAdoptions: [],
      investedDollars: []
    }
  }

  componentDidMount() {
    fetch("https://assignment-bitcoin-ticker.herokuapp.com/ai-investment-percentages").then(response => {
      // console.log(response.json())
      return response.json()
    }).then(json => {
      this.setState({
        aiInvestmentTechs: json
      })
    })
    fetch("https://assignment-bitcoin-ticker.herokuapp.com/invested-dollars").then(response => {
      // console.log(response.json())
      return response.json()
    }).then(json => {
      this.setState({
        investedDollars: json
      })
    })
    fetch("https://assignment-bitcoin-ticker.herokuapp.com/business-adoption-percentages").then(response => {
      // console.log(response.json())
      return response.json()
    }).then(json => {
      this.setState({
        businessAdoptions: json
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Data visualisation</h1>
        <div className="dollar-container">
          <h2>Dollars invested to AI in different continents (2016)</h2>
          {this.state.investedDollars.map(item => {
            return <Dollars
              name={item.name}
              max={item.max}
              maxlabel={item.maxlabel}
              min={item.min}
              minlabel={item.minlabel} />
          })}
        </div>
        <div className="ai-tech-container">
          <h2>AI technologies invested in (2016)</h2>
          {this.state.aiInvestmentTechs.map(item => {
            return <AiTechs
              name={item.name}
              percentage={item.percentage}
              percentagelabel={item.percentagelabel} />
          })}
        </div>
        <div className="ai-adoption-container">
          <h2>AI adoption levels in business (2016)</h2>
          {this.state.businessAdoptions.map(item => {
            return <AiAdoption
              name={item.name}
              percentage={item.percentage}
              percentagelabel={item.percentagelabel} />
          })}
        </div>
        {/* <BitCoin /> */}

      </div>
    )
  }

}

{/* <Pie
  x={100}
  y={100}
  outerRadius={100}
  innerRadius={50}
  data={[
    { value: 92 - 34, label: "Code lines" },
    {
      value: 34,
      label: "Empty lines"
    }
  ]} /> */}
