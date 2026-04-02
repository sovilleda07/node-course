const buildMakePerson = ({ getUUID, getAge }) => {
  return ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};

// const john = buildPerson(obj);

// console.log(john);

module.exports = {
  buildMakePerson,
};
