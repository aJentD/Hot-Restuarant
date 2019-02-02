// Dependencies
var express = require("express");
var app = express();
var PORT = 7000;

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
// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "inex.html"));
// });

// app.get("/api/tables", function(req, res){
//     return res.json(tables);
// });

// app.get("/api/waitlist", function(req, res){
//     return res.json(waitlist);
// });

// listener
app.listen(PORT, function(){
    console.log("App listening on PORT "+ PORT);
});