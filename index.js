const express = require('express')
const app = express()
const run = require("./faas/run")

app.get('/', async (req, res) => {
  const greet = await run("greet", ["student"]);
  res.json({greet})
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`app running on port ${PORT}`))
