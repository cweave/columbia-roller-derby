const express = require("express")
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
const routes = require("../routes")

const uri = process.env.GATSBY_CRD_DATABASE_NAME
const client = new MongoClient(`${uri}`, { useNewUrlParser: true })

client.connect((err) => {
  if (err) {
    throw err
  }
  const app = express()
  app.use(
    cors({
      origin: "http://localhost:8000",
    })
  )

  app.use(express.json())
  app.use("/api", routes)

  app.listen(3001, () => {
    console.log("Server has started!")
  })
})
