const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");
const AuthorModel = require("../../model/authorModel");

const BookType = (types) =>
  new GraphQLObjectType({
    name: "Book",
    fields: () => ({
      id: {
        type: GraphQLID,
      },
      name: {
        type: GraphQLString,
      },
      genre: {
        type: GraphQLString,
      },
      author: {
        type: types.AuthorType,
        resolve(parent, args) {
          console.log(types.AuthorType);
          return AuthorModel.findById(parent.authorId);
        },
      },
    }),
  });

module.exports = BookType;
