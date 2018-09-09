let mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
  text: {
    type: String, // Tipo : String
    minlength: 1, // Quantidade mínima de caracteres para não gerar erro
    required: true, // Caso não tenha sido inserido, irá gerar um erro
    trim: true // Remove todos os espaços p/ o count do 'minlength'
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

let newTodo = new Todo({
  // text: 'Edit this video'
});

newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}).catch((e) => {
  console.log('Unable to save todo');
});

module.exports = {Todo};
