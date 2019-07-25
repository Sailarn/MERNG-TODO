const {ApolloServer, PubSub} = require('apollo-server');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const {MONGODB} = require('./config.js');

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req, pubsub})
});

mongoose
    .connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        return server.listen({port});
    });