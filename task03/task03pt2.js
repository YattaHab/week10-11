
//assignment03
/* 
<div class="start" title="Start Element" data-value="Start">Start</div>
<div class="our-element">Our Element</div>
<div class="end" title="End Element" data-value="End">End</div>
*/
let para = document.querySelector("p");
para.remove();

let mainDiv = document.querySelector(".our-element");

let start = document.createElement("div");
start.className = "start";
start.title = "start element";
start.setAttribute("data-value", "start");
start.innerText = "start";

let end = document.createElement("div");
end.className = "end";
end.title = "end element";
end.setAttribute("data-value", "end");
end.innerText = "end";

mainDiv.before(start);
mainDiv.after(end);

//assignment 04 
/*
<div>
    <span>Hello</span> 
    <!-- We Need The Next Text Without Spaces -->
    Elzero 
</div>
*/

let thisDiv = document.querySelectorAll("div")[3];
let text = thisDiv.childNodes[4].textContent.trim();
console.log(text);

//assignment 05  
let fifthDiv = document.querySelectorAll("div")[4];    
let secondSpan = document.querySelectorAll("span")[1]; 
let firstP = document.querySelectorAll("p")[0];        
let firstArticle = document.querySelectorAll("article")[0]; 
let firstSection = document.querySelectorAll("section")[0];

let elements = [fifthDiv, secondSpan, firstP, firstArticle, firstSection];

elements.forEach(function(element) {
  if (element) {
    element.addEventListener("click", function () {
      console.log(`This Is ${element.nodeName}`);
    });
  }
});
