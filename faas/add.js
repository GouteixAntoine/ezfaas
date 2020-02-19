const axios = require("axios")
const config = require("./config")

async function add(content, name) {
  const out = await axios.post(`http://${config.host}:${config.port}/${config.user}/add`, {
    content,
    name,
  })
  return out
}

module.exports = add
