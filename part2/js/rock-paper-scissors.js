function main() {
    decision = "Y";
    while (decision == "Y") {
        choice = window.prompt("Enter choice rock/paper/scissor");

        var result = Math.round(Math.random() * 10) % 3;

        if (result == 1) {
            toss = "rock";
        } else if (result == 2) {
            toss = "paper";
        } else if (result == 0) {
            toss = "scissor";
        }

        if (toss == choice) {

            decision = window.prompt("OOps its a tie !!!!! Press Y to try again and N to exit the game.");
        } else

        if (toss == "rock" && choice == "paper") {
            window.alert("You win !!!!!");
            decision = "N";
        } else
        if (toss == "paper" && choice == "scissor") {
            window.alert("You win !!!!!");
            decision = "N";
        } else
        if (toss == "scissor" && choice == "rock") {
            window.alert("You win !!!!!");
            decision = "N";
        } else {
            window.alert("Sorry. You lost !!!!!");
            decision = "N";
        }

    }
}
main();