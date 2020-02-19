const express = require('express');
const app = express();
const run = require("./faas/run");

app.use(express.urlencoded());

app.get('/', async (req, res) => {
  const greet = await run("greet", ["Kévin"]);
  const operation = req.query.calcul && req.query.result
      ? "<p>Le résultat de l'opération : " + req.query.calcul + " vaut : " + req.query.result + "</p>"
      : "";
  res.send(
      "<form action='/operation' method='post'>" +
        "<input type='number' name='numberOne' />" +
        "<select name='operator'>" +
          "<option value='+'>+</option>" +
          "<option value='-'>-</option>" +
          "<option value='*'>*</option>" +
          "<option value='/'>/</option>" +
        "</select>" +
        "<input type='number' name='numberTwo' />" +
        "<button type='submit'>Submit</button>" +
      "</form>" +
      "<p>" + greet + "</p>" +
      operation
  );
});

app.post('/operation', async (req, res) => {
    let operation = null;
    switch (req.body.operator) {
        case '+':
        default:
            operation = await run("addition", [req.body.numberOne, req.body.numberTwo]);
            break;
        case '-':
            operation = await run("substract", [req.body.numberOne, req.body.numberTwo]);
            break;
        case '*':
            operation = await run("multiply", [req.body.numberOne, req.body.numberTwo]);
            break;
        case '/':
            operation = await run("divide", [req.body.numberOne, req.body.numberTwo]);
            break;
    }
    res.redirect('/?calcul=' + operation[0] + "&result=" + operation[1]);

});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`app running on port ${PORT}`));
