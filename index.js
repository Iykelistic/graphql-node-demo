const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');

async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    app.listen(4000, () =>
        console.log(`Server is running on http://localhost:4000${apolloServer.graphqlPath}`)
    );
}

startServer();
