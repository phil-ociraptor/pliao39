const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");
const marked = require("marked");

/**
 * Returns a map of weekly note name to an object of the shape:
 * {
 *  title: "2020-07-26",
 *  html: "<>"
 * }
 */
async function getWeeklyNotes() {
  // TODO: make it such that the obsidian note forest can be mirroed on the
  // website
  var notesDir = path.join(__dirname, "..", "obsidian", "weekly_notes");
  let notesMD = await fsPromises.readdir(notesDir);
  let notesFiles = await Promise.all(
    notesMD.map(x => fsPromises.readFile(path.join(notesDir, x)))
  );
  let notesContents = notesFiles.map(x => x.toString());
  let notesHTML = notesContents.map(x => marked(x));
  let notes = notesMD.map(x => path.parse(x).name);

  const result = notes.reduce((acc, curr, i) => {
    acc[curr] = {
      title: curr,
      html: notesHTML[i]
    };
    return acc;
  }, {});

  return result;
}

/**
 * Note
 * @param {String} noteName
 * @param {Object} note
 */
async function generatePostsForNote(noteName, note) {
  const content = `import React from "react";
import Note from "../../components/note";
import notes from "../../data/notes";

export default () => (<Note note={notes['${noteName}']}/>)`;

  let noteOutputDir = path.join(
    __dirname,
    "..",
    "pages",
    "weekly_notes",
    `${noteName}.js`
  );
  return fsPromises.writeFile(noteOutputDir, content);
}

async function run() {
  let notes = await getWeeklyNotes();
  let notesDataDir = path.join(__dirname, "..", "data", "notes.js");
  await fsPromises.writeFile(
    notesDataDir,
    `export default ${JSON.stringify(notes)}`
  );
  await Promise.all(
    Object.keys(notes).map(x => generatePostsForNote(x, notes[x]))
  );
  console.log(Object.keys(notes));
}

run();
