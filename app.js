var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.getElementsByTagName("h3");
var body = document.querySelector("body");

console.log(color1)

function changeBackGround(){
	console.log(color1.value);
	body.style.background = "linear-gradient(to right,"
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";	
}

function changeTexth3(){
	h3[0].textContent = color1.value; 
	h3[1].textContent = color2.value;
}

function colorChange(){
	changeBackGround();
	changeTexth3();
}
console.log('#'+(Math.random()*256).toString(16));
color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
colorChange();
color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);

