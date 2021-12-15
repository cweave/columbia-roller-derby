const router = require("express").Router()
const Rookie = require("./models/rookies")
const MongoClient = require("mongodb").MongoClient

router.get("/", (req, res) => {
  Rookie.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

router.post("/insert", (req, res) => {
  console.log("req.body", req.body.values, req.body)
  const data = req.body.formData ? req.body.formData : req.body
  const post = new Rookie(data)
  console.log("pooost", post)
  // const { name } = req.body
  // const myData = new Rookie({ name: req.body.name })
  //   console.log("myData", myData)
  post
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// router.get("/showall", async (req, res) => {
//   try {
//     const post = await Rookie.find({})
//     res.send(post)
//   } catch {
//     res.status(404)
//     res.send({ error: "Post doesn't exist!" })
//   }
// })

module.exports = router
