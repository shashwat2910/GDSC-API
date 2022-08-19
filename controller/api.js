const express = require("express")
const User = require('../model/user')
const app = express()

app.post("/adddetail", async (request, response) => {
    const user = new User(request.body)
    try {
      await user.save()
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