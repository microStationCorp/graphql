const { GraphQLString, GraphQLInt, GraphQLNonNull } = require("graphql");
const { AuthorType } = require("../types/rootTypes");
const AuthorModel = require("../../model/authorModel");

const addAuthorMutation = {
  type: AuthorType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve(parent, { name, age }) {
    const newAuthor = new AuthorModel({
      name,
      age,
    });
    return newAuthor.save();
  },
};

module.exports = { addAuthorMutation };
