let playAgain = true;

while(playAgain){
    alert("You wake up in a dark forest...");
    userChoice = prompt("Do you want to go 'left' or 'right' ?");

    if(userChoice=="left"){
        alert("You walk into a swamp...");
        userChoice2 = prompt("You see something shiny in the mud. Do you pick it up? (yes or no)");
        if(userChoice2== "yes"){
            alert("iT's a magic stone! you are teleported to safety. You win!🥳");
        }else{
            alert("You sink slowly into the mud. Game over...")
        }
    }else{
        alert("You find a cave...");
        userChoice3 = prompt("Do you want to enter the cave?(yes or no)");
        if(userChoice3=== "yes"){
            alert("A dragon wakes up and chased you away. you barely escape!😰");
        }else{
            alert("You set up camp outside the cave. A peaceful night under the stars. You win!🥳")
        }
    }
    userChoice4 = prompt("Do you want to play again?(yes or no)");
    if(userChoice4 === 'no'){
        playAgain = no;
        alert("Thanks for playing 😊")
    }
}