const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");
const _ = require("lodash");

const bookDB = [
  { id: "1", name: "ranu bhanu1", genre: "fantasy1", authorId: "1" },
  { id: "2", name: "ranu bhanu2", genre: "fantasy2", authorId: "2" },
  { id: "3", name: "ranu bhanu3", genre: "fantasy3", authorId: "3" },
  { id: "4", name: "ranu bhanu4", genre: "fantasy4", authorId: "1" },
  { id: "5", name: "ranu bhanu5", genre: "fantasy5", authorId: "1" },
  { id: "6", name: "ranu bhanu6", genre: "fantasy6", authorId: "2" },
  { id: "7", name: "ranu bhanu7", genre: "fantasy7", authorId: "3" },
];

const authorDB = [
  { id: "1", name: "rabi1", age: 23 },
  { id: "2", name: "rabi2", age: 24 },
  { id: "3", name: "rabi3", age: 25 },
];

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    book: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(bookDB, { authorId: parent.id });
      },
    },
  }),
});

const BookType = new GraphQLObjectType({
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
      type: AuthorType,
      resolve(parent, args) {
        return _.find(authorDB, { id: parent.authorId });
      },
    },
  }),
});

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
        return _.find(bookDB, { id: args.id });
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
        return _.find(authorDB, { id: args.id });
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
});
