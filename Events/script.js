// let grandParent = document.querySelector(".grandparent");
// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");


//<------------- Capturing & Bubbling Phase --------------------->

// grandParent.addEventListener("click", function(){
//     alert("Grandparent clicked");
// });

// grandParent.addEventListener("click", function(){
//     alert("Grandparent clicked");
// }, true);

// parent.addEventListener("click", function(){
//     alert("Parent clicked");
// });

// parent.addEventListener("click", function(){
//     alert("Parent clicked");
// }, true);

// child.addEventListener("click", function(){
//     alert("Child clicked");
// });

// child.addEventListener("click", function(){
//     alert("Child clicked");
// }, true);


//<------------- Event Object --------------------->

// grandParent.addEventListener("click", function(event){
//     console.log("Grand Parent");
//     console.log(event.target);
//     console.log(event.currentTarget);
// });

// parent.addEventListener("click", function(event){
//     console.log("Parent");
//     console.log(event.target);
//     console.log(event.currentTarget);
//     console.log(event.stopPropagation());
// });

// child.addEventListener("click", function(event){
//     console.log("Child");
//     console.log(event.target);
//     console.log(event.currentTarget);
// });

// parent.addEventListener("click", function(event){
//     console.log("Parent");
//     console.log(event.target);
//     console.log(event.currentTarget);
//     console.log(this);
// });


//<--------------- Event Delegation --------------------->

let container = document.querySelector(".container");

container.addEventListener("click", function(event){
    if(event.target.classList.contains("box")){
        console.log(event.target.textContent);
    }
});    

