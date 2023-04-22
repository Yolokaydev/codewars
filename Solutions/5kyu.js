//https://www.codewars.com/kata/52597aa56021e91c93000cb0
export function moveZeros(arr) {
  for(var i = arr.length; i--;) {
    if(arr[i]===0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  } return arr;
}

//https://www.codewars.com/kata/52685f7382004e774f0001f7
export function humanReadable (seconds) {
  
  // return '';
}