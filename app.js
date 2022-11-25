require("./DB/connectToDb");
// require("./primeryData/primeryCards")();
const express = require("express");
const app = express();
const router = express.Router();
const usersRouter = require("./Routes/Users/userRouter");
const cardsRouter = require("./Routes/Cards/cardsRouter");
const chalk = require("chalk");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config()
app.use(morgan(chalk.cyan(":method :url :status :response-time ms")));
app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/cards", cardsRouter);
router.get("/", async (req, res) => {
 
    return res.json({"messege":"hi"});
})
const PORT = 8181;
app.listen(process.env.PORT||PORT, () =>
  console.log(chalk.blueBright.bold(`server run on: http://:localhost:${PORT}`))
);