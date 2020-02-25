module.exports = function getSeason(date) {
    let obj = {
      0: 'winter',
      1: 'winter',
      2: 'spring',
      3: 'spring',
      4: 'spring',
      5: 'summer',
      6: 'summer',
      7: 'summer',
      8: 'autumn',
      9: 'autumn',
      10: 'autumn',
      11: 'winter'
    };
    if(Object.prototype.toString.call(date) === "[object Date]" && date !== undefined) {
      let check = date.getMonth();
      for(let key in obj) {
        return obj[check];
      }}else if(date === undefined){
       return 'Unable to determine the time of year!';
      }else{
      throw new Error('Error');
    }
  };