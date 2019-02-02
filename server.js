// Dependencies
var express = require("express");
var path = require("path");

// Express
var app = express();
var PORT = 7000;

// Sets up the Express app to handle data parsing....Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA
var tables = [
    {
        routeName: "danny devito",
        name: "Danny Devito",
        email: "dannydev@awesome.com",
        phone:000-000-0000,
        id: "dantheman"
    }
];

var waitlist = [
    {
        routeName: "clive owen",
        name: "Clive Owen",
        email: "cowen@cliveowen.com",
        phone:000-000-0000,
        id: "The Clive"
    }
]




// Routes
    // home
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/view.html", function(req, res){
    res.sendFile(path.join(__dirname, "view.html"));
});
app.get("/reservation.html", function(req, res){
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/tables", function(req, res){
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res){
    return res.json(waitlist);
});

// listener
app.listen(PORT, function(){
    console.log("App listening on PORT "+ PORT);
});