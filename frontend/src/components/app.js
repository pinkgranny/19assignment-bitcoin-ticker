import React from "react"
import { HashRouter, Route, Link } from "react-router-dom"
import BitCoin from "./bitcoin"
import Ethereum from "./ethereum"
import Dollars from "./aidollars"
import AiTechs from "./aitechs"
import AiAdoption from "./aiadoption"

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      aiInvestmentTechs: [],
      businessAdoptions: [],
      investedDollars: []
    }
  }

  componentDidMount() {
    fetch("https://assignment-bitcoin-ticker.herokuapp.com/ai-investment-percentages").then(response => {
    // fetch("http://localhost:8080/ai-investment-percentages").then(response => {
      // console.log(response.json())
      return response.json()
    }).then(json => {
      this.setState({
        aiInvestmentTechs: json
      })
    })
    fetch("https://assignment-bitcoin-ticker.herokuapp.com/invested-dollars").then(response => {
    // fetch("http://localhost:8080/invested-dollars").then(response => {
      // console.log(response.json())
      return response.json()
    }).then(json => {
      this.setState({
        investedDollars: json
      })
    })
    fetch("https://assignment-bitcoin-ticker.herokuapp.com/business-adoption-percentages").then(response => {
    // fetch("http://localhost:8080/business-adoption-percentages").then(response => {
      // console.log(response.json())
      return response.json()
    }).then(json => {
      this.setState({
        businessAdoptions: json
      })
    })
  }

  render() {
    return (
      <HashRouter>

        <div className="background">
          <h2>Data visualisation of</h2>
          <h1>AI & Cryptocurrencies</h1>
          {/* <img src="/images/william-bout-264826.jpg" alt="" /> */}
          <div className="ai-tech-container">
            <h2>AI technologies invested in (2016)</h2>
            <AiTechs />
              {/* {this.state.aiInvestmentTechs.map(item => {
                return <AiTechs
                  name={item.name}
                  percentage={item.percentage}
                  percentagelabel={item.percentagelabel} />
              })} */}
          </div>
          <div className="dollar-container">
            <h2>Dollars invested to AI in different continents</h2>
            <div className="dollar-wrapper">
              <p>In 2016, AI investment in North America ranged from $15 billion to $23 billion,
                 Asia (mainly China) was $8 billion to $12 billion, and Europe lagged at $3 billion to
                   $4 billion. <br /><br />
                   Machine learning took 56% of the investments with computer vision second at 28%.
                   Natural language garnered 7%, autonomous vehicles was at 6%
                   and virtual assistants made up the rest. But despite the level of investment,
                   actual business adoption of AI remains limited, even among firms that know its
                   capabilities. Around 40% of firms are thinking about it, 40% experiment with it
                   and only 20% actually adopt AI in a few areas. <br /><br />
                <a href="http://amp.weforum.org/agenda/2017/11/artificial-intelligence-is-going-to-completely-change-your-life">
                       Source: Artificial intelligence is going to completely change your life
                </a>
              </p>
              <Dollars />
            </div>
              {/* {this.state.investedDollars.map(item => {
                return <Dollars
                  name={item.name}
                  max={item.max}
                  maxlabel={item.maxlabel}
                  min={item.min}
                  minlabel={item.minlabel} />
              })} */}
            <p>Investment range in billion dollars in 2016. (Source: McKinsey Global Institute)</p>
          </div>

          <div className="ai-adoption-container">
            <h2>AI adoption levels in business (2016)</h2><br /><br />
            {this.state.businessAdoptions.map(item => {
              return <AiAdoption
                name={item.name}
                percentage={item.percentage}
                percentagelabel={item.percentagelabel} />
            })}
          </div>
          <div className="cryptos">
            <h2>Cryptocurrencies</h2>
            <Link className="link link-box" to="/Bitcoin">
              <h3>See Bitcoin real time price ticker</h3>
            </Link>
            <Link className="link link-box" to="/Ethereum">
              <h3>See Ethereum real time price ticker</h3>
            </Link>
          </div>
          <div className="graph-container">
            <Route exact path="/Bitcoin" component={BitCoin} />
            <Route exact path="/Ethereum" component={Ethereum} />
            <div className="footer" />
          </div>
        </div>
      </HashRouter>
    )
  }

}


{/* <Route
  exact
  path="/Bitcoin"
  render={BitCoin} />
<Route
  exact
  path="/Ethereum"
  render={Ethereum} /> */}

{/* <Pie
  x={100}
  y={100}
  outerRadius={100}
  innerRadius={50}
  data={[
    { value: 92 - 34, label: "Code lines" },
    {
      value: 34,
      label: "Empty lines"
    }
  ]} /> */}
