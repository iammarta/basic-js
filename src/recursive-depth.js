module.exports = class DepthCalculator {
	calculateDepth(arr) {
    let result = 1;
    if (Array.isArray(arr)) {
  for (let i = 0; i < arr.length; i++) {
    result = Math.max(this.calculateDepth(arr[i]) + 1, result);
  }
  return result;
	} else {
    return 0;
  }}
};