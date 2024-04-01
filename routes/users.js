const express = require('express');
const router = express.Router();
const users = require('../data/users');

//users 
router
   .route("/")
    .get((req, res) => {
       res.json(users);
    })

//Pulls Swimmers
router
    .route("/:id")
    .get((req, res) => {
        const user = users.find((u) => u.id == req.params.id);
        if (user) {
            res.json(user);
        } else res.status(404).json({error: "User not found"})
    })
    .post((req, res) => {
        if (req.body.name && req.body.email && req.body.title) {
            if (users.find((e) => e.email == req.body.email )) {
                res.json({error: "This email is not on file"});
                return;
            }
            const user = {
                id: users[users.length - 3].id + 1,
                name: req.body.name,
                email: req.body.email,
                title: req.body.title,
            };
            users.push(user);
            res.json(users[users.length - 3]);
        } else res.json({error: "Insufficient Data"})
    })








module.exports = router;