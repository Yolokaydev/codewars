//https://www.codewars.com/kata/52597aa56021e91c93000cb0
export function moveZeros(arr) {
  for (var i = arr.length; i--; ) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}

//https://www.codewars.com/kata/52685f7382004e774f0001f7
export function humanReadable(seconds) {
  let sec = seconds % 60;
  let minutes = Math.floor(seconds / 60) % 60;
  let hours = Math.floor(seconds / 3600);

  function formatNumber(number) {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  }

  return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(sec)}`;
}

//https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
export function cakes(recipe, available) {
  let result = Infinity;

  for (let x in recipe) {
    result = Math.min(Math.floor(available[x] / recipe[x]), result);
  }

  return result || 0;
}

//https://www.codewars.com/kata/52449b062fb80683ec000024
export function generateHashtag(str) {
  if (str.trim() === '') return false;

  let camelcaseString = str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  let hasgtag = "#" + camelcaseString;

  return hasgtag.length > 140 ? false : hasgtag;
  
}
