import React from "react"

export default class Pie extends React.Component {

  constructor() {
    super(props)
    this.state = {
    }
  }

  arcGenerator(d, i) {
    return (
    )
  }

  render() {
      let pie = this.pie(this.props.data),
        translate = `translate(${this.props.x}, ${this.props.y})`
    return (
      <div>

      </div>
    )
  }
}
