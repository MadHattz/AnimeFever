let express = require('express');
let router = express.Router();

//Display Home Pages
module.exports.displayHomePage=(req, res, next)=> {
    res.render('index', { 
    title: 'Anime Fever' , //render routes this page to views
    section: 'HomePage Tests'
  });
}

//Display Trending Page
module.exports.displayTrendingPage = (req, res, next)=> {
  res.render('index', { title: 'Trending' ,
  section: 'Trending'
});
}
//Display Contacts Page
module.exports.displayContactPage = (req, res, next)=>{
  res.render('index', { title: 'Contact Me' ,
  section: 'Get In Contact With Me'
});
}