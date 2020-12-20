const { GraphQLID, GraphQLString, GraphQLNonNull } = require("graphql");
const { BookType } = require("../types/rootTypes");
const BookModel = require("../../model/bookModel");

const addBookMutation = {
  type: BookType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    genre: {
      type: new GraphQLNonNull(GraphQLString),
    },
    authorId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(parent, { name, genre, authorId }) {
    const newBook = new BookModel({
      name,
      genre,
      authorId,
    });

    return newBook.save();
  },
};

module.exports = { addBookMutation };
