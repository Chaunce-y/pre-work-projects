//declaring placeholders for computer and players choices
let playerChoice = null;
let computerChoice = null;
//declaring variable for each option the player or computer should choose from
const firstChoice = "Lapis";
const secondChoice = "Papyrus";
const thirdChoice = "Scalpellus";

const player = {
  currentChoice: null
};
const computer = {
  currentChoice: null
};

const choices = ["Lapis","Papyrus","Scalpellus"];

function computerChooses(){
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];
console.log("The computer chose " + computer.currentChoice + ".");
}

function playerChooses (){
  document.querySelector("#lapis").addEventListener("click", function(){
    player.currentChoice = choices[0];
    compareChoices();
    console.log("You chose " + player.currentChoice + ".");
  });
  document.querySelector("#papyrus").addEventListener("click",function(){
    player.currentChoice = choices[1];
    compareChoices();
    console.log("You chose " + player.currentChoice);
  });
 document.querySelector("#scalpellus").addEventListener("click",function(){
    player.currentChoice = choices[2];
   compareChoices();
   console.log(player.currentChoice);
  });


}

function compareChoices(){
  computerChooses();
  if (player.currentChoice === computer.currentChoice){
    displayResult("It's a tie! You and the computer both chose " + computer.currentChoice + ". Try again!");
} else if (computer.currentChoice === choices[0]){
    if (player.currentChoice === choices[1]){
      displayResult("You Win! "+ player.currentChoice +" beats " + computer.currentChoice + "! Play again!");
  }
      else {
        displayResult("Sorry, you lose! " + computer.currentChoice + " beats " + player.currentChoice + ". Try again!");
  }
} else if (computer.currentChoice === choices[1]){
  if (player.currentChoice === choices[2]){
    displayResult("You Win! "+ player.currentChoice +" beats " + computer.currentChoice + "! Play again!");
  } else {
    displayResult("Sorry, you lose! " + computer.currentChoice + " beats " + player.currentChoice + ". Try again!");
  }
} else if (computer.currentChoice === choices[2]){
  if (player.currentChoice === choices[0]){
    displayResult("You Win! "+ player.currentChoice +" beats " + computer.currentChoice + "! Play again!");
  } else {
    displayResult("Sorry, you lose! " + computer.currentChoice + " beats "+ player.currentChoice +". Try again!");
    }
  }
}

function displayResult(result){
  const resultText = document.querySelector('p');
  resultText.innerText = result;

}

// invoke function that tells program which button was clicked and player makes their choice


playerChooses();
