// THIS IS THE ALGORITHM =============================================================================================================

// requires each board cell to be designated by matrix like indices (i,j) - example fields below
function checkForWin(fields) {
    const [a,b,c] = fields.sort((a,b) => a.j - b.j).sort((a,b) => a.i - b.i) // sort fields twice (by both indices). If subsequently
    return isWin = (2*b.i-a.i === c.i) && (2*b.j-a.j === c.j) // the equation 2*b-a === c holds for both indices, then there is a win
}

// ===================================================================================================================================
// ===================================================================================================================================



// Real Game Scenario:

// in a real game each possible combination of triplets must be
// compared though (in case 4 fields were selected before the win)

function checkForGameWin(fields) {
  for (let a = 0; a < fields.length; a++)
    for (let b = a+1; b < fields.length; b++)
      for (let c = b+1; c < fields.length; c++)
        if (checkForWin([fields[a], fields[b], fields[c]])) {
          console.log("player has won!")
          return true;
        }

  console.log("player has not won.")
  return false;
}




// ===================================================================================================================================
// ===================================================================================================================================

// example:

let exampleFields1 = [{i: 1 ,j: 2},{i: 2 ,j: 1}, {i: 3 ,j: 3}];
let exampleFields2 = [{i: 1 ,j: 1},{i: 3 ,j: 1}, {i: 2 ,j: 1}];

console.log(checkForWin(exampleFields1)) // => false
console.log(checkForWin(exampleFields2)) // => true




// ===================================================================================================================================
// ===================================================================================================================================

// Verfication:
// checking if all solutions, but ONLY the solutions are identified

const possibleCombinations = [];
const allFields = [];

// all fields
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
      allFields.push({i, j})
  }
}

// all combations of fields
for (let a = 0; a < 9; a++) {
  for (let b = a+1; b < 9; b++) {
    for (let c = b+1; c < 9; c++) {
      possibleCombinations.push([allFields[a], allFields[b], allFields[c]])
      possibleCombinations.push([allFields[a], allFields[c], allFields[b]])
      possibleCombinations.push([allFields[b], allFields[a], allFields[c]])
      possibleCombinations.push([allFields[b], allFields[c], allFields[a]])
      possibleCombinations.push([allFields[c], allFields[a], allFields[b]])
      possibleCombinations.push([allFields[c], allFields[b], allFields[a]])
    }
  }
}


const winningCombinations = possibleCombinations.filter(fields => checkForWin(fields));
console.log("%cwinning combinations:", "color: red");
console.log(winningCombinations);
