const express = require("express")
const User = require('../model/user')
const app = express()

var cors = require('cors')
app.use(cors())

app.post("/adddetail", async (request, response) => {
    const user = new User(request.body)
    try {
      await user.save()
      console.log(request.body);
      response.status(200).send("Saved user")
    } catch (error) {
      response.status(500).send(error)
    }
})

app.get("/details", async(request, response) => {
  const users = await User.find({})
  try {
    response.send(users)
  } catch (error) {
    response.status(500).send(error)
  }
})

module.exports = app