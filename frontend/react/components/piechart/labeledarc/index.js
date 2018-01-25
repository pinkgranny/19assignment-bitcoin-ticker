import React from "react"
import Arc from "./../arc"
// import LabeledArc from "./arc"
// import PieChart from "react-d3-basic"

export default class LabeledArc extends Arc.Component {
  render() {
    const [labelX, labelY] = this.arc.centroid(this.props.data),
    labelTranslate = `translate(${labelX}, ${labelY})`
    return (
      <g>
        {super.render()}
        <text
          transform={labelTranslate}
          textAnchor="middle">
          {this.props.data.data.label}
        </text>
      </g>
    )
  }
}
