module.exports = function repeater(str, options) {
    let res = '';
    
    let defaultValues = {
        separator: '+',
        additionSeparator: '|',
        repeatTimes: 1,
        additionRepeatTimes: 1,
        addition: ''
    };
    if (!options.separator) {
        options.separator = defaultValues.separator;
    }
    if (!options.additionSeparator) {
        options.additionSeparator = defaultValues.additionSeparator;
    }
    if (!options.repeatTimes) {
        options.repeatTimes = defaultValues.repeatTimes;
    }
    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = defaultValues.additionRepeatTimes;
    }
    if (options.addition === undefined) {
        options.additionRepeatTimes = defaultValues.addition;
    }

    for (let i = 0; i < options.repeatTimes; i++) {
        res = res + str;

        for (let j = 0; j < options.additionRepeatTimes; j++) {
            res = res + options.addition;

            if (j < options.additionRepeatTimes - 1) {
                res = res + options.additionSeparator;
            }
        }

        if (i < options.repeatTimes - 1) {
            res = res + options.separator;
        }
    }

    return res;
};