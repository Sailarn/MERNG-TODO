const todosResolvers = require('./todos');
const usersResolvers = require('./users');

module.exports = {
    Query: {
        ...todosResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...todosResolvers.Mutation
    }
};