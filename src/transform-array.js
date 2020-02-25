module.exports = function transform(arr) {

    if (!Array.isArray(arr)) {
        throw new Error('Error');
    }

    let narr = [];

    for (let i = 0; i < arr.length; i++)
        if (arr[i] != '--discard-prev' && arr[i] != '--double-prev' && arr[i] != '--double-next' && arr[i] != '--discard-next') {
            narr.push(arr[i]);
        }
    else if (arr[i] == '--discard-next' && i < arr.length - 1) {
        i += 1;
    } else if (arr[i] == '--discard-prev' && i > 0) {
        narr.pop();
    } else if (arr[i] == '--double-next' && i < arr.length - 1) {
        narr.push(arr[i + 1]);
    } else if (arr[i] == '--double-prev' && i > 0) {
        narr.push(arr[i - 1]);
    }
    return narr;
};