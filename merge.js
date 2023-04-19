const fs = require("fs");
const filePath = __dirname + "/" + process.argv[2];
const fileName = process.argv[2];

// No name provited
if (process.argv.length < 3) {
    console.error("\x1b[31m%s\x1b[0m", "Error: Please provide a filename as an argument.");
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
intArray = splitData.map((str) => parseInt(str));
let count = 0
const merge = (left, right) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (left.length > i && right.length > j) {
    count++;
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
};

const recursiveMergeSort1 = (unsortedArray) => {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  const mid = Math.floor(unsortedArray.length / 2);
  const left = unsortedArray.slice(0, mid);
  const right = unsortedArray.slice(mid);

  return merge(recursiveMergeSort1(left), recursiveMergeSort1(right));
};
// ***************  change array data ************//
const array = intArray;
// **********************************************//
console.log("\x1b[35m%s\x1b[0m", "unsorted-Array : " + array);
console.log(`\u001b[32mMerge comparisons: ${count} - Sorted array : [${recursiveMergeSort1(array)}] \u001b[0m`);
// node merge.js wtf.txt