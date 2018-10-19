var bodyParser = require("body-parser"),
expressSanitizer = require("express-sanitizer"),
express        = require("express"),
app            = express();

// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());





app.get("/", function(req, res){
   res.render("landing"); 
});

app.get("/RockyBalboa", function(req, res){
   res.render("Home"); 
});

app.get("/SuperMan", function(req, res){
   res.render("About"); 
});

app.get("/LukeSkywalker", function(req, res){
   res.render("Projects"); 
});

app.get("/Thor", function(req, res){
   res.render("Contact"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("General Kenobi, You are a bold one!");
})
