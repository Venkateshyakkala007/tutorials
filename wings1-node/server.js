const express = require("express");
const cors = require("cors");

const db = require("./models");

const app = express();

var corOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corOptions));
//localhost;88081
// parse requests of content-type-application/json
http: app.use(express.json());

//parse requests of content-type -application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application" });
});

require("./routes/tutorial.routes")(app);

//set ports listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port${PORT}`);
});

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database!");
  })
  .catch((err) => {
    console.log("cannot connect to the database!", err);
    process.exit();
  });
