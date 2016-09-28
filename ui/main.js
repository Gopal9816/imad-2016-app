console.log('Loaded!');
//changing the main text
var element = document.getElementById("text");
element.onclick = function (){
element.innerHTML = "This is the text entered in main.js";
};
//Making the image move around
var img = document.getElementById("madi");
img.onclick = function (){
  img.style.marginLeft = '100px' ;
};
