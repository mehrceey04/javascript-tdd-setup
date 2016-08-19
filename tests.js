'use strict'
require('mocha');
var chai = require('chai');
var assert = chai.assert;

var NotesApp = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');


describe("Note creation works properly", function() {
    it("assigns author based on the parameter supplied in the constructor", function() {
        var note = new Note("Mercy", "Hello mickey");
        assert(note.author == "Mercy", "author not defined")
    })
})

describe("Note App creation works properly", function() {

    it("checks notelist created", function(){
        var myNoteApp = new NotesApp();
        assert(myNoteApp.notelist.length == 0, "notelist is not equal to empty list")
    })
    
    it("Creates application", function(){
        var myNoteApp = new NotesApp();
        var note = new Note("Mercy", "Hello mickey");
        myNoteApp.create(note)
        assert(myNoteApp.notelist.length == 1, "notelist is  empty")
    })
    
    it("it gets the note ID", function() {
        var noteapp = new NotesApp("Chidiebere");
        var note = new Note("Mercy", "Hello mickey");
        noteapp.create(note)
        var note_id = noteapp.get(0); 
        var getIdError = "'No note with ID ' + note_id "
        assert(noteapp.get(0)!== getIdError )
    })
     
     it("it checks if note exists", function() {
        var  note = new Note("Mickey Mouse", "Tom Jerry");
        var  noteapp = new NotesApp("Chidiebere");
        noteapp.create(note)
        var noteError = "Note doesn't exist"
        assert(noteapp.get(0) !== noteError);
    })
})