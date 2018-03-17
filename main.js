$(document).ready(function() {

// Set up all characters with base values
//  array [Health Points, AttackPower, CounterAttackPower]
//  Attack Power - only used by player character (not Defender), increases by base Attack Power every attack
//  Counter Attack Power - stays the same base amount after every attack
let lukeValues = [250, 15, 20];
let obiValues = [210, 10, 25];
let sidiousValues = [170, 20, 10];
let maulValues = [190, 25, 15];

// create array with all characters
// let characters = [$(".luke"), $(".obi"), $(".sidious"), $(".maul")];
// console.log(characters);

// $(".characterDiv").on("click", function(event) {
//     console.log(event.target);
//     let characterChosen = event.target;
    

// player clicks on character to start game
// when any element in characters array is clicked, append the other elements to enemies line and capture the element that was clicked
// $(characters).on("click", function(fighterChoice) {
//    console.log(fighterChoice);
//    $(".enemies").append($(".sidious"));
  
$(".luke").on("click", function() {
  $(".enemies").append($(".obi")); // change background color to red here
  $(".enemies").append($(".sidious"));
  $(".enemies").append($(".maul")); // how do i put the above 3 lines into 1 append statement? 

    $(".obi").on("click", function() {
        $(".defender").append($(".obi"));
    });

    $(".sidious").on("click", function() {
        $(".defender").append($(".sidious"));
        // need to repeat this for each enemy
    });

    $(".maul").on("click", function() {
        $(".defender").append($(".maul"));
        // need to repeat this for each enemy
    });
});

$(".obi").on("click", function() {
    $(".enemies").append($(".luke")); // change background color to red here
    $(".enemies").append($(".sidious"));
    $(".enemies").append($(".maul")); // how do i put the above 3 lines into 1 append statement? 

    $(".luke").on("click", function() {
        $(".defender").append($(".luke"));
        // need to repeat this for each enemy
    });

    $(".sidious").on("click", function() {
        $(".defender").append($(".sidious"));
        // need to repeat this for each enemy
    });

    $(".maul").on("click", function() {
        $(".defender").append($(".maul"));
        // need to repeat this for each enemy
    });

});

$(".sidious").on("click", function() {
    $(".enemies").append($(".luke")); // change background color to red here
    $(".enemies").append($(".obi"));
    $(".enemies").append($(".maul")); // how do i put the above 3 lines into 1 append statement? 

    $(".luke").on("click", function() {
        $(".defender").append($(".luke"));
        // need to repeat this for each enemy
    });

    $(".obi").on("click", function() {
        $(".defender").append($(".obi"));
    });


    $(".maul").on("click", function() {
        $(".defender").append($(".maul"));
        // need to repeat this for each enemy
    });

});

$(".maul").on("click", function() {
    $(".enemies").append($(".luke")); // change background color to red here
    $(".enemies").append($(".sidious"));
    $(".enemies").append($(".obi")); // how do i put the above 3 lines into 1 append statement? 

    $(".luke").on("click", function() {
        $(".defender").append($(".luke"));
        // need to repeat this for each enemy
    });

    $(".obi").on("click", function() {
        $(".defender").append($(".obi"));
    });

    $(".sidious").on("click", function() {
        $(".defender").append($(".sidious"));
        // need to repeat this for each enemy
    });

});

// player clicks an enemy
//  chosen enemy moves to Defender line 
// $(characters).on("click", function() {
// for (var i =0; i <= characters.length; i++) {
//         $(".defender").append($(characters[i]));
//     }
// });


// player clicks attack repeatedly
$(".attack").on("click", function() {
    //  player's HP changes
    lukeValues[0] = lukeValues[0] + lukeValues[1] - obiValues[2];
    //  Defender's HP changes
    obiValues[0] = obiValues[0] - lukeValues[1];
    console.log(lukeValues[0]);
    console.log(obiValues[0]);

    if (lukeValues[0] <= 0) {
        // show you lose message
        // show restart game button
        $(".defender").append("<button class='restart'>Restart Game</button>");
        alert("You Lose!!");
        
        $(".restart").on("click", function() {
            // reset to start page here
            console.log("restart");
        })
    }

    else if (obiValues[0] <= 0) {
        // remove obi from Defender div
        $(".defender").empty();
        // show message you defeated Obi and choose another enemy
        alert("You won this battle!");
        alert("Choose another foe");
    }
    
});

});

