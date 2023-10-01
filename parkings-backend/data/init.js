const mongoose = require("mongoose");

// all models
require("../models/bookedSpace");
require("../models/user");
require("../models/uploadedSpace");

const uri = "mongodb+srv://manojbhichchhar8:narendra9@cluster0.tz5ztvd.mongodb.net/?retryWrites=true&w=majority";

// setting deprecations to false
mongoose.set("useFindAndModify", false);
mongoose.set("returnOriginal", false);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("open", () => {
  console.log("Connection to the DB has established");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  process.exit(1);
});
