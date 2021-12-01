const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()

//use express to serve up static files in client folder (html, css, etc)
app.use(express.static("client"))

//Allowing heroku to find file path
app.get("/", () => {
    res.sendFile(path.join(__dirname, "../index.html"))
})

//defining port for heroku, or if not connected to heroku, on port 4040
const port = process.env.PORT || 4040

app.listen(port, () => console.log(`server running on ${port}`))