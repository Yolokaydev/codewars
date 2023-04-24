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
