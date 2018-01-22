import React from "react"
import { LineChart, Line, Tooltip, YAxis, XAxis } from "recharts"
import openGdaxWebsocket from "../gdax-websocket"

class App extends React.Component {

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
      <LineChart width={600} height={400} data={this.state.tickerMessages}>

        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false} />
        <YAxis
          type="number"
          domain={["dataMin", "dataMax"]} />
        <XAxis />
        <Tooltip />
      </LineChart>
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

export default App
