import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

// Express setup, including JSON body parsing.
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Tells express to add the "Access-Control-Allow-Origin" header to allow requests from anywhere.
app.use(cors())

// Connect to MongoDB, on the "ai-investment-percentages-api" database. If the db doesn't exist, mongo will create it.
mongoose.connect("mongodb://localhost/ai-investment-percentages-api", { useMongoClient: true })
// mongoose.connect("mongodb://localhost/products-api", { useMongoClient: true })

// This makes mongo use ES6 promises, instead of its own implementation
mongoose.Promise = Promise

// Log when mongo connects, or encounters errors when trying to connect.
mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

// This is the beginning of a model for the AiInvestmentTech object.
const AiInvestmentTech = mongoose.model("AiInvestmentTech", {
  name: String,
  percentage: Number,
  percentagelabel: String
})


app.get("/", (req, res) => {
  res.send("AI investment percentages API")
})

// Endpoint to create a AiInvestmentTech object. Send a POST to /ai-investment-percentages with a JSON body
// with the keys and values you want to persist in the database.
app.post("/ai-investment-percentages", (req, res) => {
  const aiInvestmentTech = new AiInvestmentTech(req.body)

  aiInvestmentTech.save()
    .then(() => { res.status(201).send("AiInvestmentTech object created") })
    .catch(err => { res.status(400).send(err) })
})

// This is the beginning of the second model: the BusinessAdoption object.
const BusinessAdoption = mongoose.model("BusinessAdoption", {
  name: String,
  percentage: Number,
  percentagelabel: String
})


app.get("/", (req, res) => {
  res.send("AI Business adoption percentages API")
})

// Endpoint to create the BusinessAdoption object. Send a POST to /business-adoption-percentages with a JSON body
// with the keys and values you want to persist in the database.
app.post("/business-adoption-percentages", (req, res) => {
  const businessAdoption = new BusinessAdoption(req.body)

  businessAdoption.save()
    .then(() => { res.status(201).send("Business adoption rate object created") })
    .catch(err => { res.status(400).send(err) })
})

// This is the beginning of the third model: the InvestedDollars object.
const InvestedDollars = mongoose.model("InvestedDollars", {
  name: String,
  max: Number,
  maxlabel: String,
  min: Number,
  minlabel: String
})


app.get("/", (req, res) => {
  res.send("AI investment dollar amounts per continent API")
})

// Endpoint to create the InvestedDollars object. Send a POST to /invested-dollars with a JSON body
// with the keys and values you want to persist in the database.
app.post("/invested-dollars", (req, res) => {
  const investedDollars = new InvestedDollars(req.body)

  investedDollars.save()
    .then(() => { res.status(201).send("Invested dollars object created") })
    .catch(err => { res.status(400).send(err) })
})

app.listen(8080, () => console.log("AI investment APIs' listening on port 8080!"))
