const fs = require("fs");
const filePath = __dirname + "/" + process.argv[2];
const fileName = process.argv[2];
const K = process.argv[3];

// No name provited
if (process.argv.length < 3) {
    console.error("\x1b[31m%s\x1b[0m", "Error: Please provide a filename as an argument.");
  return;
}
if (fileName != 'wtf.txt') {
  console.error("\x1b[31m%s\x1b[0m", "Error: Please provide the correct filename");
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
  console.log("\x1b[36m" + "intArray data from " + fileName + "\x1b[0m");
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


const sumCheck = (array, k) =>{
  const set = new Set();

  for (const num of array) {
    const complement = k - num;
    if (set.has(complement)) {
      return true;
    }
    set.add(num);
  }
  return false;
}
// ***************  change array data ************//
const array = intArray;
// **********************************************//
console.log(sumCheck(array, K));

/*
The Set object in JavaScript allows you to store unique values of any type, primitive values or
 object references. One of the main benefits of using a Set instead of an array is that it provides 
 an efficient way to check whether a value exists in the collection.

When you use the includes() method with an array, it performs a linear search of the entire array 
until it finds a matching element (or reaches the end of the array). This means that as the size of 
the array grows, the time required to search for an element also grows proportionally.

In contrast, the Set object is implemented as a hash table, which provides constant-time lookups 
regardless of the number of elements stored in the set. The has() method simply checks if a particular 
value is present in the set or not, and returns a boolean indicating whether the set contains the 
specified value or not.

So while both methods (includes() for arrays and has() for sets) achieve the same thing of checking 
if an element is present or not, the Set implementation is generally faster and more efficient when 
dealing with large collections of unique values.
*/
