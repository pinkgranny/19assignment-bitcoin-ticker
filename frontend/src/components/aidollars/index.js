import React from "react"
import { ReactD3, BarChart, Chart, Axis, Bar } from "react-d3-components"

export default class Dollars extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     data: [{
  //   label: 'somethingB',
  //   values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
  //   },
  //   {
  //   label: 'somethingC',
  //   values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
  //   }]
  //   }
  // }

  data =[{
        label: 'Max',
        values: [{x: 'North America', y: 23}, {x: 'Asia', y: 12}, {x: 'Europe', y: 4}]
        },
        {
        label: 'Min',
        values: [{x: 'North America', y: 15}, {x: 'Asia', y: 8}, {x: 'Europe', y: 3}]
        }]

  // data= [{
  //   label: "SomethingA",
  //   values: [{ x: "SomethingA", y: 10 }, { x: "SomethingB", y: 4 }, { x: "SomethingC", y: 3 }]
  // }]


  // data= [{
  //     label: {this.props.name},
  //     values: [{ x: {this.props.name}, y: 'max' }, { x: 'name', y: 'max' }]
  //   }]



render() {
    return (
      <div className="dollar-item-holder">
        {/* <h3>{this.props.name}</h3> */}
        <h3></h3>
        <BarChart
          groupedBars
          data= {this.data}
          // data={this.data}
          width={400}
          height={400}
          margin={{
            top: 10,
            bottom: 50,
            left: 50,
            right: 10
          }} />
          {/* <h3>{this.props.name}</h3>
          <li>{this.props.max}</li>
          <li>{this.props.maxlabel}</li>
          <li>{this.props.min}</li>
          <li>{this.props.minlabel}</li> */}
      </div>
    )
  }
}




// BarChart= ReactD3.BarChart
//   let data = [{
//     label: "somethingA",
//     values: [{x: "SomethingA", y: 10}, {x: "SomethingB", y: 4}, {x: "SomethingC", y: 3}]
// }]
