const Mongoose = require("mongoose")
const Config = require("../config/env.config")

const MONGODB_URI = Config.mongoDbUri

Mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

const Schema = Mongoose.Schema
const rookiesSchema = new Schema({
  name: String,
  derby_name: String,
  email: String,
  phone: String,
  street_address: String,
  city: String,
  state: String,
  county: String,
  birthday: String,
  number: Number,
  zip_code: Number,
  member_status: String,
  yearly_waiver_status: String,
})

rookiesSchema.virtual("id").get(function () {
  return this._id.toHexString()
})

// Ensure virtual fields are serialised.
rookiesSchema.set("toJSON", {
  virtuals: true,
})

rookiesSchema.findById = function (cb) {
  return this.model("Rookies").find({ id: this.id }, cb)
}

const Rookies = Mongoose.model("repository", rookiesSchema)

exports.findById = (id) => {
  return Rookies.findById(id).then((result) => {
    if (result) {
      result = result.toJSON()
      delete result._id
      delete result.__v
      return result
    }
  })
}

exports.create = (rookiesData) => {
  const repository = new Rookies(rookiesData)
  return repository.save()
}

exports.list = () => {
  return new Promise((resolve, reject) => {
    Rookies.find().exec(function (err, users) {
      if (err) {
        reject(err)
      } else {
        resolve(users)
      }
    })
  })
}

exports.patchById = (id, rookiesData) => {
  return new Promise((resolve, reject) => {
    Rookies.findById(id, function (err, repository) {
      if (err) reject(err)
      for (let i in rookiesData) {
        repository[i] = rookiesData[i]
      }
      repository.save(function (err, updatedRookies) {
        if (err) return reject(err)
        resolve(updatedRookies)
      })
    })
  })
}

exports.deleteById = (id) => {
  return new Promise((resolve, reject) => {
    Rookies.deleteOne({ _id: id }, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(err)
      }
    })
  })
}

exports.findByOwnerAndName = (owner, name) => {
  return Rookies.find({ owner: owner, name: name })
}
