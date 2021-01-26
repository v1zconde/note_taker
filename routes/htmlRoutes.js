const path = require("path");

//Display index.html when access home
module.exports = (app) => {
  //Display notes.html when access note
  app.get("/notes", function (req, res) {
    console.log("tables page requested");
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  //Display index.html if you go to any page that doesnt exist.
  app.get("*", function (req, res) {
    console.log("home page requested");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};