const { GraphQLSchema } = require("graphql");

const RootQueryType = require("./query/queryType");
const Mutation = require("./mutation/mutation");

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: Mutation,
});
