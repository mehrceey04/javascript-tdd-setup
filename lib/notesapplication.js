// NotesApplication class

class NoteApp {
	constructor(){
		this.notelist = []
	}
	
	create(note){
		this.notelist.push(note)
	}
	
	print_note(note_id, note) {
		console.log("Note ID: "+ note_id);
		console.log(note.note_content)
		console.log("By Author "+note.author+"\n\n")
	}
	
	listNote() {
		for(var i=0; i<(this.notelist.length); i++){
			this.print_note(i, this.notelist[i])
		}
	}
	
	get(note_id){
		var note = this.notelist[note_id]
		return note.note_content
	}
	
	search(search_text){
		var match_note = []
		for(var i=0; i<(this.notelist.length); i++){
			var note = this.notelist[i];
			if(note.note_content.search(search_text) > -1){
				match_note.push(note)
			}
		}
		if(match_note.length > 0) {
			console.log("Showing results for search '"+search_text+"'\n")
			for(var j=0; j<(match_note.length); j++){
				this.print_note(j, match_note[j])
			}
		} else {
			console.log("No Result found")
		}
	}
	
	delete(note_id){
		this.notelist.splice(note_id, 1)
	}
	
	edit(note_id, new_content){
		var note = this.notelist[note_id]
		note.note_content = new_content
	}

}

module.exports = NoteApp;