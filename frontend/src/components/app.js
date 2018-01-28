import React from "react"
import BitCoin from "./bitcoin"
import Ethereum from "./ethereum"
import Dollars from "./aidollars"
import AiTechs from "./aitechs"
import AiAdoption from "./aiadoption"
// import williamBout from "images/williamBout.jpg"
// import Pie from "./piechart"

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
    fetch("http://localhost:8080/ai-investment-percentages").then(response => {
      // console.log(response.json())
      return response.json()
    }).then(json => {
      this.setState({
        aiInvestmentTechs: json
      })
    })
    fetch("http://localhost:8080/invested-dollars").then(response => {
      // console.log(response.json())
      return response.json()
    }).then(json => {
      this.setState({
        investedDollars: json
      })
    })
    fetch("http://localhost:8080/business-adoption-percentages").then(response => {
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
      <div className="background">
        <h2>Data visualisation of</h2>
        <h1>AI & Cryptocurrencies</h1>
        {/* <img src="/images/william-bout-264826.jpg" alt="" /> */}
        <div className="ai-tech-container">
          <h2>AI technologies invested in (2016)</h2>
          <AiTechs />
          {/* {this.state.aiInvestmentTechs.map(item => {
            return <AiTechs
              name={item.name}
              percentage={item.percentage}
              percentagelabel={item.percentagelabel} />
          })} */}
        </div>
        <div className="dollar-container">
          <h2>Dollars invested to AI in different continents</h2>
          <Dollars />
          {/* {this.state.investedDollars.map(item => {
            return <Dollars
              name={item.name}
              max={item.max}
              maxlabel={item.maxlabel}
              min={item.min}
              minlabel={item.minlabel} />
          })} */}
          <p>Investment range in billion dollars in 2016. (Source: McKinsey Global Institute)</p>
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
        {/* <BitCoin />
        <Ethereum /> */}

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
