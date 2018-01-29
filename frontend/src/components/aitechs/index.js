import React from "react"
import { PieChart } from "react-d3-components"

export default class AiTechs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/ai-investment-percentages")
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json
        })
      })
  }

  preparePieData = () => (
    {
      label: "Ai technologies",
      values: this.state.data.slice(0).reverse().map(item => ({ // maps in reverse order
        x: `${item.name} ${item.percentagelabel}`, // ties together 2 strings with template literals
        y: item.percentage
      }))
    }
  )

  render() {
    return (
      <div className="ai-tech-item-holder">
        {this.state.data.length > 0 &&
          <PieChart
            data={this.preparePieData()}
            // data={this.data}
            width={750}
            height={400}
            margin={{
              top: 10,
              bottom: 10,
              left: 100,
              right: 100
            }}
            sort={null} />}
      </div>
    )
  }
}

{/* <h3>{this.props.name}</h3>
<li>{this.props.percentage}</li>
<li>{this.props.percentagelabel}</li> */}
