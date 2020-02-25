const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const t = 0.693 /  HALF_LIFE_PERIOD ;

module.exports = function dateSample(sampleActivity) {
    if(typeof sampleActivity !== 'string'){
        return false;
    }
    let num = parseFloat(sampleActivity);
    if(num < 15 && num > 0){
        return Math.ceil(Math.log(MODERN_ACTIVITY/num) / t);
    }else{
        return false;
    }
  };