export function evenOrOdd(number) {
  //https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
  return number % 2 === 0 ? "Even" : "Odd";
}

//https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript
export function cubeChecker(volume, side) {
  return Math.pow(side, 3) === volume && side > 0;
}

//https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
export function positiveSum(arr) {
  const reducer = (accumulator, current) =>
    accumulator + (current > 0 ? current : 0);
  return arr.reduce(reducer, 0);
}

//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
export function makeNegative(num) {
  return num > 0 ? -num : num;
}

//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
export function reverseString(str) {
  return str.split("").reverse().join("");
}

//https://www.codewars.com/kata/53369039d7ab3ac506000467
export function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

//https://www.codewars.com/kata/5265326f5fda8eb1160004c8
export function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
}

//https://www.codewars.com/kata/56dec885c54a926dcd001095
export function opposite(number) {
  return -number;
}

//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
export function removeChar(str) {
  return str.slice(1, -1);
}

//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
export function repeatStr(n, s) {
  return s.repeat(n);
}

//https://www.codewars.com/kata/515e271a311df0350d00000f
export function squareSum(numbers) {
  // let sum = 0
  // for( let i = 0; i < numbers.length; i++) {
  //     sum += numbers[i] **2
  // }
  // return sum

  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

//https://www.codewars.com/kata/55d24f55d7dd296eb9000030
export function summation(num) {
  return (num * (num + 1)) / 2;
}

//https://www.codewars.com/kata/57eae20f5500ad98e50002c5
export function noSpace(x) {
  return x.replaceAll(" ", "");
}

//https://www.codewars.com/kata/55a2d7ebe362935a210000b2
export function findSmallestInt(args) {
  return args.reduce(function (min, n) {
    return min <= n ? min : n;
  }, args[0]);

  //return Math.min(...args)
}

//https://www.codewars.com/kata/54edbc7200b811e956000556
export function countSheeps(arrayOfSheep) {
  let sheeps = 0;
  for (const sheep of arrayOfSheep) {
    if(sheep) sheeps++;
  }
  return sheeps

  //return arrayOfSheep.filter(Boolean).length;
}

//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
export function century(year) {
  return Math.ceil(year/100)
}

//https://www.codewars.com/kata/582cb0224e56e068d800003c
export function litres(time) {
  return Math.floor(time * 0.5);
}


//https://www.codewars.com/kata/544675c6f971f7399a000e79

//https://www.codewars.com/kata/57356c55867b9b7a60000bd7

//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

//https://www.codewars.com/kata/5545f109004975ea66000086