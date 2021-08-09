module.exports = {
  ensureAuthenticated: ((req,res,next) => {
    if(req.isAuthenticated()){
      return next();
    }
    req.flash('error_msg','Please Login to View this Page!');
    res.redirect('/users/login');
  })
}
