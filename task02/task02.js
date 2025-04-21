//assignment 01
let t1 = document.getElementById("elzero");
let t2 = document.getElementsByClassName("element")[0];
let t3 = document.getElementsByTagName("div")[0];
let t4 = document.getElementsByName("js")[0];
let t5 = document.querySelector("#elzero");
let t6 = document.querySelector(".element");
let t7 = document.querySelector('[name ="js"]');
let t8 = document.querySelector("div");
let t9 = document.querySelectorAll("#elzero")[0];
let t10 = document.querySelectorAll(".element")[0];
let t11 = document.querySelectorAll('[name ="js"]')[0];
let t12 = document.querySelectorAll("div")[0];
let t13 = document.body.children[0];
let t14 = document.body.firstElementChild[0];
let t15 = document.body.querySelector("div")[0];

//assignment 02 

// for (let i = 0 ; i<= 10 ; i++ ){
//     document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     document.images[i].setAttribute("alt" , "Elzero logo");
// }

//assignment 03 

/* <form action="">
<input type="number" name="dollar" placeholder="USD Dollar" />
<div class="result">{0} USD Dollar = {0} Egyptian Pound</div>
</form> */

let input = document.querySelector('input[name = "dollar"]');
let result = document.querySelector(".result");

input.oninput = function(){
    let dollar = input.value ;
    let egyPound = dollar * 15.6;

    result.innerText = `{${input.value}} USD Dollar = {${egyPound.toFixed(2)}} Egyptian Pound`
}

/* 
<div class="one" title="two">Two</div>
<div class="two" title="one">One</div>
*/

//assignment 04 
let add2 = document.createTextNode(" 2 ");

let class1 = document.querySelector(".one");
let class2 = document.querySelector(".two")

let value1 = class2.getAttribute("title"); //one
let value2 = class1.getAttribute("title"); //two
console.log(value2);
class1.setAttribute("title", class2.getAttribute("title"));
class1.innerText = value1;
class2.setAttribute("title", value2);
class2.innerText = value2;
class2.appendChild(add2);

//assignment 05 

let imgs = document.images;
for ( let i = 0 ; i<= imgs.length ; i++){
    if (imgs[i].hasAttribute("alt")){
        imgs[i].setAttribute("alt","old");
    }else{
        imgs[i].setAttribute("alt","Elzero New");
    }
}