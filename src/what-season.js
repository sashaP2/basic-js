const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date){
    throw new Error('Unable to determine the time of year!');
  }

  let today = new Date();
  let now = today.toLocaleString();
  if(date < now){
    throw new Error('Invalid date!');
  }

  let i = date.getMonth();

  if(0 <= i <= 1 || i === 11) {
    return 'winter';
  } else if(2 <= i <= 4){
    return 'spring';
  } else if(5 <= i <= 7) {
    return 'summer';
  } else {
    return 'autumn';
  }

}

module.exports = {
  getSeason
};
