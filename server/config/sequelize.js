var Sequelize = require('sequelize');
var db = new Sequelize('mean_fridge', 'root', 'root', {
  host: '127.0.0.1',
  port: '8889'
});
var fs = require('fs');
var path = require('path');

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});
