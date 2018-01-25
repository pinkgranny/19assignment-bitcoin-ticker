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

  // const AiTechs = ({x, y, innerRadius, outerRadius, data}) => {
  //   let pie = d3.layout.pie()
  //               .value((d) => d.value)(data),
  //       translate = `translate(${x}, ${y})`,
  //       colors = d3.scale.category10();

  render() {
    return (
      <div>
        <h1>Data visualisation</h1>
        <Pie
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
          ]} />
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

// const AiTechs = ({x, y, innerRadius, outerRadius, data}) => {
//   let pie = d3.layout.pie()
//               .value((d) => d.value)(data),
//       translate = `translate(${x}, ${y})`,
//       colors = d3.scale.category10();
