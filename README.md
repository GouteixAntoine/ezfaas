# ezfaas

## express server
start a basic server `npm start`
the code is in `./index.js`

## functions as a service

`npm run faas:list`

`npm run faas:add file.js function_name`

`npm run faas:del function_name/function_id`

`npm run faas:run function_name/function_id (params)`

## get the server working

`npm run faas:add ./greet.js greet` <- this will register the function contained in `./greet.js` as the function `greet`

you will be able to run it manually with `npm run faas:run greet Nicolas`

and programmatically with

```
const run = require("./faas/run");
...
await run("greet", ["Nicolas"]);
```
