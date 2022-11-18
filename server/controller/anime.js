//routes related to AnimeFever
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with book module
//need certain modules to display
let Anime = require('../models/anime');

//CRUD - Creat, Read, Add/Update, Delete

//Read operation - get route for the anime list
module.exports.displayAnimeList = (req,res,next)=>{
    Anime.find((err,animelist)=>{
        if(err)
        {
            return console.error(err);

        }
        else{
            //console.log(AnimeList); (displays on console)
            //display on webpage
            res.render('anime/list',
            {title: 'Top10 Anime', 
            AnimeList: animelist //calls anime list from 4loop in views section
        })
        }
    })
}

//Add Operation
module.exports.displayAddPage = (req,res,next)=>{
    res.render('anime/add',{title:'Add Anime'})
}
//Post route for processing the Add-page -- Post Operation
module.exports.processAddPage = (req,res,next)=>{
    let newAnime = Anime ({
        "Name": req.body.Name,
        "Genre": req.body.Genre,
        "Rating":req.body.Rating,
        "Seasons":req.body.Seasons,
        "Aired":req.body.Aired,
        "Description":req.body.Description
    });
    Anime.create(newAnime,(err,Anime)=>{
        if (err){
            console.log(err);
            res.end(err);

        }else{
            res.redirect('/animelist');
        }
    });
}
//Edit/Update Operation
module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Anime.findById(id,(err,animeToEdit)=>{
        if (err){
            console.log(err);
            res.end(err);

        }else{
            res.render('anime/edit',{title:'Edit Anime', anime: animeToEdit});
        }
    });
}
//Process Edit Operation
module.exports.processEditPage = (req,res,next)=>{
    let id = req.params.id;
    let updateAnime = Anime({
        "_id":id,
        "Name": req.body.Name,
        "Genre": req.body.Genre,
        "Rating":req.body.Rating,
        "Seasons":req.body.Seasons,
        "Aired":req.body.Aired,
        "Description":req.body.Description
    });
    Anime.updateOne({_id:id}, updateAnime,(err) =>{
        if (err){
            console.log(err);
            res.end(err);

        }else{
            res.redirect('/animelist'); //redirect back to anime list
        }
    });
}
//Delete Operation
module.exports.performDeleteOperation = (req,res,next)=>{
    let id = req.params.id;
    Anime.deleteOne({__id:id},(err) => {
        if (err){
            console.log(err);
            res.end(err);

        }else{
            res.redirect('/animelist');
        }
    });
}