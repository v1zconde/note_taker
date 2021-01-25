const path = require("path");

//Display index.html when access home
module.exports = (app) => {
  app.get("/", function (req, res) {
    console.log("home page requested");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  //Display notes.html when access note
  app.get("/notes", function (req, res) {
    console.log("tables page requested");
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
};