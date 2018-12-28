var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');
// For MLab Database:
// mongoose.connect('mongodb://test:testing123@ds131903.mlab.com:31903/test-database');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");