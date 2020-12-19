const { GraphQLList, GraphQLID } = require("graphql");
const { BookType } = require("../types/rootTypes");
const BookModel = require("../../model/bookModel");

const booksQuery = {
  type: new GraphQLList(BookType),
  resolve(parent, args) {
    return BookModel.find();
  },
};

const bookByIdQuery = {
  type: BookType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve(parents, args) {
    return BookModel.findById(args.id);
  },
};

module.exports = { bookByIdQuery, booksQuery };
