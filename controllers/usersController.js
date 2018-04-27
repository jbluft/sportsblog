const db = require("../models");

module.exports = {
    // register:function (req,res) {
    //
    // },
    register:function(req,res){
        res.render("Users/register")
    },
    create: function(req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    }

};

