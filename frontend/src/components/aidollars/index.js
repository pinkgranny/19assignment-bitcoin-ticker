import React from "react"
import { ReactD3, BarChart } from "react-d3-components"

export default class Dollars extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [{
        label: "somethingA",
        values: [{x: "SomethingA", y: 10}, {x: "SomethingB", y: 4}, {x: "SomethingC", y: 3}]
      }]
      }
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps !== this.props) {
  //     this.setState({
  //       label: "somethingA",
  //       values: {
  //         x: "SomethingA"
  //         y: 10
  //       }
  //    })
  //   }
  // }

BarChart= ReactD3.BarChart
//   let data = [{
//     label: "somethingA",
//     values: [{x: "SomethingA", y: 10}, {x: "SomethingB", y: 4}, {x: "SomethingC", y: 3}]
// }]

render() {
  return (
    <div className="dollar-item-holder">
      <h3>{this.props.name}</h3>
      <BarChart
        data={data}
        width={400}
        height={400}
        margin={{
          top: 10,
          bottom: 50,
          left: 50,
          right: 10
        }} />
    </div>
  )
}
}

{/* <h3>{this.props.name}</h3>
<li>{this.props.max}</li>
<li>{this.props.maxlabel}</li>
<li>{this.props.min}</li>
<li>{this.props.minlabel}</li> */}
