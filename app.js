require("./DB/connectToDb");
// require("./primeryData/primeryCards")();
const express = require("express");
const app = express();

const usersRouter = require("./Routes/Users/userRouter");
const cardsRouter = require("./Routes/Cards/cardsRouter");
const chalk = require("chalk");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8181;
app.set('port', PORT);
app.use(morgan(chalk.cyan(":method :url :status :response-time ms")));
app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/cards", cardsRouter);
app.get("/", async (req, res) => {
  return res.render("home");
});
app.listen(PORT, (err) =>{
  if(err)console.log(err);
    console.log(chalk.blueBright.bold(`server run on:port ${PORT}`))
}
);
