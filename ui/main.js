console.log('Loaded!');
//changing the main text
var element = document.getElementById("text");
element.onclick = function (){
element.innerHTML = "This is the text entered in main.js";
};
//Making the image move around
var img = document.getElementById("madi");
var marginLeft = 0;
img.onclick = function (){
  marginLeft += 10;
  img.style.marginLeft =marginLeft + "px" ;
};
