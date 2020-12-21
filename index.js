// Import stylesheets
import "./style.css";

// Write Javascript code!
const app = document.getElementById("app");

// example data
// array: -- [10, 15, 2, 22, 13, 31, 8, 47] -- max: 25
// array: -- [1, 28, 7, 22, 55, 30, 15, 16] -- max:  31

function findMedian(numArray, maxNum) {
  let median = null;
  // filter out all numbers greater than maxNum then sort the array in ascending order
  const sortedArray = numArray
    .filter(num => num <= maxNum)
    .sort((a, b) => a - b);

  const sortedLength = sortedArray.length;

  if (sortedLength === 0 || maxNum === 0) {
    median = "Empty Array";
  } else {
    median = sortedArray[Math.floor(sortedLength / 2)];
  }

  return (app.innerHTML = `
    <h1>Find Median with Constraints</h1>
    <p1> Incoming Array: [${numArray}]</p1> 
    </br> 
    <p1>Max Number: ${maxNum}</p1> 
    <h3>Result:</h3>
    <p1>${median}</p1>
  `);
}

const maxNum = 25;
const numArray = [1, 28, 7, 22, 55, 30, 15, 16, 10, 15, 2, 22, 13, 31, 8, 47];

findMedian(numArray, maxNum);
