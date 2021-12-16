const express = require("express")
const gatsby = require("gatsby-plugin-nodejs");
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
const port = 3000
const routes = require("../routes")
const dbConfig = require("../config/database.config")
// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// // parse requests of content-type - application/json
// app.use(bodyParser.json())
// app.use(
//   cors({
//     /** Use this when web frontend / production **/
//     // origin: 'https://example.com',

//     /** Use this when local frontend / development **/
//     origin: "http://localhost:8000",
//   })
// )

// Configuring the database

mongoose.connect(dbConfig.url, { useNewUrlParser: true }).then(() => {
	const app = express()
	gatsby.prepare({ app }, () => {
		app.use(
			cors({
				/** Use this when web frontend / production **/
				// origin: 'https://example.com',

				/** Use this when local frontend / development **/
				origin: "http://localhost:8000",
			})
		)
		app.use(express.json()) // new
		app.use("/api", routes)
	})

	app.listen(3001, () => {
		console.log("Server has started!")
	})
})
