const config = require("./config")
const fs = require("fs")
const axios = require("axios")
const moment = require("moment")
const chalk = require("chalk")
const runFn = require("./run")

async function add(fn, name) {
  if (!fn || !name) {
    console.log(chalk.red("missing filename or name"))
    console.log(chalk.green("npm run faas:add ./file.js function_name"))
    return
  }
  const content = fs.readFileSync(fn, "utf-8");
  const out = await axios.post(`http://${config.host}:${config.port}/${config.user}/add`, {
    content,
    name,
  })
  if (out.data.error)
    console.log(chalk.red("error: " + out.data.error))
}

async function del(id) {
  if (!id) {
    console.log(chalk.red("no id specified"))
    console.log(chalk.green("npm run faas:del function_id"))
    return
  }
  const out = await axios.post(`http://${config.host}:${config.port}/${config.user}/${id}/del`)
  if (out.data.error)
    console.log(chalk.red("error: " + out.data.error))
}

async function list() {
  const out = await axios.get(`http://${config.host}:${config.port}/${config.user}`)

  if (out.data.error) {
    console.log(chalk.red("error: " + out.data.error))
    return
  }
  const functions = out.data.sort((a, b) => b.added - a.added)
  console.log(`${chalk.blue("function_id")}                                        ${chalk.cyan("name")}    ${chalk.green("added")}`)
  console.log()
  functions.forEach((f) => { console.log(`${chalk.blue(f._id)} ${chalk.cyan(f.name.padStart(30))}    ${chalk.green(moment(f.added).fromNow())}`) })
  console.log()
}

async function run(id) {
  if (!id) {
    console.log(chalk.red("no id specified"))
    console.log(chalk.green("npm run faas:run function_id"))
    return
  }
  const out = await runFn(id)
  console.log(out)
}

module.exports = {
  add,
  list,
  del,
  run,
}
