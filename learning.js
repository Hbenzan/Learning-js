console.log ("Question 1 ***********") 
function checkDivisibility() {
    let num = Math.floor(Math.random() * 1000) + 1; // Generate a random number between 1 and 1000
    console.log(`Generated number: ${num}`);

    if (num % 7 === 0 && num % 9 === 0) {
        console.log("Success! The number is divisible by both 7 and 9.");
    } else {
        console.log("Failure. The number is not divisible by both 7 and 9.");
    }
} //used google/ai for help (1)

checkDivisibility();

console.log ("Question 2 ***********") 

let tempature = Math.floor(Math.random() * 100) + 1;
var ans = tempature >= 90? "too hot": tempature <= 60? "too cold":  "perfect";
console.log('tempature =' ,tempature);
console.log(ans); //used google for help (2)

console.log ("Question 3 ***********") 

function myFunction(p1, p2) {
    return p1 + p2;
  }

console.log (myFunction (1,2)); //used google for help (3)

console.log ("Question 4 ***********") 

hello = (hb,mb) => {
    return myFunction(hb,mb);
  }

  console.log (hello (1,2)); //used google for help (4)

console.log ("Question 5 ***********") 

  const cars = ["Saab", "Volvo", "BMW", "Toyota", "Honda", "Ford", "Chevrolet", "Mercedes", "Audi", "Nissan", "Hyundai", "Kia", "Tesla", "Subaru", "Mazda"];
  let car = cars[0];
  console.log (cars.length) 
  console.log("First element:", cars[0]);
  console.log("Last element:", cars[cars.length - 1]);
  const randomIndex = Math.floor(Math.random() * cars.length);
 console.log("Random element:", cars[randomIndex]);
cars.sort();
console.log("Sorted array:", cars);
cars.push("Lamborghini");
console.log("After push:", cars);
cars.push(2024);
console.log("After adding an integer:", cars); //used google for help (5)

console.log ("Question 6 ***********") 

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumbers = Array.from({ length: 10 }, () => getRandomNumber(29, 87));

console.log("Random numbers:", randomNumbers);
let maxDistance = 0;
let num1, num2;

for (let i = 0; i < randomNumbers.length - 1; i++) {
    let distance = Math.abs(randomNumbers[i] - randomNumbers[i + 1]);
    
    if (distance > maxDistance) {
        maxDistance = distance;
        num1 = randomNumbers[i];
        num2 = randomNumbers[i + 1];
    }
}

console.log(`Greatest distance: ${maxDistance} (between ${num1} and ${num2})`);

console.log ("Question 7 ***********") 




