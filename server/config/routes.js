var users = require('../models/user.js');
//var ingredients = require('../controllers/ingredients.js');
//var recipes = require('../controllers/recipes.js');

module.exports = function(app){
  app.get('/users', function(req, res) {
    console.log('users index');
    users.index(req, res); });
  app.get('/users/:id', function(req, res) {
    console.log('users show one');
    users.show(req, res); });
  app.post('/users', function(req, res) {
    users.create(req, res); });
  app.put('/users/:id', function(req, res){
    users.update(req, res); });
  app.delete('/users/:id', function(req, res) {
    users.delete(req, res); });
  // app.get('/ingredients', function(req, res) {
  //   ingredients.index(req, res); });
  // app.get('/ingredients/:id', function(req, res) {
  //   ingredients.show(req, res); });
  // app.post('/ingredients', function(req, res) {
  //   ingredients.create(req, res); });
  // app.put('/ingredients/:id', function(req, res){
  //   ingredients.update(req, res); });
  // app.delete('/ingredients/:id', function(req, res) {
  //   ingredients.delete(req, res); });
  // app.get('/recipes', function(req, res) {
  //   recipes.index(req, res); });
  // app.get('/recipes/:id', function(req, res) {
  //   recipes.show(req, res); });
  // app.post('/recipes', function(req, res) {
  //   recipes.create(req, res); });
  // app.put('/recipes/:id', function(req, res){
  //   recipes.update(req, res); });
  // app.delete('/recipes/:id', function(req, res) {
  //   recipes.delete(req, res); });
}
