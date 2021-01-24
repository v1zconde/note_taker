const express = require("express");
// const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");
const path = require("path")
const fs = require("fs");


// initialize the app and create a port
const app = express();
//dynamic port for heroku deployment
const PORT = process.env.PORT ||3000;
//set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//static files and resources
app.use(express.static("public"));
//require our abstracted route folders
//  app.use("/api", apiRoutes);
//  app.use("/", htmlRoutes);
//require route files
 require("./routes/apiRoutes")(app)
 require("./routes/htmlRoutes")(app)


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
