// document.getElementById("count-el").innerText = 5

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)

// let myAge = 36 ;
// let humanDogRatio = 1*7 ;
// let myDogAge = myAge * humanDogRatio ;
// console.log(myDogAge) ;

let countEl = document.getElementById("count-el");
let prevEnt = document.getElementById("prev-ent");

console.log(countEl);
console.log(prevEnt);

let count = 0;

function increment() {
  console.log("The button was clicked!");
  count += +1;
  countEl.textContent = count;
  console.log(countEl);
}

function decrese() {
  console.log("Decrese button was clicked!");
  count += -1;
  countEl.textContent = count;
  console.log(countEl);
}

function save() {
  prevEnt.textContent += " " + count + " - ";
}
