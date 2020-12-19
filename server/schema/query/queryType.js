const { GraphQLObjectType, GraphQLID, GraphQLList } = require("graphql");
const { AuthorType, BookType } = require("../types/rootTypes");
const AuthorModel = require("../../model/authorModel");
const BookModel = require("../../model/bookModel");

const RootQueryType = new GraphQLObjectType({
  name: "QueryType",
  fields: () => ({
    book: {
      type: BookType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parents, args) {
        return BookModel.findById(args.id);
      },
    },
    author: {
      type: AuthorType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parents, args) {
        return AuthorModel.findById(args.id);
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return BookModel.find();
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return AuthorModel.find();
      },
    },
  }),
});

module.exports = RootQueryType;
