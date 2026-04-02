interface BuilMakePersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOption {
  name: string;
  birthdate: string;
}

export const buildMakePerson = ({ getUUID, getAge }: BuilMakePersonOptions) => {
  return ({ name, birthdate }: PersonOption) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};
