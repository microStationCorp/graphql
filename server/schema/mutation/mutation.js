const { GraphQLObjectType } = require("graphql");
const { addAuthorMutation } = require("./authorMutation");
const { addBookMutation } = require("./bookMutation");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: addAuthorMutation,
    addBook: addBookMutation,
  },
});

module.exports = Mutation;
