import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  getTrackStories: function(track){
    return axios.get("/api/books/track/" + track);
  },

  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  postUserLogin: function(loginCredentials) {
    console.log(loginCredentials);
    return axios.post("/api/users/login", loginCredentials);
  },


  // gets all notes

  getNotes: function() {
    return axios.get("/api/notes");
  },
  // Gets the book with the given id
  getNote: function(id) {
    return axios.get("/api/notes/" + id);
  },
  // Deletes the book with the given id
  deleteNote: function(id) {
    return axios.delete("/api/notes/" + id);
  },
  // Saves a book to the database
  saveNote: function(noteData) {
    return axios.post("/api/notes", noteData);
  },
  getTrackNotes: function(track){
    return axios.get("/api/notes/track/" + track);
  }
};
