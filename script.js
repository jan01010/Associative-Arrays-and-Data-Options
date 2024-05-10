// Lesson 3: Associative Arrays & Data Options

// Ex 1. English grades

// let lastNames = ["McDavid", "Nougent-Hopkins", "Draisaitl"];
// let englGrades = [73, 91, 85];
// let writingDiploma = [true, false, false];

// let lastN = lastNames.pop();
// let lastG = englGrades.pop();
// let lastD = writingDiploma.pop();

// lastNames.unshift(lastN);
// englGrades.unshift(lastG);
// writingDiploma.unshift(lastD);

// console.log("Last name \t\t Grade \t Writing Diploma");

// console.log("--------- \t\t ----- \t ----------------");

// console.log(
//   lastNames[0] + "\t\t\t\t" + englGrades[0] + "\t\t\t\t" + writingDiploma[0]
// );

// console.log(
//   lastNames[1] + "\t\t" + englGrades[1] + "\t\t\t\t" + writingDiploma[1]
// );

// console.log(
//   lastNames[2] + "\t\t\t" + englGrades[2] + "\t\t\t\t" + writingDiploma[2]
// );

// You try: Put this data in alphabetical order using array methods (e.g. push/pop/splice, etc)

// Ex 2. Rectangles

// var rectangles = [
//   [100, 150, 20, 200],
//   [220, 200, 130, 45],
//   [150, 300, 75, 75],
// ];

// console.log(rectangles[1][2]); // 130

// ctx.fillStyle = "green";

// // Push another rectangle
// var aRectangle = [20, 300, 45, 75];
// rectangles.push(aRectangle);
// console.log(rectangles);

// for (let i = 0; i < rectangles.length; i++) {
//   ctx.fillRect(
//     rectangles[i][0],
//     rectangles[i][1],
//     rectangles[i][2],
//     rectangles[i][3]
//   );
// }

// // Change 2nd rectangle width to 200
// rectangles[1][2] = 200;

// You try: build the other rectangles, preferrably using a loop

// Assignment: Ex 1:

// let userName = prompt("Enter your name: ");
// let userLastname = prompt("Enter your last name: ");
// let userheight = +prompt("Enter your height: ");

// var firstNames = ["Bones", "Welma", "Frank", "Han", "Jack"];

// var lastNames = ["Smith", "Seger", "Mathers", "Solo", "Jackles"];

// var heights = [158, 169, 172, 183, 201];

// firstNames.push(userName);
// lastNames.push(userLastname);
// heights.push(userheight);

// for (let i = 0; i < heights.length; i++) {
//   if (userheight <= heights[i]) {
//     firstNames.splice(i, 0, userName);
//     lastNames.splice(i, 0, userLastname);
//     heights.splice(i, 0, userheight);
//     break;
//   } else if (i == heights.length - 1) {
//     firstNames.push(userName);
//     lastNames.push(userLastname);
//     heights.push(userheight);
//     break;
//   }
// }

// console.table([firstNames, lastNames, heights]);

// Assignment: Ex 2:

// let row;
// let column;

// let ticTacToeBoard = [
//   ["X", "X", "O"],
//   ["", "X", "O"],
//   ["", "", ""],
// ];

// function displayBoard(board) {
//   for (let row = 0; row < 3; row++) {
//     console.log(
//       "[" +
//         board[row][0] +
//         "]\t[" +
//         board[row][1] +
//         "]\t[" +
//         board[row][2] +
//         "]"
//     );
//   }
// }

// function winner(player, board) {
//   for (let i = 0; i < 3; i++) {
//     if (board[i][0] == player && board[i][1] == player && board[i][2] == player)
//       return true;

//     if (board[0][i] == player && board[1][i] == player && board[2][i] == player)
//       return true;
//   }

//   if (board[0][0] == player && board[1][1] == player && board[2][2] == player)
//     return true;

//   if (board[0][2] == player && board[1][1] == player && board[2][0] == player)
//     return true;

//   return false;
// }

// do {
//   row = +prompt("Enter row:") - 1;
//   column = +prompt("Enter column:") - 1;
// } while (ticTacToeBoard[row][column] != "");

// ticTacToeBoard[row][column] = "X";
// displayBoard(ticTacToeBoard);

// console.log(winner("X", ticTacToeBoard));

// Assignment: Ex 3:

var dragon = {
  health: 100,
  atkString: ">",
  attackPwr: 15,
};

function attack(actor) {
  let attack = "";
  for (let i = 0; i < actor.attackPwr; i++) {
    attack += actor.atkString;
  }

  console.log(attack);
}

attack(dragon);

var player = {
  health: randomInt(80, 100),
  atkString: "--->",
  attackPwr: randomInt(10, 20),
};

attack(player);

console.log("The dragon attacks!\n");
attack(dragon);
player.health -= dragon.attackPwr;

console.log(
  "\nThe player is struck for " +
    dragon.attackPwr +
    " and has " +
    player.health +
    " health remaining.\n"
);

console.log("The player attacks!\n");
attack(player);
dragon.health -= player.attackPwr;

console.log(
  "\nThe dragon is struck for " +
    player.attackPwr +
    " and has " +
    dragon.health +
    " health remaining.\n"
);
