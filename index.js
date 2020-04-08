// Your code here
function reduceToAllTrue(arr) {
  for (let i = 0; i < arr.length; i++ ) {
    if (!arr[i]) return false
  }
  return true
}

function reduceToAnyTrue(arr) {
  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i]) return true
  }
  return false
}

const reduceToTotal = (arr,start=0) => arr.reduce((sum,el)=>sum+el,start);
const mapToNegativize = arr => arr.map(el => -1 * el);
const mapToNoChange = arr => arr.map(el => el);
const mapToDouble = arr => arr.map(el => el * 2);
const mapToSquare = arr => arr.map(el => el * el);
