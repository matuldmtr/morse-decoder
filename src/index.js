const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr10 = expr.match(/.{1,10}/g);
  let result = [];

  for (let item of arr10) {
    let arr2 = item.match(/.{1,2}/g);
    
    let filtered = arr2.filter((e) => e !== "00");

    let morse = filtered
      .map((i) => (i == 10 ? "." : i == 11 ? "-" : "**"))
      .join("");

    if (Object.keys(MORSE_TABLE).includes(morse)) {
      result.push(MORSE_TABLE[morse]);
    } else {
      result.push(" ");
    }
  }

  return result.join("").toString();
}

module.exports = {
  decode,
};
