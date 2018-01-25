import React from "react"

export default class AiTechs extends React.Component {

  render() {
    return (
      <div className="ai-tech-item-holder">
        <h3>{this.props.name}</h3>
        <li>{this.props.percentage}</li>
        <li>{this.props.percentagelabel}</li>
      </div>
    )
  }
}
