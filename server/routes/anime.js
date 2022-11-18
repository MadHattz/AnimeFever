//routes related to AnimeFever
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//link to controller
let animeController = require('../controller/anime')
//connect with book module
//need certain modules to display
let Anime = require('../models/anime');

//CRUD - Creat, Read, Add/Update, Delete

//Read operation - get route for the anime list
router.get('/',animeController.displayAnimeList);

//Add Operation
//Get Route For Displaying the Add-Page -- Create Operation
router.get('/add',animeController.displayAddPage);

//Post route for processing the Add-page -- Post Operation
router.post('/add',animeController.processAddPage);


//Edit/Update Operation
//Get Route For Displaying the Edit Operation -- Update Operation
router.get('/edit/:id',animeController.displayEditPage);
//Post route for displaying the Edit Operation -- Update Operation
router.post('/edit/:id',animeController.processEditPage);
//Delete Operation
router.get('/delete/:id',animeController.performDeleteOperation);

//export router
module.exports = router;