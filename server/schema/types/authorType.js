const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");
const BookModel = require("../../model/bookModel");

const AuthorType = (types) =>
  new GraphQLObjectType({
    name: "Author",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
      book: {
        type: new GraphQLList(types.BookType),
        resolve(parent, args) {
          return BookModel.find({ authorId: parent.id });
        },
      },
    }),
  });

module.exports = AuthorType;
