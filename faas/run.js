const config = require("./config")
const axios = require("axios")
const chalk = require("chalk")

async function run(id, params) {
  if (!id) {
    console.log(chalk.red("no id specified"))
    throw "no id specified"
  }
  const out = await axios.post(`http://${config.host}:${config.port}/${config.user}/${id}/run`, params ? { params } : undefined)
  if (out.data.error) {
    console.log(chalk.red("error: ", out.data.error))
    throw out.data.error
  }
  if (out.data.log) {
    console.log(chalk.grey(out.data.log))
  }
  return out.data.out
}

module.exports = run
