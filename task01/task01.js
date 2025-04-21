//assignment 01
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `my name is ${member.name}, my age is ${member.age}, I live in ${member.country}`;
  },
};
console.log(member.name); //
console.log(member.age); // 38
console.log(member.country); //
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

//assignment 02
//method 01
let object01 = {
  name: "object 01",
};
console.log(object01.name);

//method 02
let object02 = new Object({
  name: "object 02",
});
console.log(object02.name);

//method 03
function obj(name) {
  this.name = name;
}
let object03 = new obj("object 03");
console.log(object03.name);

//method 04
let object04 = Object.create(object01);
object04.name = "object 04";
console.log(object04.name);

//assignment 03
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({}, { a }, threeNums, twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

//assignment 04
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

let objectLength = Object.keys(myFavGames).length;
let gameNames = Object.keys(myFavGames); // save it once

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${gameNames[i]}`);
  console.log(`The Publisher Is ${myFavGames[gameNames[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[gameNames[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if ("bestThree" in myFavGames[gameNames[i]]) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[gameNames[i]].bestThree.one}`);
    console.log(`Second => ${myFavGames[gameNames[i]].bestThree.two}`);
    console.log(`Third => ${myFavGames[gameNames[i]].bestThree.three}`);
  }

  console.log("#".repeat(20));
}
