const { GraphQLID, GraphQLString } = require("graphql");
const { BookType } = require("../types/rootTypes");
const BookModel = require("../../model/bookModel");

const addBookMutation = {
  type: BookType,
  args: {
    name: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
    authorId: {
      type: GraphQLID,
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
