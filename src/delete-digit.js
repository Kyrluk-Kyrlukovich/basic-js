const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numStr = n.toString(); // Преобразуем число в строку
  let maxNum = 0;

  for (let i = 0; i < numStr.length; i++) {
    // Удаляем i-й символ и преобразуем оставшиеся символы обратно в число
    const numWithoutDigit = parseInt(
      numStr.slice(0, i) + numStr.slice(i + 1),
      10,
    );
    maxNum = Math.max(maxNum, numWithoutDigit); // Сравниваем с текущим максимальным числом
  }

  return maxNum;
}

module.exports = {
  deleteDigit,
};
