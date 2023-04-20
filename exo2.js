const fs = require("fs");
const filePath = __dirname + "/" + process.argv[2];
const fileName = process.argv[2];

// No name provited
if (process.argv.length < 3) {
    console.error("\x1b[31m%s\x1b[0m", "Error: Please provide a filename as an argument.");
  return;
}
if (fileName != 'wtf.txt') {
  console.error("\x1b[31m%s\x1b[0m", "Error: Please provide the correct filename");
return;
}

// Check if the file exists
fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error("\x1b[31m%s\x1b[0m", "Error: File not found");
    return;
  }
  console.log("\x1b[36m" + "intArray with data from " + fileName + "\x1b[0m");
});

// Méthode synchrone
let data;
try {
  data = fs.readFileSync(fileName, "utf8");
} catch (error) {
  console.error(error.message);
}

const splitData = data.split("\n");
const intArray = []
try {
  for (const num of splitData) {
    if (/^[0-9]+$/.test(num)) {
      intArray.push(parseInt(num));
    } else {
      throw new Error("Invalid input");
    }
  }
} catch (error) {
  console.error("\x1b[31m%s\x1b[0m", `Error: ${error.message}. Please provide the correct input (only numbers).`);
  process.exit(1);
}

const nextIsTaller = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let isTaller = true;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] >= array[i]) {
        isTaller = false;
        break;
      }
    }
    if (isTaller) {
      count++;
    }
  }
  return count;
};

// ***************  change array data ************//
const array = intArray;
// **********************************************//
console.log(`\u001b[32mBuildings with sun: ${nextIsTaller(array)} \u001b[0m`);
// node exo2.js wtf.txt
