import React from "react"

export default class Dollars extends React.Component {
  render() {
    return (
      <div className="dollar-item-holder">
        <h3>{this.props.name}</h3>
        <li>{this.props.max}</li>
        <li>{this.props.maxlabel}</li>
        <li>{this.props.min}</li>
        <li>{this.props.minlabel}</li>
      </div>
    )
  }
}
