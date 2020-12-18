const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
require("dotenv").config();

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(process.env.PORT, () =>
  console.log(`server runs at ${process.env.PORT}`)
);
