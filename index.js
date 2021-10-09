const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./startup/db")();
require("./startup/config")();
require("./startup/routes")(app);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Listening on port", port));
