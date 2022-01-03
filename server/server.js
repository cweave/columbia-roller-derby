const express = require("express")
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
const routes = require("../routes")
require("dotenv").config()

const uri = `${process.env.GATSBY_CRD_DB_WRITE}`
console.log("process.env.NODE_ENV", process.env.NODE_ENV)
const host =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://columbia-roller-derby.netlify.app/"

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function run() {
  try {
    await client.connect()

    const app = express()
    console.log(host)
    app.use(
      cors({
        origin: host,
      })
    )

    app.use(express.json())
    app.use("/api", routes)

    app.listen(3001, () => {
      console.log("Server has started!")
    })
  } finally {
    await client.close()
  }
}

run().catch(console.dir)
