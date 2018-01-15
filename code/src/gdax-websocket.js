export default (subscriptionId, onDataReceivedCallback) => {
  const gdaxSocket = new WebSocket("wss://ws-feed.gdax.com")

  gdaxSocket.onopen = () => { // connect to websocket with this .onopen
    console.log("WebSocket opened")
    const message = JSON.stringify({
      type: "subscribe",
      channels: [{ name: "ticker", product_ids: [subscriptionId] }]
    })

    gdaxSocket.send(message)
  }

  gdaxSocket.onmessage = event => { //.onmessage is used to handle the messages theat we receive from the websocket
    const message = JSON.parse(event.data)

    if (message.type === "ticker") {
      onDataReceivedCallback(message)
    } else {
      // Unknown message type, just log it.
      console.log("Message received", message)
    }
  }

  return gdaxSocket
}
