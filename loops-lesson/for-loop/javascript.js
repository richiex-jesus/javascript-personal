// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion", "Cougar"];

// for (const cat of cats) {
//   console.log(cat);
// }

// function toUpper(string) {
//   return string.toUpperCase();
// }

// const upperCats = cats.map(toUpper);

// console.log(upperCats);
// // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

// function lCat(cat) {
//   return cat.startsWith("L")
// }

// function cCat(cat) {
//   return cat.startsWith("C")
// }

// const Lfiltered = cats.filter(lCat)
// const Cfiltered = cats.filter(cCat)

// console.log(Lfiltered)
// console.log(Cfiltered)

// const cats = ["Pete", "Biggles", "Jasmine", "Richard", "Ray"];

// let myFavoriteCats = "My cats are called ";

// let i = 0;

// while (i < cats.length) {
//   if (i === cats.length - 1) {
//     myFavoriteCats += `and ${cats[i]}.`;
//   } else {
//     myFavoriteCats += `${cats[i]}, `;
//   }

//   i++;
// }

// console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

function getUserInput() {
  let userInput = prompt("Please type a number that is more than 100.")
  return userInput;
}

function repeatError() {
  while (true) {
    let i = parseInt(getUserInput());
    if (i < 100) {
      alert("test invalid. try again.")
    } else {
      alert("congratulations for being able to follow instructions!")
      break;
    }
  }
}
repeatError();








