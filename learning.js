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

console.log(`Greatest distance: ${maxDistance} (between ${num1} and ${num2})`); //used google /ai for help

console.log ("Question 7 ***********") 

const squaredNumbers = randomNumbers.map(num => num * num);

console.log("Squared numbers array:", squaredNumbers); //used google/ ai for help

console.log ("Question 8 ***********") 

const maxNumber = Math.max(...squaredNumbers);
console.log("Largest number in the array:", maxNumber);

const filteredNumbers = squaredNumbers.filter(num => num > maxNumber / 2);

console.log("Numbers greater than half of the max number:", filteredNumbers); //used google/ai for help

console.log("Question 9 ***********");

const sum = filteredNumbers.reduce((acc, num) => acc + num, 0); //used google/ai for help

console.log("Sum of filtered numbers:", sum);

console.log("Question 10 ***********");

squaredNumbers.forEach((num, index) => {
    console.log(`array[${index}] = ${num}`);
}); //used google/ai for help

console.log("Question 11 ***********");

class SoccerPlayer {
    constructor(name, age, position) {
        this.name = name;        // String variable
        this.age = age;          // Number variable
        this.position = position; // String variable
    }

    // Custom print function
    printDetails() {
        console.log(`Player Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Position: ${this.position}`);
    }
}

// Creating an instance of SoccerPlayer
const player1 = new SoccerPlayer("Lionel Messi", 36, "Forward");

// Calling the custom print function
player1.printDetails(); //used google/ai for help

console.log("Question 12 ***********");

const players = [
    new SoccerPlayer("Lionel Messi", 36, "Forward"),
    new SoccerPlayer("Cristiano Ronaldo", 39, "Forward"),
    new SoccerPlayer("Kevin De Bruyne", 32, "Midfielder"),
    new SoccerPlayer("Virgil van Dijk", 32, "Defender"),
    new SoccerPlayer("Kylian Mbappé", 25, "Forward"),
    new SoccerPlayer("Luka Modrić", 38, "Midfielder"),
    new SoccerPlayer("Neymar Jr", 32, "Forward"),
    new SoccerPlayer("Erling Haaland", 23, "Forward"),
    new SoccerPlayer("Sergio Ramos", 38, "Defender"),
    new SoccerPlayer("Robert Lewandowski", 35, "Forward")
];

// 1. Filtering the array for players who are "Forward"
const forwards = players.filter(player => player.position === "Forward");
console.log("Filtered Forwards:", forwards);

// 2. Mapping to create a new array of only ages
const ages = players.map(player => player.age);
console.log("Filtered Forwards:", forwards.map(player => `${player.name} (${player.age}, ${player.position})`));

// 3. Using forEach() to change the values (increasing each player's age by 1)
players.forEach(player => player.age += 1);
console.log("Players after increasing age by 1:", players.map(player => `${player.name} (${player.age}, ${player.position})`));

// 4. Custom sort method to sort players by age in ascending order
players.sort((a, b) => a.age - b.age);
console.log("Players sorted by age (Ascending):", players.map(player => `${player.name} (${player.age}, ${player.position})`));

// 5. Sorting players in descending order
players.sort((a, b) => b.age - a.age);
console.log("Players sorted by age (Descending):", players.map(player => `${player.name} (${player.age}, ${player.position})`));
//help from google/ai