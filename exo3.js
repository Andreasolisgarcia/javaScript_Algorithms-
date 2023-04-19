const fs = require('fs');
const filePath = __dirname + "/" + process.argv[2]
const fileName = process.argv[2];
const K = process.argv[3];


// No name provited
if (process.argv.length < 3){
    console.error('Error: Please provide a filename as an argument.')
    return
}

// No k provided
if (process.argv.length < 4){
    console.error('Error: Please provide a Number after your name file.')
    return
}


fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error('Error: File not found');
      return;
    }
 //   console.log('***** File exists ******');
  });



  // Méthode synchrone
let data;
try {
    data = fs.readFileSync(fileName, 'utf8');
} catch (error) {
    console.error(error.message);
}

const splitData = data.split("\n");
const intArray = splitData.map(str => parseInt(str));

function sumCheck(array, k) {
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

console.log(sumCheck(intArray, K))

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
