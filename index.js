const express = require("express")

const app  = express()

app.listen(5001, () => {
    console.log("server is running");
})

app.get("/", (req, res) => {
    res.json("your api is running")
})
const users = ["mohammad", "salemHacker"]
app.get("/users", (req, res) => {
    res.json(users)
})