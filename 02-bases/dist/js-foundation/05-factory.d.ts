interface BuilMakePersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}
interface PersonOption {
    name: string;
    birthdate: string;
}
export declare const buildMakePerson: ({ getUUID, getAge }: BuilMakePersonOptions) => ({ name, birthdate }: PersonOption) => {
    id: string;
    name: string;
    birthdate: string;
    age: number;
};
export {};
//# sourceMappingURL=05-factory.d.ts.map