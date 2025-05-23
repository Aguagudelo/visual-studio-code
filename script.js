function signIn() {
    alert("Redirecting to sign in page...");
}

function visitDatabase() {
    alert("Opening database...");
}

function meetCrew() {
    alert("Meet the awesome crew!");
}

function guessNumber(number, random) {
    if(number) {
        if (answer) {
           document.getElementById("answer").innerHTML="congrats! This is the number.";
        }
        else{
            document.getElementById("answer").innerHTMberL="Oh no! it is not the number. Try again.";
        }
    }
    else{
        document.getElementById("answer").innerHTML="please type a vali number.";
    }
}