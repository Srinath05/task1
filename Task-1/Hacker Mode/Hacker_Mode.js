var s = [],i=2,x,prt = [];
x = document.getElementById("newop");
var z = document.getElementById("prior");
var tx = document.getElementById("notetx");
if(z.value == "High"){
	tx.style.backgroundColor = "red";
}
else if(z.value == "Medium"){
	tx.style.backgroundColor = "green";
}
else if(z.value == "Low"){
	tx.style.backgroundColor = "blue";
}
// Setting the color of textarea
function setpriority(){
	if(z.value == "High"){
		tx.style.backgroundColor = "red";
	}
	else if(z.value == "Medium"){
		tx.style.backgroundColor = "green";
	}
	else if(z.value == "Low"){
		tx.style.backgroundColor = "blue";
	}
}
//Creating a new note
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
	else{
		s[x.selectedIndex] = document.Notes.note.value;
		alert("Successfully saved");
		prt[x.selectedIndex] = z.value; 
	}
}
//Displaying the notes
function fdisp(){
	for(var j=0; j<x.length ; j++){
		if(x.value == x[j].text){
			if(s[j]){
			document.Notes.note.value = s[j];
			z.value = prt[j];
			setpriority();
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
//Sorting notes
function fsort(){
	var g,r,temp1,temp2,temp3;
	for(g=0;g<x.length;g++){
		if(prt[g]=="Low"){
			for(r=g+1;r<x.length;r++){
				temp1=prt[r];
				prt[r]=prt[g];
				prt[g]=temp1;
				temp2=x[r].text;
				x[r].text=x[g].text;
				x[g].text=temp2;
				temp3=s[r];
				s[r]=s[g];
				s[g]=temp3;
			}
		}
		else if(prt[g]=="Medium"){
			for(r=g+1;r<x.length;r++){
				if(prt[r]!="Low"){
					temp1=prt[r];
					prt[r]=prt[g];
					prt[g]=temp1;
					temp2=x[r].text;
					x[r].text=x[g].text;
					x[g].text=temp2;
					temp3=s[r];
					s[r]=s[g];
					s[g]=temp3;
				}
			}
		}
	}
}
//Storing notes
function fstore(){
		for(var d=0;d<x.length;d++){
			localStorage.setItem("xs"+d, s[d]);
			localStorage.setItem("xt"+d, x[d].text);
			localStorage.setItem("xprt"+d, prt[d]);
		}
		localStorage.nlength = x.length;
}
//Retrieving notes
function fretrieve(){
	var a=[];
	for(var c=0;c<localStorage.nlength;c++){
		s[c]=localStorage.getItem("xs"+c);
		a[c]=localStorage.getItem("xt"+c);
		prt[c]=localStorage.getItem("xprt"+c);
	}
	var op1;
	var x1 = document.getElementById("newop");
	for(c=0;c<localStorage.nlength;c++){
		op1 = document.createElement("option");
		op1.text = a[c];
		x1.add(op1);
	}
}