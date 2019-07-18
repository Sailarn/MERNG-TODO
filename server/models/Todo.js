const {model, Schema} = require('mongoose');

const todoSchema = new Schema({
    title: String,
    description: String,
    createdAt: String,
    username: String,
    modifiedAt: String,
    completed: Boolean,
    priority: String,
    privateTodo: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = model('Todo', todoSchema);