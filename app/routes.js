/**
 * Created by sulaymonz on 9/25/17.
 */


module.exports = function(app, passport){

    // home page
    app.get('/', isLoggedIn , function(req, res){
        res.render('index.js');
    });

    // login page
    app.get('/login', function(req, res){
        // render the page and pass in any flash data if exists
        res.render('login.ejs', {message: req.flash('loginMessage')});
    });

    // process the login form
    //app.post('/login', do all our passport stuff here)

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next){
    // if user is authenticated in the session, carry on
    if(req.isAuthenticated())
        return next();

    // if they aren't redirect to the login page
    res.redirect('/login');
}

