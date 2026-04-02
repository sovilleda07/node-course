const getAgePlugin = require('get-age');

const getAge = (birthdate) => {
  if (!birthdate) return new Error('birthday is requeried');

  return getAgePlugin(birthdate);
};

module.exports = {
  getAge,
};
