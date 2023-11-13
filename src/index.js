const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Hello, Express!")
})

app.get("/prajwal-singh", (req, res) => {
  const htmlContent = `<html><body><div style="height: 50vh;display:flex;justify-content:center;align-items:center;"><h2>Hello!, prajwal singh this side, how are you?</h2></div></body></html>`
  res.send(htmlContent)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
