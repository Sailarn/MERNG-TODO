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
    type Subscription {
        todoComplete: Todo
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createTodo(title: String!, description: String, priority: String, privateTodo: Boolean): Todo!
        deleteTodo(todoId: ID!): ID!
        updateTodo(todoId: ID! title: String, description: String, completed: Boolean, privateTodo: Boolean, priority: String): Todo!
        switchCompleteTodo(todoId: ID! completed: Boolean!): Todo!
    }
`;