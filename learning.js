console.log("hi");
function checkDivisibility() {
    let num = Math.floor(Math.random() * 1000) + 1; // Generate a random number between 1 and 1000
    console.log(`Generated number: ${num}`);

    if (num % 7 === 0 && num % 9 === 0) {
        console.log("Success! The number is divisible by both 7 and 9.");
    } else {
        console.log("Failure. The number is not divisible by both 7 and 9.");
    }
} //used google/ai for help

checkDivisibility();

let tempature = Math.floor(Math.random() * 100) + 1;
var ans = tempature >= 90? "too hot": tempature <= 60? "too cold":  "perfect";
console.log('tempature =' ,tempature);
console.log(ans); //used google for help

function addition (){
}


