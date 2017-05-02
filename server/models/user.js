// var Sequelize = require("sequelize");
// var db = new Sequelize('express', 'root', 'root', {
//   host: '127.0.0.1',
//   port: '8889'
// });
// // console.log(db);
// var Project = db.define('Project', {
//   date: Sequelize.DATE,
//   title: Sequelize.STRING,
//   description: Sequelize.TEXT
// });
// console.log(Project);
// db.sync().then(function() {
//   var project = Project.build({
//     date: new Date(),
//     title: 'New Project!',
//     description: 'If this succeeds, I\'ve connected to my MAMP!'
//   });
//
//   project.save();
// });

var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');
var db = new Sequelize('mean_fridge', 'root', 'root', {
  host: '127.0.0.1',
  port: '8889'
});

var User = db.define('User', {
  email: Sequelize.STRING,
  pw_hash: Sequelize.STRING
});

module.exports = {
  index: function(req, res) {
    User.findAll({}).then(function(users, err) {
      if(!err) {
        res.json(users);
      } else {
        res.json(err);
      }
    })
  },
  show: function(req, res) {
    console.log(req.params.id);
    User.findOne({where:{id:req.params.id}}).then(function(user, err) {
      if(err) {
        console.log('error');
        res.json(err);
      } else {
        res.json(user);
      }
    })
  },
  create: function(req, res) {
    var errors = [];

    var user = {email: req.body.email, password:req.body.password};
    if(!user.email) {
      errors.push("Email is required!");
    }
    if(!user.password) {
      errors.push("Password is required!");
    }
    if(!errors.length) {
      newUser = User.create({
        email: user.email,
        pw_hash: bcrypt.hashSync(user.password, bcrypt.genSaltSync(8)
      )}).then(function(err, user) {
        if(err) {
          res.json(err);
        } else {
          res.json(user);
        }
      })
      // .then(function(user) {
      //   User.save(function(err){
      //     if(err) {
      //       console.log('something went wrong in post /submit save');
      //       res.json(err);
      //     } else {
      //       console.log('successfully added a product!');
      //       res.json(product);
      //     }
      //   })
      // })
    }
    else {
      console.log("ERR:", errors)
      res.json(errors);
    }
  },
}
//
// db.sync().then(function() {
//   return User.create({
//     email: 'johndoe@jd.com',
//     pw_hash: bcrypt.hashSync('helloworld', bcrypt.genSaltSync(8))
//   });
// }).then(function(john) {
//   console.log(john.get({
//     plain: true
//   }))
//   console.log(bcrypt.compareSync('helloworld', john.pw_hash));
// })

// var Customer = mongoose.model('Customer', CustomerSchema);
