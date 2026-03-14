
const DIAMOND_SIZE = 5;

function generateRow(spaces, stars) {
  let row = "";

  for (let i = 0; i < spaces; i++) {
    row += " ";
  }

  for (let i = 1; i <= 2 * stars - 1; i++) {
    if (i === 1 || i === 2 * stars - 1) {
      row += "*";
    } else {
      row += " ";
    }
  }

  console.log(row);
}


for (let i = 1; i <= DIAMOND_SIZE; i++) {
  generateRow(DIAMOND_SIZE - i, i);
}
for (let i = DIAMOND_SIZE - 1; i >= 1; i--) {
  generateRow(DIAMOND_SIZE - i, i);
}