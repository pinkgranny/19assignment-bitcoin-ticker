import React from "react"
import { PieChart } from "react-d3-components"

export default class AiTechs extends React.Component {

  data = {
    label: "Ai technologies",
    values: [{ x: "Machine learning 56%", y: 56 }, { x: "Natural language 7%", y: 7 }, { x: "Autonomous vehicles 6%", y: 6 }, { x: "Computer vision 28%", y: 28 }, { x: "Virtual assistants 3%", y: 3 }]
  }

  sort = null

  render() {
    return (
      <div className="ai-tech-item-holder">
        <PieChart
          data={this.data}
          width={700}
          height={400}
          margin={{
            top: 10,
            bottom: 10,
            left: 100,
            right: 100
          }}
          sort={this.sort} />
      </div>
    )
  }
}

{/* <h3>{this.props.name}</h3>
<li>{this.props.percentage}</li>
<li>{this.props.percentagelabel}</li> */}
