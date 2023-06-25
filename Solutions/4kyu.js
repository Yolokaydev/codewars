//https://www.codewars.com/kata/52742f58faf5485cae000b9a
export function formatDuration(seconds) {
  if (seconds === 0) return "now";

  let time = {
    year: Math.floor(seconds / 31536000),
    day: Math.floor(seconds / 86400) % 365,
    hour: Math.floor(seconds / 3600) % 24,
    minute: Math.floor(seconds / 60) % 60,
    second: seconds % 60,
  };
  let times = [];
  let count = 0;
  for (const [key, value] of Object.entries(time)) {
    if (value !== 0) {
      let s = value > 1 ? "s" : "";
      times.push(`${value} ${key}${s}`);
      count++;
    }
  }

  let readable = "";
  for (const [index, value] of times.entries()) {
    if (index > 0 && index < times.length - 1) {
      readable += ", ";
    } else if (index === times.length - 1 && times.length > 1) {
      readable += " and ";
    }
    readable += value;
  }
  return readable;
}

//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
export function snail(array) {
  // let newArray = [];
  // for (let index = 0; index < array.length; index++) {
  //   let element = array[index];
  //   //console.log(element);
  //   // console.log(`element index: ${index}, element: ${element}` );
  //   if(index%2 != 0) {
  //     element.reverse();
  //   }
  //   for (let el of element) {
  //     newArray.push(el);
  //   }
  // }
  // return newArray;
}

//https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
export function solution(input, markers) {
  let comment = input.split("\n");
  let lines = [];
  let newlines = [];
  for (let string of comment) {
    lines.push(string);
  }

  for (let marker of markers) {
    for (let line of lines) {
      let index = line.indexOf(marker);
      //console.log(`marker: ${marker} index: ${index}`);
      if (index !== -1) {
        newlines = line.slice(0, index);
      } else {
        newlines = line;
        
      }
    }
  }

  //String.trimEnd()
  console.log(lines);
  console.log(newlines);
}
