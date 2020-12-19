const { GraphQLObjectType, GraphQLID, GraphQLString,GraphQLInt } = require("graphql");
const { AuthorType, BookType } = require("../types/rootTypes");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
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
    },
    addBook: {
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
    },
  },
});

module.exports = Mutation;
