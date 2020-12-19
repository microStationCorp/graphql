const { GraphQLString, GraphQLInt } = require("graphql");
const { AuthorType } = require("../types/rootTypes");
const AuthorModel = require("../../model/authorModel");

const addAuthorMutation = {
  type: AuthorType,
  args: {
    name: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
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
