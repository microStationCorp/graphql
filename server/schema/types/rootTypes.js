const AuthorTypeInject = require("./authorType");
const BookTypeInject = require("./bookType");

const types = {};
types.AuthorType = AuthorTypeInject(types);
types.BookType = BookTypeInject(types);

const AuthorType = types.AuthorType;
const BookType = types.BookType;

module.exports = { AuthorType, BookType };
