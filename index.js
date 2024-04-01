const express = require('express');
const app = express()

app.get('/', (req, res,) => {
res.send('Hello Swimmers')
res.send([1, 2, 3, 4, 5]);
});

app.get('/api/lessons', (req, res) => {
res.send(lessons);
})

//Importing data
const users = require('./data/users');
const items = require('./data/inventory');


//Middleware
app.use(express.json());
const usersRouter = require('./routes/users');




//Template engine
const fs = require('fs');

//Set views and view engine
app.set('views', './views')
app.set('view engine', 'swimmers')

//Define template engine --come back to this
app.engine('Swimmers', (filePath, options, callback) => {
    fs.readFile(filePath, (e, content) => {
        if (e) return callback (e);

    });
})



//Route MIDDLEWARE
app.use("/users", usersRouter);



//Root Route
app.get("/", (req, res) => {
    res.send('Get ready for your meet')
})

//Routes
    
app.get
    .route("/users")
    .get((req, res,) => {
        res.json(users);
})
    .post((req, res) => {
        if (req.body.name && req.body.email && req.body.title) {
            if (users.find((e) => e.email == req.body.email )) {
                res.json({error: "This email has been used"});
                return;
            }
            const user = {
                id: users[users.length - 1].id + 1,
                name: req.body.name,
                email: req.body.email,
                title: req.body.title,
            };
            users.push(user);
            res.json(users[users.length - 1]);
        } else res.json({error: "Swimmer unavailable"})
    })




app.Listen(3000,() => console.log('Listening on port 3000...'))