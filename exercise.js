var h1 = document.getElementById("MyH1");
h1.style.color = "orange";

var anchors = document.getElementsByClassName("anchor");
for (var i = 0; i < anchors.length; i++) {
 anchors[i].style.background = "green";
}

var pars = document.getElementsByTagName("p");
for (var i = 0; i < pars.length; i++) {
 pars[i].style.border = "2px solid red";
};

var anchor = document.querySelector(".anchor");
	anchor.style.border = "2px solid magenta";

var p = document.getElementsByTagName("p");
for (var i = 0; i < p.length; i++) {
 p[i].style.border = "2px solid black";
}

var a = document.querySelector(".anchor");
console.log(a.className);
a.classList.add("hi");
a.classList.remove("bye");
console.log(a.classList);

var p2 = document.querySelectorAll("p")[1];

p2.textContent = "Buenos dias!";
p2.innerHTML = "Buenos <strong>dias!</strong>";

var google = document.getElementsByTagName("a")[1];

a2.getAttribute("href");

// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", functon() {
// 	var r = Math.floor(256*Math.random());
// 	var g = Math.floor(256*Math.random());
// 	var b = Math.floor(256*Math.random()); 
// 	h1.classlist.toggle("important")
// }); 

var p1 = document.querySelector("p");
	p1.addEventListener("mouseover", translate);

var Hola = p1.innerHTML;

	function translate() {
		p1.textContent = "Hello";
	}
	p1.addEventListener("mouseout",translate1);

	function translate1() {
		p1.textContent = "Hola";
	}

var li = document.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
	li[i].addEventListener("click", function(event) {
		console.log("You clicked an li");
		event.stopPropagation();
	})
}
var ul = document.getElementsByTagName("ul");
for (var i = 0; i < ul.length; i++) {
	ul[i].addEventListener("click", function() {
		console.log("You clicked an ul");
	});
}
// var body = document.querySelector("body");
// 	body.addEventListener("click", function() {
// 	console.log("You clicked the body");
// })

var form = document.forms[0];
var input = form.name;
var logButton = document.getElementById("log");
logButton.addEventListener("click", function () {
	console.log(input.value);
});

 var h1 = document.getElementById("MyH1");
 var button = document.getElementById("click");
  button.addEventListener("click", function() {
  	h1.classList.toggle("important",);
  });