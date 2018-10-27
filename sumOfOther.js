module.exports = function sumOfOther(arr) {
  const result = [];
  const incomeArr = [...arr];
  for (let i = 0; i < incomeArr.length; i += 1) {
    result[i] = incomeArr.reduce(((acc, item, index) => (i !== index ? acc + item : acc)), 0);
  }
  return result;
};
