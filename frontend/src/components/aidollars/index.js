import React from "react"
import { ReactD3, BarChart, Chart, Axis, Bar } from "react-d3-components"

export default class Dollars extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/invested-dollars")
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json
        })
      })
  }

  prepareGraphData = () => (
    [{
      label: "Max",
      values: this.state.data.map(item => ({
        x: item.name,
        y: item.max
      }))
    },
    {
      label: "Min",
      values: this.state.data.map(item => ({
        x: item.name,
        y: item.min
      }))
    }]
  )

  render() {
    return (
      <div className="dollar-item-holder">
        {/* <h3>{this.props.name}</h3> */}
        {this.state.data.length > 0 &&
          <BarChart
            // groupedBars
            data={this.prepareGraphData()}
            // data={this.data}
            width={400}
            height={400}
            margin={{
              top: 10,
              bottom: 50,
              left: 50,
              right: 10
            }} />}
      </div>
    )
  }
}

// BarChart= ReactD3.BarChart
//   let data = [{
//     label: "somethingA",
//     values: [{x: "SomethingA", y: 10}, {x: "SomethingB", y: 4}, {x: "SomethingC", y: 3}]
// }]
