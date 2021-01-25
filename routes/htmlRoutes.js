//const path = require("path");

module.exports = (app) => {
  app.get("/", function (req, res) {
    console.log("home page requested");
    return res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/notes", function (req, res) {
    console.log("tables page requested");
    console;
    return res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
};
