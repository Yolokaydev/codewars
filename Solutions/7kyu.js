//https://www.codewars.com/kata/54ff3102c1bad923760001f3
export function getCount(str) {
  const vovels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const letter of str) {
    if (vovels.includes(letter)) {
      count++;
    }
  }
  return count;
}

//https://www.codewars.com/kata/52fba66badcd10859f00097e
export function disemvowel(str) {
  //   const vovels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U" ];
  //   for (const vovel of vovels) {
  //     str = str.replaceAll(vovel, "");
  //   }
  //   return str;
  return str.replace(/[aeiou]/gi, ""); //g-global i=insensitive. Case insensitive
}

//https://www.codewars.com/kata/546e2562b03326a88e000020
export function squareDigits(num) {
  let numbers = num.toString().split("");
  let squares = numbers.map((digit) => digit * digit);

  return squares.join("") * 1;
}

//https://www.codewars.com/kata/554b4ac871d6813a03000035
export function highAndLow(numbers) {
  let numArray = numbers
    .toString()
    .split(" ")
    .map((i) => Number(i));

  return Math.max(...numArray) + " " + Math.min(...numArray);
}

//https://www.codewars.com/kata/5467e4d82edf8bbf40000155
export function descendingOrder(n) {
  return n.toString().split("").sort().reverse().join("") * 1;
}

//https://www.codewars.com/kata/56747fd5cb988479af000028
export function getMiddle(s) {
  let middle = Math.floor(s.length / 2);
  return s.length % 2 == 0 ? `${s[middle - 1]}${s[middle]}` : s[middle];
}

//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
export function accum(s) {
  return [...s.toUpperCase()].reduce(
    (acc, cur, index) => acc + "-" + cur + cur.toLowerCase().repeat(index)
  );
}
//https://www.codewars.com/kata/558fc85d8fd1938afb000014
export function sumTwoSmallestNumbers(numbers) {
  // numbers.sort();
  // return numbers[0] + numbers[1];
}

//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
export function isSquare(n) {
  return Math.sqrt(n) % 1 !== 0  ? false : true;
}

//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
export function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(item => typeof item === 'number')
}

//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
export function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;

  // let i, j;
  // str = str.toLowerCase();
  // for (i = 0; i < str.length; ++i) {
  //   for (j = i + 1; j < str.length; ++j) {
  //     if (str[i] === str[j]) {
  //       return false;
  //     }
  //   }
  // }
  // return true;
}

//https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript
export function toJadenCase(string) {
  let split = this.split(' ');
};