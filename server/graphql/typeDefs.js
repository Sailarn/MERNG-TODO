const {gql} = require('apollo-server');

module.exports = gql`
    type Todo{
        id: ID!
        description: String
        title: String!
        createdAt: String!
        modifiedAt: String!
        completed: Boolean!
        priority: String!
        privateTodo: Boolean!
        username: String!
    }
    type User {
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }
    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Query{
        getTodos: [Todo],
        getTodo(todoId: ID!): Todo
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createTodo(title: String!, description: String, priority: String, privateTodo: Boolean): Todo!
        deleteTodo(todoId: ID!): Todo!
        updateTodo(title: String, description: String, completed: String, privateTodo: Boolean, priority: String): Todo!
    }
`;