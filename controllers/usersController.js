const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      const user = {
          usernamame: req.body.username,
          password: req.body.password
      };
      db.User
      .create(user)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};



// const db = require("../models");

// module.exports = {
//     // register:function (req,res) {
//     //
//     // },
//     register:function(req,res){
//         res.render("Users/register")
//     },
//     create: function(req, res) {
//         db.User
//             .create(req.body)
//             .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
//     }

// };

