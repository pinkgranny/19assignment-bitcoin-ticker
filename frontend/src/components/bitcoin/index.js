import React from "react"
import { HashRouter, Route, Link } from "react-router-dom"
import { LineChart, Line, Tooltip, YAxis, XAxis } from "recharts"
import openGdaxWebsocket from "./../../gdax-websocket"

export default class BitCoin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tickerMessages: []
    }
  }

  componentDidMount() {
    this.websocket = openGdaxWebsocket("BTC-EUR", this.handleNewTickerMessage)
  }

  componentWillUnmount() {
    this.websocket.close()
  }

  handleNewTickerMessage = newTickerMessage => {
    newTickerMessage.price = parseFloat(newTickerMessage.price, 10)
    // number needed as normally numbers are based on 10 and here on 16?
    this.setState(previousState => ({
      tickerMessages: previousState.tickerMessages.concat([newTickerMessage])
    }))
  }

  render() {
    return (
      <div className="graph-wrap">
        <h2>Bitcoin real time price ticker in Euros</h2>
        <LineChart width={600} height={400} data={this.state.tickerMessages}>

          <Line
            type="monotone"
            dataKey="price"
            stroke="#1a4f79"
            strokeWidth={2}
            dot={false} />
          <YAxis
            type="number"
            domain={["dataMin", "dataMax"]} />
          <XAxis />
          <Tooltip />
        </LineChart>
        <p>Note! You can get the exact Euro price by using the
           tooltip when you hover on top of the graph.
           The X-axis shows the number of bids since you opened your browser.
        </p>
        <div className="hide-footer" >
          <Link className="hide-btn" exact to="/">
            <h3>Hide the price tickers</h3>
          </Link>
        </div>
      </div>
    )
  }
  // render() {
  //   return (
  //     <div>
  //       {this.state.tickerMessages.map(msg => (
  //         // sequence is the id the GdaxWebsocket gives us
  //         <div key={msg.sequence}>
  //           {msg.time}: <strong>{msg.price} EUR</strong>
  //         </div>
  //       ))}
  //     </div>
  //   )
  // }

}
