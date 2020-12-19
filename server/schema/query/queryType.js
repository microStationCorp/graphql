const { GraphQLObjectType } = require("graphql");
const { booksQuery, bookByIdQuery } = require("./bookQuery");
const { authorByIdQuery, authorsQuery } = require("./authorQuery");

const RootQueryType = new GraphQLObjectType({
  name: "QueryType",
  fields: () => ({
    book: bookByIdQuery,
    author: authorByIdQuery,
    books: booksQuery,
    authors: authorsQuery,
  }),
});

module.exports = RootQueryType;
