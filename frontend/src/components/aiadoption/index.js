import React from "react"
import { color } from "d3-color"
import { interpolateRgb } from "d3-interpolate"
import LiquidFillGauge from "react-liquid-gauge"
// import style from "./style.css"

export default class AiAdoption extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.percentage
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ value: nextProps.percentage })
    }
  }

  startColor = "#2976b4"; // cornflowerblue
  endColor = "#dc14b1" // crimson

  // <div className="ai-adoption-item-holder">
  //   <h3>{this.props.name}</h3>
  //   <li>{this.props.percentage}</li>
  //   <li>{this.props.percentagelabel}</li>
  // </div>

  render() {
    const radius = 100
    const interpolate = interpolateRgb(this.startColor, this.endColor)
    const fillColor = interpolate(this.state.value / 1000)
    const gradientStops = [
      {
        key: "0%",
        stopColor: color(fillColor).darker(0.05).toString(),
        stopOpacity: 1,
        offset: "0%"
      },
      {
        key: "50%",
        stopColor: fillColor,
        stopOpacity: 0.75,
        offset: "50%"
      },
      {
        key: "99%",
        stopColor: color(fillColor).brighter(0.05).toString(),
        stopOpacity: 0.5,
        offset: "99%"
      },
      {
        key: "100%",
        stopColor: fillColor,
        stopOpacity: 0,
        offset: "100%"
      }
    ]

    return (
      <div className="liquid-gauge">
        <LiquidFillGauge
          style={{ margin: "0 auto" }}
          width={radius * 2}
          height={radius * 2}
          value={this.state.value}
          percent="%"
          textSize={1}
          textOffsetX={0}
          textOffsetY={0}
          textRenderer={props => {
            // const value = Math.round(this.state.value)
            const localradius = Math.min(props.height / 2, props.width / 2)
            const textPixels = ((props.textSize * localradius) / 2)
            const valueStyle = {
              fontSize: textPixels
            }
            const percentStyle = {
              fontSize: textPixels * 0.6
            }

            return (
              <tspan>
                <tspan className="value" style={valueStyle}>{Math.round(this.state.value)}</tspan>
                <tspan style={percentStyle}>{props.percent}</tspan>
              </tspan>
            )
          }}
          riseAnimation
          waveAnimation
          waveFrequency={1}
          waveAmplitude={3}
          gradient
          gradientStops={gradientStops}
          circleStyle={{
            fill: fillColor
          }}
          waveStyle={{
            fill: fillColor
          }}
          textStyle={{
            fill: color("#2976b4").toString(),
            fontFamily: "Dosis"
          }}
          waveTextStyle={{
            fill: color("#fff").toString(),
            fontFamily: "Dosis"
          }} />
        <h3>{this.props.name} </h3>
      </div>
    )
  }
}
