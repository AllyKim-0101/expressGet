var express = require("express");
var app = express();


//it asks express to serve directory called public in app.js
app.use(express.static("public"));

app.get("/", function (req, res) {
    //will render home.ejs file in view. Express will check view folder 
    //whenever we render something so new directory should be named as view
    res.render("home.ejs");
});

app.get("/fellinlove/:thing", function (req, res) {
    let thing = req.params.thing;
    //{thingVar:thing} means thingVar=thing
    res.render("love.ejs", { thingVar: thing });
})

app.get("/posts", function (req, res) {
    let posts = [
        { title: "pandemic dinner receipe", author: "adam" },
        { title: "dream comes true", author: "ally" },
        { title: "dorphines", author: "pene" },
    ];
    res.render("posts.ejs", { posts: posts });
})

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("server is listing! ")
});
