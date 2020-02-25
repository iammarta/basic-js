module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    return {
        turns: (2 ** disksNumber),
        seconds: (2 ** disksNumber) / (turnsSpeed/3600)
      };
};