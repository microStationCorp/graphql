const { GraphQLList, GraphQLID } = require("graphql");
const { AuthorType } = require("../types/rootTypes");
const AuthorModel = require("../../model/authorModel");

const authorsQuery = {
  type: new GraphQLList(AuthorType),
  resolve(parent, args) {
    return AuthorModel.find();
  },
};

const authorByIdQuery = {
  type: AuthorType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve(parents, args) {
    return AuthorModel.findById(args.id);
  },
};

module.exports = { authorByIdQuery, authorsQuery };
