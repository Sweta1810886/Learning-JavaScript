//  <----------------Selection of HTML elements----------------->

// let h1 = document.querySelector("h1");
// console.log(h1);

// let para = document.querySelector("p");
// console.log(para);

// let a = document.getElementsByTagName("div");
// console.log(a);

// let b = document.getElementById("box");
// console.log(b);

// let c = document.getElementsByClassName("paragraph");
// console.log(c);

// let d = document.querySelectorAll("div");
// console.log(d);

// let container = document.querySelector(".container");
// console.log(container); 
// console.log(container.children); 
// console.log(container.firstChild);


//   <-----------------Manipulation HTML----------------->

// let h2 = document.querySelector("h2");
// h2.innerText = "This     is    a      new    heading";
// console.log(h2.innerText);
// console.log(h2.textContent);
// console.log(h2.innerHTML);


//Append, Prepend, After, Before
// let div = document.querySelector("div");
// let element = document.createElement("p");
// element.innerText = "This is a new paragraph created using JavaScript.";

// div.append(element);
// div.prepend(element);
// div.after(element);
// div.before(element);
//div.insertAdjacentElement("afterend", element);

// let p = div.children[0];
// p.remove();

// let alpha = document.querySelector("#alpha");

// let parentNode = alpha.parentNode;
// console.log(parentNode);
// parentNode.append(element);

//attribute manipulation
// let div = document.querySelector(".container");
// console.log(div.getAttribute("class"));
// div.setAttribute("id", "newContainer");

//    <-----------Manipulation of css------------->

//let div = document.querySelector(".div");
// div.setAttribute("style", "background-color: lightblue; color: white;");

// div.style.backgroundColor = "lightblue";
// div.style.fontSize = "20px";

//div.style.cssText = "background-color: lightblue; color: white; font-size: 20px;";

// div.className = "newDiv";
// console.log(div.className);

// div.classList.add("newDiv");
// console.log(div.classList);

// div.classList.remove("newDiv");
// console.log(div.classList);

// let isAvailable = div.classList.contains("newDiv");
// console.log(isAvailable);


//   <------------Event handling------------------>
// let btn = document.querySelector("#btn");
// let div = document.querySelector(".div");

// btn.onclick = ()=>{
//     alert("Button clicked");
// }

// btn.addEventListener("click", ()=>{
//     console.log("event listener");
// });

// let showMsg = function(){
//     console.log("Hello!");
// }

// btn.addEventListener("click", showMsg);
// btn.removeEventListener("click", showMsg);

//Mouse events

// btn.addEventListener("mouseup", ()=>{
//     console.log("Mouse up event");
// });

// btn.addEventListener("mousedown", ()=>{
//     console.log("Mouse down event");
// });

// div.addEventListener("mouseenter", ()=>{
//     console.log("Mouse entered the div");
// });      

// div.addEventListener("mouseleave", ()=>{
//     console.log("Mouse left the div");
// });

// div.addEventListener("mousemove", ()=>{
//     console.log("Mouse moved inside the div");
// });

// div.addEventListener("mouseover", ()=>{
//     console.log("Mouse over the div");
// });

// div.addEventListener("mouseout", ()=>{
//     console.log("Mouse out of the div");
// });

//keyboard events
// btn.addEventListener("keypress", function(){
//     console.log("key pressed");
// });

// btn.addEventListener("keydown", function(){
//     console.log("key down");
// });

// btn.addEventListener("keyup", function(){
//     console.log("key up");
// });

//Form events
//let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.log("Form submitted");
// });

// let nameInput = document.querySelector(".name");
// nameInput.addEventListener("input", function(){
//     console.log("Input changed: " + nameInput.value);
// });
// nameInput.addEventListener("focus", function(){
//     console.log("Input focused");
// });

//window events
// window.addEventListener("load", function(){
//     console.log("Window loaded");
// });

// window.addEventListener("resize", function(){
//     console.log("Window resized");
// });

// window.addEventListener("scroll", function(){
//     console.log("Window scrolled");
// });


//clipboard events
// let h1 = document.querySelector("h1");
// h1.addEventListener("copy", function(){
//     console.log("Text copied");
// });