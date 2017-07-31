const Router = require('express').Router;
const router = Router();
const User = require('../models/user');

// function hasEmailAndPassword(req, res, next) {
//     const user = req.body;
//     if(!user.email || !user.password) {
//         return next({
//             code: 400,
//             error: 'email and password must be supplied'
//         });
//     }
//     next();
// }

router
    // .get('/verify', ensureAuth, (req, res) => {
    //     res.send({ valid: true });
    // })  
    
    .post('/signup', (req, res, next) => {
        
    })
    
    .post('/signin', (req, res, next) => {
        
    });


module.exports = router;