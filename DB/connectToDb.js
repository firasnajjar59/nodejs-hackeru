const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
  .connect("mongodb+srv://admin:admin@business-hackeru.fnolrct.mongodb.net/business_card_app?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(chalk.magentaBright.bold("connected to MongoDb!")))
  .catch(error =>
    console.log(chalk.redBright.bold(`could not connect to mongoDb: ${error}`))
  );
