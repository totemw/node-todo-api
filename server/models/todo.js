const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true   //remove whitespaces
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};

/*let newTodo = new Todo({
    text: 'dinner',
    completed: false,
    completedAt: 19.00
});

newTodo.save().then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
}, (err) => {
    console.log('Unable to save todo', err);
});*/
