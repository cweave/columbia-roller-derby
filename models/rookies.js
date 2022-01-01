const mongoose = require("mongoose")
const Schema = mongoose.Schema

const skaterSchema = new Schema({
  name: String,
  derby_name: String,
  number: String,
  email: String,
  phone: String,
  street_address: String,
  city: String,
  state: String,
  zip_code: String,
  birthday: String,
  county: String,
  yearly_waiver_status: String,
  skater_type: String,
})

const Rookie = mongoose.model("Rookie", skaterSchema)
module.exports = Rookie
