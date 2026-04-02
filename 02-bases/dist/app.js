"use strict";
// const { emailTemplate } = require('./js-foundation/01-template');
// console.log(emailTemplate);
Object.defineProperty(exports, "__esModule", { value: true });
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
/*const { getUserById } = require('./js-foundation/04-arrows');

const id = 1;

getUserById(id, (error, user) => {
  if (error) throw new Error(error);
  console.log({ user });
  });
  */
/*
 // !Referencia a la función factory y uso de inyección de dependencias.
 
 const { getAge, getUUID } = require('./plugins');
 
 const { buildMakePerson } = require('./js-foundation/05-factory');
 
 const makePerson = buildMakePerson({ getUUID, getAge });
 
 const obj = { name: 'John', birthdate: '1997-07-07' };
 
 const john = makePerson(obj);
 
 console.log(john);
 */
/*
// ! API
const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(4)
.then((pokemon) => console.log({ pokemon }))
.catch((err) => console.error(err))
.finally(() => console.log('Finalmente'));
*/
/*import { buildLogger } from './plugins/logger.plugin';
const logger = buildLogger('app.js');

logger.log('Hola mundo');
logger.error('Esto es algo malo');

getPokemonById(4);
*/
//# sourceMappingURL=app.js.map