const fs = require("fs");
const filePath = __dirname + "/" + process.argv[2];
const fileName = process.argv[2];
const K = process.argv[3];

// No name provited
if (process.argv.length < 3) {
    console.error("\x1b[31m%s\x1b[0m", "Error: Please provide a filename as an argument.");
  return;
}

// No k provided
if (process.argv.length < 4) {
  console.error("\x1b[31m%s\x1b[0m", "Error: Please provide a Number after your name file.");
  return;
}

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error("\x1b[31m%s\x1b[0m", "Error: File not found");
    return;
  }
});

// Méthode synchrone
let data;
try {
  data = fs.readFileSync(fileName, "utf8");
} catch (error) {
  console.error(error.message);
}

const splitData = data.split("\n");
const intArray = splitData.map((str) => parseInt(str));

const sumCheck = (array, k) => {
  var boolean = false;
  let numbers = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == k) {
        boolean = true;
        numbers.push([array[i], array[j]]);
        return { boolean, numbers };
      }
    }
  }
  return boolean;
};

// ***************  change array data ************//
const array = intArray;
// **********************************************//
const result = sumCheck(array, K);
const outputString = `\x1b[34mBoolean:\x1b[0m ${result.boolean}\n\x1b[35mNumbers:\x1b[0m ${JSON.stringify(result.numbers)}`;
console.log(outputString);