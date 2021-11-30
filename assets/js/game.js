// Establishes the variable "playerName" as what the person puts in the prompt
var playerName = window.prompt("what is your robot's name?");
// Establishes the variable "playerHealth" as 100
var playerHealth = 100;

// Establishes the variable "playerAttack" as 10
var playerAttack = 10;

var playerMoney = 10;
// You can also log multiple values at once like this:
console.log(playerName, playerAttack, playerHealth)

var enemyName = "Roborto" ;
var enemyHealth = "50" ;
var enemyAttack = "12" ;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!")
    
    var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter FIGHT or SKIP to choose");
    console.log(promptFight);
    // if player choses to fight, then fight
    if(promptFight === "fight" || promptFight === "FIGHT" ){
    // Subtract the value of 'playerAttack from the value of 'enemyHealth and use the result to update the value in the 'enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining"
    );
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealther' variable
        playerHealth = playerHealth -enemyAttack
    // Log a resulting message to the console so we know that it worked
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " +playerHealth + " health reaming"
        )
        
        // check enemy's health
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!")
        }
        else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.")
        }

        // check player health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!")
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " health left.")
        }
    }else if (promptFight === "skip" || promptFight === "SKIP"){   // confrim player wants to skip
        var confirmmSkip = window.confirm("Are you sure you'd like to quit");
        // if yes (true), leave fight

        if (confirmmSkip) {
            window.alert(playerName + " has decided to skip the fight, Goodbye!")
        // subtract money from plaerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        //if no (false), ask question again by running fight(again)
        else{
            fight();
        }
        
    } else {
        window.alert("You need to choose a valid option. Try again!")
    }
}
    fight();