//fadein
function fadeFunction() {
	$('body').fadeIn(500);
}

//toggle nav hamburger
function myFunction() {
	var x = document.getElementById('navUl');
	if (x.style.display === 'block') {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}
}

//toggle drop down
function myFunction() {
	let x = document.querySelector('body > div.intro > div');
	if (x.style.display === 'block') {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}
}

//mouse over the drop down button
function mOver(obj) {
	obj.innerHTML = 'Drop Down on Click';
}

function mOut(obj) {
	obj.innerHTML = 'Mouse Over Me';
}

//objects
let teamMember1 = {
	name: 'Chris Jones',
	role: 'User Interface'
};

let obj = teamMember1;

//foreach() ran on the object
Object.keys(obj).forEach(function(key) {
	console.log(key, obj[key]);
});
