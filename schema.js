const { gql } = require('apollo-server-express');

// Define your schema here
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello, world!'
  }
};

module.exports = { typeDefs, resolvers };
