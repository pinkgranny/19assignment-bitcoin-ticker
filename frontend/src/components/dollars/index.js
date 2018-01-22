import React from "react"

export default class Dollars extends React.Component {
  render() {
    return (
      <div className="dollar-item-holder">
        <h3>{this.props.name}</h3>
        {this.props.max}
        {this.props.maxlabel}
        {this.props.min}
        {this.props.minlabel}
      </div>
    )
  }
}
