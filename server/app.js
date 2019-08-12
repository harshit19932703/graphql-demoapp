const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
mongoose.connect(
  "mongodb://harshit19932703:harshit12@ds157479.mlab.com:57479/nodesampleapi2703"
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
