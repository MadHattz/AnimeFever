//The point of this page is to have multiple routes but call specific pages

let express = require('express');
let router = express.Router();
let indexController = require('../controller/index');
/* GET home page. */
router.get('/',indexController.displayHomePage); //routes to index in controller folder

/* GET home page. */

router.get('/home', indexController.displayHomePage);

/* GET Projects page. */
router.get('/trending',indexController.displayTrendingPage);

/* GET ContactMe page. */
router.get('/contact', indexController.displayContactPage);

module.exports = router;
/*
MVC -> Model view controller
model -> to connect our logic
view -> pages view
controller -> the logic behind our routes
*/
