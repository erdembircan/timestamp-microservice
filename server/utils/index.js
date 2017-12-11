function validDateCheck(dateObject) {
  if (dateObject.toString() !== 'Invalid Date') {
    if (isNaN(dateObject.getTime())) {
      return false;
    }
    return true;
  }

  return false;
}

const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

module.exports = {
  validDateCheck,
  Months,
};
