//your JS code here. If required.
let listSection=document.getElementById("bands");

const bands=['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let ignore=new Set(['A','An','The']);
bands.sort((a,b)=>{
	let temp1=a.split(' ');
	let temp2=b.split(' ');
	if(ignore.has(temp1[0])&&ignore.has(temp2[0])){
		return temp1[1].localeCompare(temp2[1]);
	}
	else if(ignore.has(temp1[0])){
		return temp1[1].localeCompare(temp2[0]);
	}
	else if(ignore.has(temp2[0])){
		return temp1[0].localeCompare(temp2[1]);
	}
	else{
		return temp1[0].localeCompare(temp2[0]);
	}
})

for(let t of bands){
	let li=document.createElement("li");
	li.innerText=t;
	listSection.append(li);
}