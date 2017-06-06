var s = [],i=2,x;
x = document.getElementById("newop");
//Creating a note
function fnew(){
	var op = document.createElement("option");
	op.text = prompt("Enter the title of the note : ", "");
	x.add(op);
	x.value = op.text;
	document.Notes.note.value = "";
}
//Reading and Saving a note
function fread(){
	if(x.value == ""){
		alert("Create a note first!!!");
	}
	else if(document.Notes.note.value == ""){
		alert("Type something!!!");
	}
	else if(x.selectedIndex > s.length-1){
	s.push(document.Notes.note.value);
	alert("Successfully saved");
	}
	else {
		s[x.selectedIndex] = document.Notes.note.value;
		alert("Successfully saved");
	}
}
//Displaying a note
function fdisp(){
	for(var j=0; j<x.length ; j++){
		if(x.value == x[j].text){
			if(s[j]){
			document.Notes.note.value = s[j];
			break;
			}
			else
				document.Notes.note.value = "";
		}
	}

}
//Deleting a note
function fdelete(){
	for(var k=0; k<s.length; k++){
		if(x.selectedIndex == k){
			for(var y=k; y<s.length; y++)
				s[y] = s[y+1];
			delete(s[s.length-1]);
		}
	}
	x.remove(x.selectedIndex);
	document.Notes.note.value = "";
}