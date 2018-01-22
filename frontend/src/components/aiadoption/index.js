import React from "react"

export default class AiAdoption extends React.Component {
  render() {
    return (
      <div className="ai-adoption-item-holder">
        <h3>{this.props.name}</h3>
        <li>{this.props.percentage}</li>
        <li>{this.props.percentagelabel}</li>
      </div>
    )
  }
}
