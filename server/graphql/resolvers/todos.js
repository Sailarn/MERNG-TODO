const {AuthenticationError} = require('apollo-server');

const Todo = require('../../models/Todo');
const checkAuth = require('../../util/check-auth');

module.exports = {
    Query: {
        async getTodos() {
            try {
                return await Todo.find().sort({createdAt: -1});
            } catch (err) {
                throw new Error(err);
            }
        },
        async getTodo(_, {todoId}) {
            try {
                const todo = await Todo.findById(todoId);
                if (todo) {
                    return todo;
                } else {
                    throw new Error('Todo not found');
                }
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    Mutation: {
        async createTodo(_, {title, description, completed, priority, privateTodo}, context) {
            const user = checkAuth(context);

            if (title.trim() === '') {
                throw new Error('Todo title must not be empty');
            }

            const newTodo = new Todo({
                title,
                description,
                completed: completed ? completed : false,
                priority: priority ? priority : 'Low',
                privateTodo: privateTodo ? privateTodo : false,
                user: user.id,
                username: user.username,
                createdAt: new Date().toISOString(),
                modifiedAt: new Date().toISOString()
            });

            return await newTodo.save();
        },
        async deleteTodo(_, {todoId}, context) {
            const user = checkAuth(context);

            try {
                const todo = await Todo.findById(todoId);
                if (user.username === todo.username) {
                    await todo.delete();
                    return 'Todo deleted successfully';
                } else {
                    throw new AuthenticationError('Action not allowed');
                }
            } catch (err) {
                throw new Error(err);
            }
        },
        async updateTodo(_, {todoId, title, description, priority, privateTodo}, context) {
            const user = checkAuth(context);

            try {
                const todo = await Todo.findById(todoId);
                if (user.username === todo.username) {

                    if (title.trim() === '') {
                        throw new Error('Todo title must not be empty');
                    }

                    await todo.updateOne({
                        title,
                        description,
                        priority: priority ? priority : 'Low',
                        privateTodo: privateTodo ? privateTodo : false,
                        modifiedAt: new Date().toISOString()
                    });
                    return await todo.save();
                } else {
                    throw new AuthenticationError('Action not allowed');
                }
            } catch (err) {
                throw new Error(err);
            }
        },
        async switchCompleteTodo(_, {todoId, completed, modifiedAt}, context) {
            const user = checkAuth(context);

            try {
                const todo = await Todo.findById(todoId);
                if (user.username === todo.username) {
                    await todo.updateOne({
                        completed: completed,
                        modifiedAt: new Date().toISOString()
                    });
                    return await todo.save();
                } else {
                    throw new AuthenticationError('Action not allowed');
                }
            } catch (err) {
                throw new Error(err);
            }
        },
    }
};