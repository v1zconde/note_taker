const fs = require("fs");
var notes = [];

module.exports = (app) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    notes = JSON.parse(data);
  });

  // Setup the /api/notes get route
  app.get("/api/notes", function (req, res) {
    // Read the db.json file and return all saved notes as JSON.
    res.json(notes);
  });

  // Setup the /api/notes post route
  app.post("/api/notes", function (req, res) {
    // Receives a new note, adds it to db.json, then returns the new note
    let newNote = req.body;
    notes.push(newNote);
    updateDb();
    console.log("Add new note: " + newNote.title);
  });
  // Retrieves a note with id
  app.get("/api/notes/:id", function (req, res) {
    // display json for the notes array indices of the provided id
    res.json(notes[req.params.id]);
  });
  // Deletes a note with id
  app.delete("/api/notes/:id", function (req, res) {
    notes.splice(req.params.id, 1);
    updateDb();
    console.log("Del note with id " + req.params.id);
  });
  //updates the json file whenever a note is added or deleted
  function updateDb() {
    fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), (err) => {
      if (err) throw err;
      return true;
    });
  }
};
