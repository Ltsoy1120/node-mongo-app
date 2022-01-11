const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const todoRouts = require("./routes/todos");
const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs"
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(todoRouts);

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://ltsoy1120:1120@cluster0.hu7up.mongodb.net/todos",
      {
        useNewUrlParser: true
      }
    );
    app.listen(PORT, () => {
      console.log("Server has been started on port " + PORT);
    });
  } catch (e) {
    console.log(e);
  }
}
start();
